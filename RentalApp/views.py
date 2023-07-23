from rest_framework import generics
from .models import RentalApplication
from .serializers import RentalApplicationSerializer
from rest_framework.response import Response
from rest_framework import status

class RentalApplicationList(generics.ListCreateAPIView):
    queryset = RentalApplication.objects.all()
    serializer_class = RentalApplicationSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save()
