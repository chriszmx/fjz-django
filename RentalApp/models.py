from django.core.exceptions import ValidationError
from django.db import models
import re

def validate_social_security_number(value):
    if not re.match(r'^\d{3}-\d{2}-\d{4}$', value):
        raise ValidationError('Invalid Social Security Number format. Must be XXX-XX-XXXX.')

class SocialSecurityNumberField(models.CharField):
    def __init__(self, *args, **kwargs):
        kwargs.setdefault('max_length', 11)
        super().__init__(*args, **kwargs)
        self.validators.append(validate_social_security_number)

class Pet(models.Model):
    PET_TYPES = [
        ("small_dog", "Small Dog (under 10 LBS)"),
        ("medium_dog", "Medium Dog (Over 10 Under 35 LBS)"),
        ("large_dog", "Large Dog (Over 35 LBS)"),("pit_bull", "Pit Bull"),
        ("cat", "Cat"),("bird", "Bird"),("fish", "Fish"),("rabbit", "Rabbit"),
        ("hamster", "Hamster"), ("guinea_pig", "Guinea Pig"), ("turtle", "Turtle"), ("snake", "Snake"), ("lizard", "Lizard"), ("horse", "Horse"), ("goat", "Goat"), ("reptile", "Reptile"), ("duck", "Duck"), ("amphibian", "Amphibian"), ("insect", "Insect"), ("rodent", "Rodent"), ("other","Other")
    ]

    name = models.CharField(max_length=100)
    pet_type = models.CharField(max_length=20, choices=PET_TYPES)
    indoor_outdoor = models.CharField(max_length=14, choices=[("Indoor", "Indoor"), ("Outdoor", "Outdoor"), ("Indoor_Outdoor", "Indoor/Outdoor")])
    age = models.IntegerField()
    rental_application = models.ForeignKey('RentalApplication', on_delete=models.CASCADE, null=True, related_name='pets')

    def __str__(self):
        return self.name

class Vehicle(models.Model):
    vehicle_year = models.IntegerField()
    vehicle_make = models.CharField(max_length=100)
    vehicle_model = models.CharField(max_length=100)
    vehicle_plate_number = models.CharField(max_length=20)
    vehicle_plate_state = models.CharField(max_length=20)
    rental_application = models.ForeignKey('RentalApplication', on_delete=models.CASCADE, null=True, related_name='vehicles')

    def __str__(self):
        return f"{self.vehicle_year} {self.vehicle_make} {self.vehicle_model}"

class Occupant(models.Model):
    RELATIONSHIP_CHOICES = [
        ("spouse", "Spouse"),
        ("child", "Child"),
        ("parent", "Parent"),
        ("sibling", "Sibling"),
        ("self", "Self"),
        ("other", "Other"),
    ]
    OCCUPATION_CHOICES = [
        ("employed", "Employed"),
        ("unemployed", "Unemployed"),
        ("student", "Student"),
        ("retired", "Retired"),
    ]
    AGE_CHOICES = [
        ("under18", "Under 18"),
        ("18-25", "18 to 25"),
        ("26-35", "26 to 35"),
        ("36-45", "36 to 45"),
        ("46-55", "46 to 55"),
        ("56-65", "56 to 65"),
        ("over65", "Over 65"),
    ]

    name = models.CharField(max_length=100)
    relationship = models.CharField(max_length=20, choices=RELATIONSHIP_CHOICES)
    occupation = models.CharField(max_length=20, choices=OCCUPATION_CHOICES)
    age = models.CharField(max_length=10, choices=AGE_CHOICES)
    rental_application = models.ForeignKey('RentalApplication', on_delete=models.CASCADE, null=True, related_name='occupants')

    def __str__(self):
        return self.name

# Model for RentalApplication
class RentalApplication(models.Model):
    first_name = models.CharField(max_length=100)
    middle_name = models.CharField(max_length=100, blank=True)  # Make not required
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    social_security_number = SocialSecurityNumberField()
    phone_number = models.CharField(max_length=20)
    apartment_location = models.CharField(max_length=200)
    date_and_time = models.DateTimeField()

    # Page 2 fields
    date_of_birth = models.DateField(null=True)
    marital_status = models.CharField(max_length=20, choices=[("single", "Single"), ("married", "Married"), ("divorced", "Divorced"), ("widowed", "Widowed")])
    driver_license_number = models.CharField(max_length=100)
    present_home_address = models.CharField(max_length=200)
    length_of_time_at_address = models.CharField(max_length=100)
    landlord_phone = models.CharField(max_length=20)
    reason_for_leaving = models.CharField(max_length=200)
    amount_of_rent = models.CharField(max_length=5)
    is_rent_up_to_date = models.BooleanField()

    # foreign key stuff here OCCUPANTS, PETS, VEHICLES
    number_of_occupants = models.IntegerField()
    number_of_pets = models.IntegerField()
    number_of_vehicles = models.IntegerField()


    # Page 5? fields
    employment_status = models.CharField(max_length=20, choices=[("employed", "Employed"), ("unemployed", "Unemployed"), ("student", "Student"), ("retired", "Retired")])
    current_employer = models.CharField(max_length=200)
    occupation = models.CharField(max_length=200)
    supervisor = models.CharField(max_length=100)
    hours_per_week = models.CharField(max_length=100)
    employer_phone = models.CharField(max_length=20)
    years_employed = models.CharField(max_length=100)
    employment_address = models.CharField(max_length=200)

    # Page 6 fields
    current_income = models.CharField(max_length=20, choices=[("weekly", "Weekly"), ("bi-weekly", "Bi-weekly"), ("monthly", "Monthly"), ("yearly", "Yearly")])
    current_income_amount = models.CharField(max_length=100)
    income_source = models.CharField(max_length=100)
    has_proof_of_income = models.BooleanField()

    # Page 7 fields
    car_loan_lien_holder = models.CharField(max_length=200)
    car_loan_balance = models.IntegerField()
    car_loan_monthly_payment = models.IntegerField()
    car_loan_creditor_phone = models.CharField(max_length=20)
    credit_card_company = models.CharField(max_length=200)
    credit_card_balance_owed = models.IntegerField()
    credit_card_monthly_payment = models.IntegerField()
    creditor_phone_number = models.CharField(max_length=20)
    child_support_creditor_owed = models.CharField(max_length=200, blank=True, null=True)  # Make not required
    child_support_balance = models.CharField(max_length=100, blank=True, null=True)  # Make not required
    child_support_monthly_payment = models.CharField(max_length=100, blank=True, null=True)  # Make not required
    child_support_creditor_phone = models.CharField(max_length=20, blank=True, null=True)  # Make not required
    bank_account_name = models.CharField(max_length=200)
    bank_account_balance = models.IntegerField()
    bank_account_monthly_payment = models.IntegerField()
    account_number = models.CharField(max_length=100)

    # Page 8 fields
    emergency_contact = models.CharField(max_length=100)
    emergency_contact_phone = models.CharField(max_length=20)
    emergency_contact_relationship = models.CharField(max_length=100)
    emergency_contact_address = models.CharField(max_length=200)

    # Page 9 fields
    personal_reference_name = models.CharField(max_length=100)
    personal_reference_contact_phone = models.CharField(max_length=20)
    personal_reference_contact_relationship = models.CharField(max_length=100)
    personal_reference_contact_address = models.CharField(max_length=200)

    # Page 10 fields
    has_been_sued = models.BooleanField()
    has_been_bankrupt = models.BooleanField()
    guilty_of_felony = models.BooleanField()
    has_broken_lease = models.BooleanField()
    has_been_locked_out_by_sheriff = models.BooleanField()
    has_been_brought_to_court = models.BooleanField()
    has_moved_owing_rent_or_damaged = models.BooleanField()
    is_move_in_amount_available = models.BooleanField()

    # Page 11 fields
    # photo_id = models.ImageField(upload_to="rental_photos")

    # Page 12 fields
    signature = models.CharField(max_length=200)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
