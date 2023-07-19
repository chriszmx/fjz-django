from django import forms

class RentalApplicationForm(forms.Form):
    # Page 1
    first_name = forms.CharField(label="First Name")
    middle_name = forms.CharField(label="Middle Name", required=False)
    last_name = forms.CharField(label="Last Name")
    email = forms.EmailField(label="Email")
    social_security_number = forms.CharField(label="Social Security Number")
    phone_number = forms.CharField(label="Phone Number")
    apartment_location = forms.CharField(label="Apartment Location and Apartment Number")
    date_and_time = forms.DateTimeField(label="Date and Time")

    # Page 2
    date_of_birth = forms.DateField(label="Date of Birth", required=False)
    marital_status = forms.ChoiceField(label="Marital Status", choices=[("single", "Single"), ("married", "Married"), ("divorced", "Divorced"), ("widowed", "Widowed")])
    driver_license_number = forms.CharField(label="Driver License Number", required=False)
    present_home_address = forms.CharField(label="Present Home Address")
    length_of_time_at_address = forms.CharField(label="Length of time at address")
    landlord_phone = forms.CharField(label="Landlord Phone")
    reason_for_leaving = forms.CharField(label="Reason For Leaving")
    amount_of_rent = forms.CharField(label="Amount of Rent")
    is_rent_up_to_date = forms.ChoiceField(label="Is your present rent up to date?", choices=[("yes", "Yes"), ("no", "No")])
    number_of_occupants = forms.IntegerField(label="Number of Occupants")
    occupant_1_name = forms.CharField(label="Occupant 1 Name")
    occupant_1_relationship = forms.ChoiceField(label="Occupant 1 Relationship", choices=[("spouse", "Spouse"), ("child", "Child"), ("parent", "Parent"), ("sibling", "Sibling"), ("self", "Self"), ("other", "Other")], required=False)
    occupant_1_occupation = forms.ChoiceField(label="Occupant 1 Occupation", choices=[("employed", "Employed"), ("unemployed", "Unemployed"), ("student", "Student"), ("retired", "Retired")], required=False)
    occupant_1_age = forms.ChoiceField(label="Occupant 1 Age", choices=[("under18", "Under 18"), ("18-25", "18 to 25"), ("26-35", "26 to 35"), ("36-45", "36 to 45"), ("46-55", "46 to 55"), ("56-65", "56 to 65"), ("over65", "Over 65")], required=False)

    # Page 3
    number_of_pets = forms.ChoiceField(label="Number of Pets", choices=[("0", "0"), ("1", "1"), ("2", "2"), ("3", "3"), ("4", "4"), ("5+", "5+")], required=False)
    pet_name = forms.CharField(label="Pet Name", required=False)
    pet_type = forms.ChoiceField(label="Pet Type", choices=[("small_dog", "Small Dog (under 10 LBS)"), ("medium_dog", "Medium Dog (Over 10 Under 35 LBS)"), ("large_dog", "Large Dog (Over 35 LBS)"), ("pit_bull", "Pit Bull"), ("Cat", "Cat"), ("bird", "Bird"), ("fish", "Fish"), ("rabbit", "Rabbit"), ("hamster", "Hamster"), ("guinea_pig", "Guinea Pig"), ("turtle", "Turtle"), ("snake", "Snake"), ("lizard", "Lizard"), ("horse", "Horse"), ("goat", "Goat"), ("reptile", "Reptile"), ("duck", "Duck"), ("amphibian", "Amphibian"), ("insect", "Insect"), ("rodent", "Rodent"), ("other", "Other")], required=False)
    pet_indoor_outdoor = forms.ChoiceField(label="Pet Indoor/Outdoor", choices=[("indoor", "Indoor"), ("outdoor", "Outdoor"), ("indoor_outdoor", "Indoor/Outdoor")], required=False)
    pet_age = forms.IntegerField(label="Pet Age", required=False)

    # Page 4
    number_of_vehicles = forms.ChoiceField(label="Number of Vehicles", choices=[("0", "0"), ("1", "1"), ("2", "2"), ("3+", "3 or more")])
    vehicle_year = forms.CharField(label="Vehicle Year", required=False)
    vehicle_make = forms.CharField(label="Vehicle Make", required=False)
    vehicle_model = forms.CharField(label="Vehicle Model", required=False)
    vehicle_plate_number = forms.CharField(label="Vehicle Plate Number", required=False)
    vehicle_plate_state = forms.CharField(label="Vehicle Plate State", required=False)

    # Page 5
    employment_status = forms.ChoiceField(label="Employment Status", choices=[("employed", "Employed"), ("unemployed", "Unemployed"), ("student", "Student"), ("retired", "Retired")])
    current_employer = forms.CharField(label="Current Employer")
    occupation = forms.CharField(label="Occupation")
    supervisor = forms.CharField(label="Supervisor")
    hours_per_week = forms.CharField(label="Hours per Week")
    employer_phone = forms.CharField(label="Employer Phone")
    years_employed = forms.CharField(label="Years Employed")
    employment_address = forms.CharField(label="Employment Address")

    # Page 6
    current_income = forms.ChoiceField(label="Current Income", choices=[("weekly", "Weekly"), ("bi-weekly", "Bi-weekly"), ("monthly", "Monthly"), ("yearly", "Yearly")])
    current_income_amount = forms.CharField(label="Current Income Amount")
    income_source = forms.CharField(label="Income Source")
    has_proof_of_income = forms.ChoiceField(label="Proof of Income", choices=[("yes", "Yes"), ("no", "No")])

    # Page 7
    car_loan_lien_holder = forms.CharField(label="Car Loan Lien Holder", required=False)
    car_loan_balance = forms.CharField(label="Car Loan Balance", required=False)
    car_loan_monthly_payment = forms.CharField(label="Car Loan Monthly Payment", required=False)
    car_loan_creditor_phone = forms.CharField(label="Car Loan Creditor Phone Number", required=False)
    credit_card_company = forms.CharField(label="Credit Card Company", required=False)
    credit_card_balance_owed = forms.CharField(label="Credit Card Balanced Owed", required=False)
    credit_card_monthly_payment = forms.CharField(label="Credit Card Monthly Payment", required=False)
    creditor_phone_number = forms.CharField(label="Creditor Phone Number", required=False)
    child_support_creditor_owed = forms.CharField(label="Child Support / Other Creditor Owed", required=False)
    child_support_balance = forms.CharField(label="Child Support / Other (Balance)", required=False)
    child_support_monthly_payment = forms.CharField(label="Child Support / Other (Monthly Payment)", required=False)
    child_support_creditor_phone = forms.CharField(label="Child Support / Other (Creditor Phone)", required=False)
    bank_account_name = forms.CharField(label="Bank Account Name Of Bank", required=False)
    bank_account_balance = forms.CharField(label="Bank Account Balance", required=False)
    bank_account_monthly_payment = forms.CharField(label="Bank Account Monthly Payment", required=False)
    account_number = forms.CharField(label="Account Number", required=False)

    # Page 8
    emergency_contact = forms.CharField(label="Emergency Contact", required=False)
    emergency_contact_phone = forms.CharField(label="Emergency Contact Phone", required=False)
    emergency_contact_relationship = forms.CharField(label="Emergency Contact Relationship", required=False)
    emergency_contact_address = forms.CharField(label="Emergency Contact Address", required=False)

    # Page 9
    personal_reference_name = forms.CharField(label="Personal Reference Name", required=False)
    personal_reference_contact_phone = forms.CharField(label="Personal Reference Contact Phone", required=False)
    personal_reference_contact_relationship = forms.CharField(label="Personal Reference Contact Relationship", required=False)
    personal_reference_contact_address = forms.CharField(label="Personal Reference Contact Address" , required=False)

    # Page 10
    has_been_sued = forms.ChoiceField(label="Has Applicant Ever Been sued?", choices=[("yes", "Yes"), ("no", "No")], required=False)
    has_been_bankrupt = forms.ChoiceField(label="Has Applicant Ever Been Bankrupt?", choices=[("yes", "Yes"), ("no", "No")], required=False)
    has_guilty_of_felony = forms.ChoiceField(label="Has Applicant Ever Been Guilty Of A Felony?", choices=[("yes", "Yes"), ("no", "No")], required=False)
    has_broken_lease = forms.ChoiceField(label="Has Applicant Ever Broken A Lease?", choices=[("yes", "Yes"), ("no", "No")], required=False)
    has_been_locked_out_by_sheriff = forms.ChoiceField(label="Has Applicant Ever Been Locked Out Of Their Apartment By The Sheriff?", choices=[("yes", "Yes"), ("no", "No")], required=False)
    has_been_brought_to_court = forms.ChoiceField(label="Has Applicant Ever Been Brought To Court By Another Landlord?", choices=[("yes", "Yes"), ("no", "No")], required=False)
    has_moved_owing_rent_or_damaged = forms.ChoiceField(label="Has Applicant Ever Moved Owing Rent Or Damaged An Apartment?", choices=[("yes", "Yes"), ("no", "No")], required=False)
    is_move_in_amount_available = forms.ChoiceField(label="Is The Total Move-In Amount Available Now (Rent And Deposit)?", choices=[("yes", "Yes"), ("no", "No")], required=False)
    # Page 11
    photo_id = forms.ImageField(label="Upload Photo ID", required=False)

    # Page 12
    signature = forms.CharField(label="Signature")
    date = forms.DateField(label="Date")
