from django.core.serializers.json import DjangoJSONEncoder
from django.db import models


class ModelEncoder(DjangoJSONEncoder):
    def default(self, obj):
        if isinstance(obj, models.Model):
            return self.encode_model(obj)
        elif isinstance(obj, models.QuerySet):
            return list(obj.values())
        return super().default(obj)

    def encode_model(self, obj):
        model = type(obj)
        fields = [field.name for field in model._meta.fields]
        data = {field: getattr(obj, field) for field in fields}

        related_fields = [field for field in model._meta.get_fields() if field.is_relation]

        for related_field in related_fields:
            if isinstance(related_field, models.OneToOneField):
                related_obj = getattr(obj, related_field.name)
                data[related_field.name] = self.default(related_obj)
            elif isinstance(related_field, (models.ForeignKey, models.ManyToManyField)):
                related_objs = getattr(obj, related_field.name).all()
                data[related_field.name] = [self.default(related_obj) for related_obj in related_objs]

        if hasattr(model, "encoders"):
            for key, encoder in model.encoders.items():
                data[key] = encoder.default(getattr(obj, key))

        return data
