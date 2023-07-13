from django.urls import path
from .views import rental_application

urlpatterns = [
    path("rentalapp/", rental_application, name="rentalapp")
]
