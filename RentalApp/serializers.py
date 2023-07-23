from rest_framework import serializers
from .models import RentalApplication, Occupant, Pet, Vehicle

class OccupantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Occupant
        fields = "__all__"

class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = "__all__"

class VehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicle
        fields = "__all__"

class RentalApplicationSerializer(serializers.ModelSerializer):
    occupants = OccupantSerializer(many=True)
    pets = PetSerializer(many=True)
    vehicles = VehicleSerializer(many=True)

    class Meta:
        model = RentalApplication
        fields = [
        # Add all the properties
        "id",
        "first_name",
        "middle_name",
        "last_name",
        "email",
        "social_security_number",
        "phone_number",
        "apartment_location",
        "date_and_time",
        "date_of_birth",
        "marital_status",
        "driver_license_number",
        "present_home_address",
        "length_of_time_at_address",
        "landlord_phone",
        "reason_for_leaving",
        "amount_of_rent",
        "is_rent_up_to_date",
        "number_of_occupants",
        "occupants",
        "number_of_pets",
        "pets",
        "number_of_vehicles",
        "vehicles",
        "employment_status",
        "current_employer",
        "occupation",
        "supervisor",
        "hours_per_week",
        "employer_phone",
        "years_employed",
        "employment_address",
        "current_income",
        "current_income_amount",
        "income_source",
        "has_proof_of_income",
        "car_loan_lien_holder",
        "car_loan_balance",
        "car_loan_monthly_payment",
        "car_loan_creditor_phone",
        "credit_card_company",
        "credit_card_balance_owed",
        "credit_card_monthly_payment",
        "creditor_phone_number",
        "child_support_creditor_owed",
        "child_support_balance",
        "child_support_monthly_payment",
        "child_support_creditor_phone",
        "bank_account_name",
        "bank_account_balance",
        "bank_account_monthly_payment",
        "account_number",
        "emergency_contact",
        "emergency_contact_phone",
        "emergency_contact_relationship",
        "emergency_contact_address",
        "personal_reference_name",
        "personal_reference_contact_phone",
        "personal_reference_contact_relationship",
        "personal_reference_contact_address",
        "has_been_sued",
        "has_been_bankrupt",
        "guilty_of_felony",
        "has_broken_lease",
        "has_been_locked_out_by_sheriff",
        "has_been_brought_to_court",
        "has_moved_owing_rent_or_damaged",
        "is_move_in_amount_available",
        "signature",
        "date"
    ]

    def create(self, validated_data):
        occupants_data = validated_data.pop('occupants')
        pets_data = validated_data.pop('pets')
        vehicles_data = validated_data.pop('vehicles')

        rental_application = RentalApplication.objects.create(**validated_data)

        for occupant_data in occupants_data:
            Occupant.objects.create(rental_application=rental_application, **occupant_data)
        for pet_data in pets_data:
            Pet.objects.create(rental_application=rental_application, **pet_data)
        for vehicle_data in vehicles_data:
            Vehicle.objects.create(rental_application=rental_application, **vehicle_data)

        return rental_application
