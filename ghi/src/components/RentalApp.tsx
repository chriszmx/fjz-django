import React, { useState } from 'react';

const RentalApplicationForm = () => {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleNextStep = () => {
		setStep((prevStep) => prevStep + 1);
	};

	const handlePreviousStep = () => {
		setStep((prevStep) => prevStep - 1);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<form className="max-w-md mx-auto" onSubmit={handleSubmit}>
			{/*page 1*/}
			{step === 1 && (
				<div className="mb-4">
					<label>First Name</label>
					<input
						type="text"
						name="first_name"
						value={formData.first_name || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full"
					/>
					<label>Middle Name</label>
					<input
						type="text"
						name="middle_name"
						value={formData.middle_name || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full"
					/>
					<label>Last Name</label>
					<input
						type="text"
						name="last_name"
						value={formData.last_name || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full"
					/>
					<label>Email</label>
					<input
						type="email"
						name="email"
						value={formData.email || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full"
					/>
					<label>Social Security Number</label>
					<input
						type="text"
						name="social_security_number"
						value={formData.social_security_number || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full"
					/>
					<label>Phone Number</label>
					<input
						type="text"
						name="phone_number"
						value={formData.phone_number || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full"
					/>
					<label>Apartment Location and Apartment Number</label>
					<input
						type="text"
						name="apartment_location"
						value={formData.apartment_location || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full"
					/>
					<label>Date and Time</label>
					<input
						type="datetime-local"
						name="date_and_time"
						value={formData.date_and_time || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full"
					/>
					<button
						type="button"
						onClick={handleNextStep}
						className="px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600"
					>
						Next
					</button>
				</div>
			)}

			{/*page 2*/}
			{step === 2 && (
				<div className="mb-4">
					<label>Date of Birth</label>
					<input
						type="date"
						name="date_of_birth"
						value={formData.date_of_birth || ''}
						onChange={handleChange}
					/>
					<label>Marital Status</label>
					<select
						name="marital_status"
						value={formData.marital_status || ''}
						onChange={handleChange}
					>
						<option value="">-- Select --</option>
						<option value="single">Single</option>
						<option value="married">Married</option>
						<option value="divorced">Divorced</option>
						<option value="widowed">Widowed</option>
					</select>
					<label>Driver License Number</label>
					<input
						type="text"
						name="driver_license_number"
						value={formData.driver_license_number || ''}
						onChange={handleChange}
					/>
					<label>Present Home Address</label>
					<input
						type="text"
						name="present_home_address"
						value={formData.present_home_address || ''}
						onChange={handleChange}
					/>
					<label>Length of time at address</label>
					<input
						type="text"
						name="length_of_time_at_address"
						value={formData.length_of_time_at_address || ''}
						onChange={handleChange}
					/>
					<label>Landlord Phone</label>
					<input
						type="text"
						name="landlord_phone"
						value={formData.landlord_phone || ''}
						onChange={handleChange}
					/>
					<label>Reason For Leaving</label>
					<input
						type="text"
						name="reason_for_leaving"
						value={formData.reason_for_leaving || ''}
						onChange={handleChange}
					/>
					<label>Amount of Rent</label>
					<input
						type="text"
						name="amount_of_rent"
						value={formData.amount_of_rent || ''}
						onChange={handleChange}
					/>
					<label>Is your present rent up to date?</label>
					<select
						name="is_rent_up_to_date"
						value={formData.is_rent_up_to_date || ''}
						onChange={handleChange}
					>
						<option value="">-- Select --</option>
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
					<label>Number of Occupants</label>
					<input
						type="number"
						name="number_of_occupants"
						value={formData.number_of_occupants || ''}
						onChange={handleChange}
					/>
					<label>Occupant 1 Name</label>
					<input
						type="text"
						name="occupant_1_name"
						value={formData.occupant_1_name || ''}
						onChange={handleChange}
					/>
					<label>Occupant 1 Relationship</label>
					<select
						name="occupant_1_relationship"
						value={formData.occupant_1_relationship || ''}
						onChange={handleChange}
					>
						<option value="">-- Select --</option>
						<option value="spouse">Spouse</option>
						<option value="child">Child</option>
						<option value="parent">Parent</option>
						<option value="sibling">Sibling</option>
						<option value="self">Self</option>
						<option value="other">Other</option>
					</select>
					<label>Occupant 1 Occupation</label>
					<select
						name="occupant_1_occupation"
						value={formData.occupant_1_occupation || ''}
						onChange={handleChange}
					>
						<option value="">-- Select --</option>
						<option value="employed">Employed</option>
						<option value="unemployed">Unemployed</option>
						<option value="student">Student</option>
						<option value="retired">Retired</option>
					</select>
					<label>Occupant 1 Age</label>
					<select
						name="occupant_1_age"
						value={formData.occupant_1_age || ''}
						onChange={handleChange}
					>
						<option value="">-- Select --</option>
						<option value="under18">Under 18</option>
						<option value="18-25">18 to 25</option>
						<option value="26-35">26 to 35</option>
						<option value="36-45">36 to 45</option>
						<option value="46-55">46 to 55</option>
						<option value="56-65">56 to 65</option>
						<option value="over65">Over 65</option>
					</select>
					<button type="button" onClick={handlePreviousStep}>
						Previous
					</button>
					<button type="button" onClick={handleNextStep}>
						Next
					</button>
				</div>
			)}

			{/*page TREE*/}
			{step === 3 && (
				<div>
					<label>Number of Pets</label>
					<select
						name="number_of_pets"
						value={formData.number_of_pets || ''}
						onChange={handleChange}
					>
						<option value="">-- Select --</option>
						<option value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5+">5+</option>
					</select>
					{formData.number_of_pets && formData.number_of_pets !== '0' && (
						<div>
							<label>Pet Name</label>
							<input
								type="text"
								name="pet_name"
								value={formData.pet_name || ''}
								onChange={handleChange}
							/>
							<label>Pet Type</label>
							<select
								name="pet_type"
								value={formData.pet_type || ''}
								onChange={handleChange}
							>
								<option value="">-- Select --</option>
								<option value="small_dog">Small Dog (under 10 LBS)</option>
								<option value="medium_dog">
									Medium Dog (Over 10 Under 35 LBS)
								</option>
								<option value="large_dog">Large Dog (Over 35 LBS)</option>
								<option value="pit_bull">Pit Bull</option>
								<option value="cat">Cat</option>
								<option value="bird">Bird</option>
								<option value="fish">Fish</option>
								<option value="rabbit">Rabbit</option>
								<option value="hamster">Hamster</option>
								<option value="guinea_pig">Guinea Pig</option>
								<option value="turtle">Turtle</option>
								<option value="snake">Snake</option>
								<option value="lizard">Lizard</option>
								<option value="horse">Horse</option>
								<option value="goat">Goat</option>
								<option value="reptile">Reptile</option>
								<option value="duck">Duck</option>
								<option value="amphibian">Amphibian</option>
								<option value="insect">Insect</option>
								<option value="rodent">Rodent</option>
								<option value="other">Other</option>
							</select>
							<label>Indoor/Outdoor</label>
							<select
								name="pet_indoor_outdoor"
								value={formData.pet_indoor_outdoor || ''}
								onChange={handleChange}
							>
								<option value="">-- Select --</option>
								<option value="indoor">Indoor</option>
								<option value="outdoor">Outdoor</option>
								<option value="indoor_outdoor">Indoor/Outdoor</option>
							</select>
							<label>Pet Age</label>
							<input
								type="number"
								name="pet_age"
								value={formData.pet_age || ''}
								onChange={handleChange}
							/>
						</div>
					)}
					<button type="button" onClick={handlePreviousStep}>
						Previous
					</button>
					<button type="button" onClick={handleNextStep}>
						Next
					</button>
				</div>
			)}

			{/* Fourth page*/}
			{step === 4 && (
				<div>
					<label>Number of Vehicles</label>
					<select
						name="number_of_vehicles"
						value={formData.number_of_vehicles || ''}
						onChange={handleChange}
					>
						<option value="">-- Select --</option>
						<option value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3+">3 or more</option>
					</select>
					{formData.number_of_vehicles &&
						formData.number_of_vehicles !== '0' && (
							<div>
								<label>Vehicle Year</label>
								<input
									type="text"
									name="vehicle_year"
									value={formData.vehicle_year || ''}
									onChange={handleChange}
								/>
								<label>Vehicle Make</label>
								<input
									type="text"
									name="vehicle_make"
									value={formData.vehicle_make || ''}
									onChange={handleChange}
								/>
								<label>Vehicle Model</label>
								<input
									type="text"
									name="vehicle_model"
									value={formData.vehicle_model || ''}
									onChange={handleChange}
								/>
								<label>Vehicle Plate Number</label>
								<input
									type="text"
									name="vehicle_plate_number"
									value={formData.vehicle_plate_number || ''}
									onChange={handleChange}
								/>
								<label>Vehicle Plate State</label>
								<input
									type="text"
									name="vehicle_plate_state"
									value={formData.vehicle_plate_state || ''}
									onChange={handleChange}
								/>
							</div>
						)}
					<button type="button" onClick={handlePreviousStep}>
						Previous
					</button>
					<button type="button" onClick={handleNextStep}>
						Next
					</button>
				</div>
			)}

			{/* Fifth page*/}
			{step === 5 && (
				<div>
					<label>Employment Status</label>
					<select
						name="employment_status"
						value={formData.employment_status || ''}
						onChange={handleChange}
					>
						<option value="">-- Select --</option>
						<option value="employed">Employed</option>
						<option value="unemployed">Unemployed</option>
						<option value="student">Student</option>
						<option value="retired">Retired</option>
					</select>
					{formData.employment_status && (
						<div>
							<label>Current Employer</label>
							<input
								type="text"
								name="current_employer"
								value={formData.current_employer || ''}
								onChange={handleChange}
							/>
							<label>Occupation</label>
							<input
								type="text"
								name="occupation"
								value={formData.occupation || ''}
								onChange={handleChange}
							/>
							<label>Supervisor</label>
							<input
								type="text"
								name="supervisor"
								value={formData.supervisor || ''}
								onChange={handleChange}
							/>
							<label>Hours per Week</label>
							<input
								type="text"
								name="hours_per_week"
								value={formData.hours_per_week || ''}
								onChange={handleChange}
							/>
							<label>Employer Phone</label>
							<input
								type="text"
								name="employer_phone"
								value={formData.employer_phone || ''}
								onChange={handleChange}
							/>
							<label>Years Employed</label>
							<input
								type="text"
								name="years_employed"
								value={formData.years_employed || ''}
								onChange={handleChange}
							/>
							<label>Employment Address</label>
							<input
								type="text"
								name="employment_address"
								value={formData.employment_address || ''}
								onChange={handleChange}
							/>
						</div>
					)}
					<button type="button" onClick={handlePreviousStep}>
						Previous
					</button>
					<button type="button" onClick={handleNextStep}>
						Next
					</button>
				</div>
			)}

			{/* Sixth page*/}
			{step === 6 && (
				<div>
					<label>Current Income</label>
					<select
						name="current_income"
						value={formData.current_income || ''}
						onChange={handleChange}
					>
						<option value="">-- Select --</option>
						<option value="weekly">Weekly</option>
						<option value="bi-weekly">Bi-weekly</option>
						<option value="monthly">Monthly</option>
						<option value="yearly">Yearly</option>
					</select>
					{formData.current_income && (
						<div>
							<label>Current Income Amount</label>
							<input
								type="text"
								name="current_income_amount"
								value={formData.current_income_amount || ''}
								onChange={handleChange}
							/>
							<label>Income Source</label>
							<input
								type="text"
								name="income_source"
								value={formData.income_source || ''}
								onChange={handleChange}
							/>
							<label>Proof of Income</label>
							<select
								name="has_proof_of_income"
								value={formData.has_proof_of_income || ''}
								onChange={handleChange}
							>
								<option value="">-- Select --</option>
								<option value="yes">Yes</option>
								<option value="no">No</option>
							</select>
						</div>
					)}
					<button type="button" onClick={handlePreviousStep}>
						Previous
					</button>
					<button type="button" onClick={handleNextStep}>
						Next
					</button>
				</div>
			)}

			{/* Seventh page*/}
			{step === 7 && (
				<div>
					<label>Car Loan Lien Holder</label>
					<input
						type="text"
						name="car_loan_lien_holder"
						value={formData.car_loan_lien_holder || ''}
						onChange={handleChange}
					/>
					<label>Car Loan Balance</label>
					<input
						type="text"
						name="car_loan_balance"
						value={formData.car_loan_balance || ''}
						onChange={handleChange}
					/>
					<label>Car Loan Monthly Payment</label>
					<input
						type="text"
						name="car_loan_monthly_payment"
						value={formData.car_loan_monthly_payment || ''}
						onChange={handleChange}
					/>
					<label>Car Loan Creditor Phone Number</label>
					<input
						type="text"
						name="car_loan_creditor_phone"
						value={formData.car_loan_creditor_phone || ''}
						onChange={handleChange}
					/>
					<label>Credit Card Company</label>
					<input
						type="text"
						name="credit_card_company"
						value={formData.credit_card_company || ''}
						onChange={handleChange}
					/>
					<label>Credit Card Balanced Owed</label>
					<input
						type="text"
						name="credit_card_balance_owed"
						value={formData.credit_card_balance_owed || ''}
						onChange={handleChange}
					/>
					<label>Credit Card Monthly Payment</label>
					<input
						type="text"
						name="credit_card_monthly_payment"
						value={formData.credit_card_monthly_payment || ''}
						onChange={handleChange}
					/>
					<label>Creditor Phone Number</label>
					<input
						type="text"
						name="creditor_phone_number"
						value={formData.creditor_phone_number || ''}
						onChange={handleChange}
					/>
					<label>Child Support / Other Creditor Owed</label>
					<input
						type="text"
						name="child_support_creditor_owed"
						value={formData.child_support_creditor_owed || ''}
						onChange={handleChange}
					/>
					<label>Child Support / Other (Balance)</label>
					<input
						type="text"
						name="child_support_balance"
						value={formData.child_support_balance || ''}
						onChange={handleChange}
					/>
					<label>Child Support / Other (Monthly Payment)</label>
					<input
						type="text"
						name="child_support_monthly_payment"
						value={formData.child_support_monthly_payment || ''}
						onChange={handleChange}
					/>
					<label>Child Support / Other (Creditor Phone)</label>
					<input
						type="text"
						name="child_support_creditor_phone"
						value={formData.child_support_creditor_phone || ''}
						onChange={handleChange}
					/>
					<label>Bank Account Name Of Bank</label>
					<input
						type="text"
						name="bank_account_name"
						value={formData.bank_account_name || ''}
						onChange={handleChange}
					/>
					<label>Bank Account Balance</label>
					<input
						type="text"
						name="bank_account_balance"
						value={formData.bank_account_balance || ''}
						onChange={handleChange}
					/>
					<label>Bank Account Monthly Payment</label>
					<input
						type="text"
						name="bank_account_monthly_payment"
						value={formData.bank_account_monthly_payment || ''}
						onChange={handleChange}
					/>
					<label>Account Number</label>
					<input
						type="text"
						name="account_number"
						value={formData.account_number || ''}
						onChange={handleChange}
					/>
					<button type="button" onClick={handlePreviousStep}>
						Previous
					</button>
					<button type="button" onClick={handleNextStep}>
						Next
					</button>
				</div>
			)}

			{/* page 8*/}
			{step === 8 && (
				<div>
					<label>Emergency Contact</label>
					<input
						type="text"
						name="emergency_contact"
						value={formData.emergency_contact || ''}
						onChange={handleChange}
					/>
					<label>Emergency Contact Phone</label>
					<input
						type="text"
						name="emergency_contact_phone"
						value={formData.emergency_contact_phone || ''}
						onChange={handleChange}
					/>
					<label>Emergency Contact Relationship</label>
					<input
						type="text"
						name="emergency_contact_relationship"
						value={formData.emergency_contact_relationship || ''}
						onChange={handleChange}
					/>
					<label>Emergency Contact Address</label>
					<input
						type="text"
						name="emergency_contact_address"
						value={formData.emergency_contact_address || ''}
						onChange={handleChange}
					/>
					<button type="button" onClick={handlePreviousStep}>
						Previous
					</button>
					<button type="button" onClick={handleNextStep}>
						Next
					</button>
				</div>
			)}

			{/*page 9*/}
			{step === 9 && (
				<div>
					<label>Personal Reference Name</label>
					<input
						type="text"
						name="personal_reference_name"
						value={formData.personal_reference_name || ''}
						onChange={handleChange}
					/>
					<label>Personal Reference Contact Phone</label>
					<input
						type="text"
						name="personal_reference_contact_phone"
						value={formData.personal_reference_contact_phone || ''}
						onChange={handleChange}
					/>
					<label>Personal Reference Contact Relationship</label>
					<input
						type="text"
						name="personal_reference_contact_relationship"
						value={formData.personal_reference_contact_relationship || ''}
						onChange={handleChange}
					/>
					<label>Personal Reference Contact Address</label>
					<input
						type="text"
						name="personal_reference_contact_address"
						value={formData.personal_reference_contact_address || ''}
						onChange={handleChange}
					/>
					<button type="button" onClick={handlePreviousStep}>
						Previous
					</button>
					<button type="button" onClick={handleNextStep}>
						Next
					</button>
				</div>
			)}

			{/*page 10*/}
			{step === 10 && (
				<div>
					<label>Has Applicant Ever Been Sued For Bills?</label>
					<select
						name="has_been_sued"
						value={formData.has_been_sued || ''}
						onChange={handleChange}
					>
						<option value="">-- Select --</option>
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
					{/*MORE SHIT GOES HERE DONT FORGET*/}
					<button type="button" onClick={handlePreviousStep}>
						Previous
					</button>
					<button type="button" onClick={handleNextStep}>
						Next
					</button>
				</div>
			)}

			{/*Page 11*/}
			{step === 11 && (
				<div>
					<label>Upload Photo ID</label>
					<input type="file" name="photo_id" onChange={handleChange} />
					<button type="button" onClick={handlePreviousStep}>
						Previous
					</button>
					<button type="button" onClick={handleNextStep}>
						Next
					</button>
				</div>
			)}

			{/*page 12*/}
			{step === 12 && (
				<div>
					<label>Signature</label>
					<input
						type="text"
						name="signature"
						value={formData.signature || ''}
						onChange={handleChange}
					/>
					<label>Date</label>
					<input
						type="date"
						name="date"
						value={formData.date || ''}
						onChange={handleChange}
					/>
					<button type="button" onClick={handlePreviousStep}>
						Previous
					</button>
					<button type="submit">Submit</button>
				</div>
			)}
		</form>
	);
};

export default RentalApplicationForm;
