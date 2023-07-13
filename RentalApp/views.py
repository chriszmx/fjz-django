from django.http import JsonResponse
from .forms import RentalApplicationForm
import json

def rental_application(request):
    if request.method == "POST":
        data = json.loads(request.body)
        form = RentalApplicationForm(data)
        if form.is_valid():
            form.save()
            return JsonResponse({"message": "Form submitted successfully"})
        else:
            errors = form.errors.get_json_data(escape_html=True)
            return JsonResponse(errors, status=400)
