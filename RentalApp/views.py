from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .forms import RentalApplicationForm
import json
from .models import RentalApplication, Pet, Vehicle

@csrf_exempt
def rental_application(request):
    if request.method == "POST":
        data = json.loads(request.body)
        form = RentalApplicationForm(data, request.FILES)
        if form.is_valid():
            cleaned_data = form.cleaned_data
            pets_data = data.get('pets', [])
            vehicles_data = data.get('vehicle', [])
            rental_application = RentalApplication(
                first_name=cleaned_data['first_name'],
                middle_name=cleaned_data['middle_name'],
                last_name=cleaned_data['last_name'],
                email=cleaned_data['email'],
                social_security_number=cleaned_data['social_security_number'],
                phone_number=cleaned_data['phone_number'],
                apartment_location=cleaned_data['apartment_location'],
                date_and_time=cleaned_data['date_and_time'],
                date_of_birth=cleaned_data['date_of_birth'],
                marital_status=cleaned_data['marital_status'],
                driver_license_number=cleaned_data['driver_license_number'],
                present_home_address=cleaned_data['present_home_address'],
                length_of_time_at_address=cleaned_data['length_of_time_at_address'],
                landlord_phone=cleaned_data['landlord_phone'],
                reason_for_leaving=cleaned_data['reason_for_leaving'],
                amount_of_rent=cleaned_data['amount_of_rent'],
                is_rent_up_to_date=cleaned_data['is_rent_up_to_date'],
                number_of_occupants=cleaned_data['number_of_occupants'],
                employment_status=cleaned_data['employment_status'],
                current_employer=cleaned_data['current_employer'],
                occupation=cleaned_data['occupation'],
                supervisor=cleaned_data['supervisor'],
                hours_per_week=cleaned_data['hours_per_week'],
                employer_phone=cleaned_data['employer_phone'],
                years_employed=cleaned_data['years_employed'],
                employment_address=cleaned_data['employment_address'],
                current_income=cleaned_data['current_income'],
                current_income_amount=cleaned_data['current_income_amount'],
                income_source=cleaned_data['income_source'],
                has_proof_of_income=cleaned_data['has_proof_of_income'],
                car_loan_lien_holder=cleaned_data['car_loan_lien_holder'],
                car_loan_balance=cleaned_data['car_loan_balance'],
                car_loan_monthly_payment=cleaned_data['car_loan_monthly_payment'],
                car_loan_creditor_phone=cleaned_data['car_loan_creditor_phone'],
                credit_card_company=cleaned_data['credit_card_company'],
                credit_card_balance_owed=cleaned_data['credit_card_balance_owed'],
                credit_card_monthly_payment=cleaned_data['credit_card_monthly_payment'],
                creditor_phone_number=cleaned_data['creditor_phone_number'],
                child_support_creditor_owed=cleaned_data['child_support_creditor_owed'],
                child_support_balance=cleaned_data['child_support_balance'],
                child_support_monthly_payment=cleaned_data['child_support_monthly_payment'],
                child_support_creditor_phone=cleaned_data['child_support_creditor_phone'],
                bank_account_name=cleaned_data['bank_account_name'],
                bank_account_balance=cleaned_data['bank_account_balance'],
                bank_account_monthly_payment=cleaned_data['bank_account_monthly_payment'],
                account_number=cleaned_data['account_number'],
                emergency_contact=cleaned_data['emergency_contact'],
                emergency_contact_phone=cleaned_data['emergency_contact_phone'],
                emergency_contact_relationship=cleaned_data['emergency_contact_relationship'],
                emergency_contact_address=cleaned_data['emergency_contact_address'],
                personal_reference_name=cleaned_data['personal_reference_name'],
                personal_reference_contact_phone=cleaned_data['personal_reference_contact_phone'],
                personal_reference_contact_relationship=cleaned_data['personal_reference_contact_relationship'],
                personal_reference_contact_address=cleaned_data['personal_reference_contact_address'],
                has_been_sued=cleaned_data['has_been_sued'],
                has_been_bankrupt=cleaned_data['has_been_bankrupt'],
                has_guilty_of_felony=cleaned_data['has_guilty_of_felony'],
                has_broken_lease=cleaned_data['has_broken_lease'],
                has_been_locked_out_by_sheriff=cleaned_data['has_been_locked_out_by_sheriff'],
                has_been_brought_to_court=cleaned_data['has_been_brought_to_court'],
                has_moved_owing_rent_or_damaged=cleaned_data['has_moved_owing_rent_or_damaged'],
                is_move_in_amount_available=cleaned_data['is_move_in_amount_available'],
                photo_id=request.FILES.get('photo_id')
            )
            rental_application.save()

            for pet_data in pets_data:
                pet, _ = Pet.objects.get_or_create(
                    id=pet_data.get('id'),
                    defaults={
                        'name': pet_data['name'],
                        'pet_type': pet_data['pet_type'],
                        'indoor_outdoor': pet_data['indoor_outdoor'],
                        'age': pet_data['age'],
                    }
                )
                rental_application.pets.add(pet)

            for vehicle_data in vehicles_data:
                vehicle, _ = Vehicle.objects.get_or_create(
                    id=vehicle_data.get('id'),
                    defaults={
                        'vehicle_year': vehicle_data['vehicle_year'],
                        'vehicle_make': vehicle_data['vehicle_make'],
                        'vehicle_model': vehicle_data['vehicle_model'],
                        'vehicle_plate_number': vehicle_data['vehicle_plate_number'],
                        'vehicle_plate_state': vehicle_data['vehicle_plate_state'],
                    }
                )
                rental_application.vehicles.add(vehicle)

            return JsonResponse({"message": "Form submitted successfully"})
        else:
            errors = {}
            for field, field_errors in form.errors.items():
                errors[field] = field_errors
            return JsonResponse(errors, status=400)
