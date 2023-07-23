from django.urls import path
from .views import RentalApplicationList

urlpatterns = [
    path('rental_applications/', RentalApplicationList.as_view(), name='rental_application_list'),
]
