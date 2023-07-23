import React, { useState } from 'react';

const RentalApplicationForm = () => {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		occupants: [
			{
				name: '',
				relationship: '',
				occupation: '',
				age: '',
			},
		],
		number_of_pets: 1,
		pets: [
			{
				name: '',
				pet_type: '',
				indoor_outdoor: '',
				age: '',
			},
		],
		number_of_vehicles: 1,
		vehicles: [
			{
				vehicle_year: '',
				vehicle_make: '',
				vehicle_model: '',
				vehicle_plate_number: '',
				vehicle_plate_state: '',
			},
		],
	});

	const handleChange = (event) => {
		const { name, value } = event.target;

		if (
			name === 'number_of_occupants' ||
			name === 'number_of_pets' ||
			name === 'number_of_vehicles'
		) {
			const numValue = Math.max(parseInt(value), 0);

			setFormData((prevData) => {
				const updatedData = {
					...prevData,
					[name]: numValue,
				};

				if (name === 'number_of_occupants') {
					while (updatedData.occupants.length < numValue) {
						updatedData.occupants.push({
							name: '',
							relationship: '',
							occupation: '',
							age: '',
						});
					}
					updatedData.occupants = updatedData.occupants.slice(0, numValue);
				} else if (name === 'number_of_pets') {
					while (updatedData.pets.length < numValue) {
						updatedData.pets.push({
							name: '',
							pet_type: '',
							indoor_outdoor: '',
							age: '',
						});
					}
					updatedData.pets = updatedData.pets.slice(0, numValue);
				} else if (name === 'number_of_vehicles') {
					while (updatedData.vehicles.length < numValue) {
						updatedData.vehicles.push({
							vehicle_year: '',
							vehicle_make: '',
							vehicle_model: '',
							vehicle_plate_number: '',
							vehicle_plate_state: '',
						});
					}
					updatedData.vehicles = updatedData.vehicles.slice(0, numValue);
				}

				return updatedData;
			});
		} else {
			const regex = /^(occupants|pets|vehicles)\[(\d+)\]\.(\w+)$/;
			const match = name.match(regex);

			if (match) {
				const [, group, index, field] = match;
				setFormData((prevData) => ({
					...prevData,
					[group]: prevData[group].map((item, idx) =>
						idx === parseInt(index) ? { ...item, [field]: value } : item
					),
				}));
			} else {
				setFormData((prevData) => ({
					...prevData,
					[name]: value,
				}));
			}
		}
	};

	const renderOccupants = () => {
		return formData.occupants.map((occupant, index) => (
			<div key={index} className="space-y-4">
				<label>{`Occupant ${index + 1} Name`}</label>
				<input
					type="text"
					name={`occupants[${index}].name`}
					value={occupant.name || ''}
					onChange={handleChange}
					className="border border-gray-300 rounded px-3 py-2 w-full"
				/>
				<label>{`Occupant ${index + 1} Relationship`}</label>
				<select
					name={`occupants[${index}].relationship`}
					value={occupant.relationship || ''}
					onChange={handleChange}
					className="border border-gray-300 rounded px-3 py-2 w-full"
				>
					<option value="">-- Select --</option>
					<option value="spouse">Spouse</option>
					<option value="child">Child</option>
					<option value="parent">Parent</option>
					<option value="sibling">Sibling</option>
					<option value="self">Self</option>
					<option value="other">Other</option>
				</select>
				<label>{`Occupant ${index + 1} Occupation`}</label>
				<select
					name={`occupants[${index}].occupation`}
					value={occupant.occupation || ''}
					onChange={handleChange}
					className="border border-gray-300 rounded px-3 py-2 w-full"
				>
					<option value="">-- Select --</option>
					<option value="employed">Employed</option>
					<option value="unemployed">Unemployed</option>
					<option value="student">Student</option>
					<option value="retired">Retired</option>
				</select>
				<label>{`Occupant ${index + 1} Age`}</label>
				<select
					name={`occupants[${index}].age`}
					value={occupant.age || ''}
					onChange={handleChange}
					className="border border-gray-300 rounded px-3 py-2 w-full"
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
			</div>
		));
	};

	const renderPets = () => {
		return formData.pets.map((pet, index) => (
			<div key={index} className="space-y-4">
				<label>{`Pet ${index + 1} Name`}</label>
				<input
					type="text"
					name={`pets[${index}].name`}
					value={pet.name || ''}
					onChange={handleChange}
					className="border border-gray-300 rounded px-3 py-2 w-full"
				/>
				<label>{`Pet ${index + 1} Type`}</label>
				<select
					name={`pets[${index}].pet_type`}
					value={pet.pet_type || ''}
					onChange={handleChange}
					className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
				>
					<option value="">Select a type</option>
					<option value="Small Dog">Small Dog (under 10 LBS) 🐶</option>
					<option value="Md Dog">Medium Dog (Over 10 Under 35 LBS) 🐕</option>
					<option value="Lg Dog">Large Dog (Over 35 LBS) 🐕‍🦺</option>
					<option value="Pit bull">Pit Bull🐩</option>
					<option value="Cat">Cat 🐈</option>
					<option value="Bird">Bird 🦜</option>
					<option value="Fish">Fish 🐠</option>
					<option value="Rabbit">Rabbit 🐇</option>
					<option value="Hamster">Hamster 🐹</option>
					<option value="Guinea Pig">Guinea Pig 🐷</option>
					<option value="Turtle">Turtle 🐢</option>
					<option value="Snake">Snake 🐍</option>
					<option value="Lizard">Lizard 🦎</option>
					<option value="Horse">Horse 🐴</option>
					<option value="Goat">Goat 🐐</option>
					<option value="Reptile">Reptile 🦕</option>
					<option value="Duck">Duck 🦆</option>
					<option value="Amphibian">Amphibian 🐸</option>
					<option value="Insect">Insect 🐞</option>
					<option value="Rodent">Rodent 🐁</option>
					<option value="other">Other 🦖🦁</option>

					{/* options */}
				</select>
				<label>{`Pet ${index + 1} Indoor/Outdoor`}</label>
				<select
					name={`pets[${index}].indoor_outdoor`}
					value={pet.indoor_outdoor || ''}
					onChange={handleChange}
					className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
				>
					<option value="">Select</option>
					<option value="Indoor">Indoor</option>
					<option value="Outdoor">Outdoor</option>
					<option value="both">Indoor/Outdoor</option>

					{/* options */}
				</select>
				<label>{`Pet ${index + 1} Age`}</label>
				<input
					type="text"
					name={`pets[${index}].age`}
					value={pet.age || ''}
					onChange={handleChange}
					className="border border-gray-300 rounded px-3 py-2 w-full"
				/>
			</div>
		));
	};

	const renderVehicles = () => {
		return formData.vehicles.map((vehicle, index) => (
			<div key={index} className="space-y-4">
				<label>{`Vehicle ${index + 1} Year`}</label>
				<input
					type="number"
					name={`vehicles[${index}].vehicle_year`}
					value={vehicle.vehicle_year || ''}
					onChange={handleChange}
					className="border border-gray-300 rounded px-3 py-2 w-full"
				/>
				<label>{`Vehicle ${index + 1} Make`}</label>
				<input
					type="text"
					name={`vehicles[${index}].vehicle_make`}
					value={vehicle.vehicle_make || ''}
					onChange={handleChange}
					className="border border-gray-300 rounded px-3 py-2 w-full"
				/>
				<label>{`Vehicle ${index + 1} Model`}</label>
				<input
					type="text"
					name={`vehicles[${index}].vehicle_model`}
					value={vehicle.vehicle_model || ''}
					onChange={handleChange}
					className="border border-gray-300 rounded px-3 py-2 w-full"
				/>
				<label>{`Vehicle ${index + 1} Plate Number`}</label>
				<input
					type="text"
					name={`vehicles[${index}].vehicle_plate_number`}
					value={vehicle.vehicle_plate_number || ''}
					onChange={handleChange}
					className="border border-gray-300 rounded px-3 py-2 w-full"
				/>
				<label>{`Vehicle ${index + 1} Plate State`}</label>
				<input
					type="text"
					name={`vehicles[${index}].vehicle_plate_state`}
					value={vehicle.vehicle_plate_state || ''}
					onChange={handleChange}
					className="border border-gray-300 rounded px-3 py-2 w-full"
				/>
			</div>
		));
	};

	const handleNextStep = () => {
		setStep((prevStep) => prevStep + 1);
	};

	const handlePreviousStep = () => {
		setStep((prevStep) => prevStep - 1);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const url = 'http://localhost:8000/api/rent/rental_applications';
		const config = {
			method: 'post',
			body: JSON.stringify(formData), // Your current form data is already structured correctly
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const response = await fetch(url, config);
			const data = await response.json();

			if (response.ok) {
				// Form submission was successful
				console.log('Form submitted successfully:', data.message);
				// Add any further actions or UI changes for successful form submission here
			} else {
				// Form submission failed
				console.error('Form submission failed:', data);
				// Handle errors and display them to the user, if necessary
			}
		} catch (error) {
			console.error('An error occurred while submitting the form:', error);
		}
	};
	return (
		<form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
			{/*page 1*/}
			{step === 1 && (
				<div className="mb-4">
					<label className="block text-lg text-gray-700">First Name</label>
					<input
						type="text"
						name="first_name"
						value={formData.first_name || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<label className="block text-lg text-gray-700">Middle Name</label>
					<input
						type="text"
						name="middle_name"
						value={formData.middle_name || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<label className="block text-lg text-gray-700">Last Name</label>
					<input
						type="text"
						name="last_name"
						value={formData.last_name || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<label className="block text-lg text-gray-700">Email</label>
					<input
						type="email"
						name="email"
						value={formData.email || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<label className="block text-lg text-gray-700">
						Social Security Number
					</label>
					<input
						type="text"
						name="social_security_number"
						value={formData.social_security_number || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<label className="block text-lg text-gray-700">Phone Number</label>
					<input
						type="text"
						name="phone_number"
						value={formData.phone_number || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<label className="block text-lg text-gray-700">
						Apartment Location and Apartment Number
					</label>
					<input
						type="text"
						name="apartment_location"
						value={formData.apartment_location || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<label className="block text-lg text-gray-700">Date and Time</label>
					<input
						type="datetime-local"
						name="date_and_time"
						value={formData.date_and_time || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<button
						type="button"
						onClick={handleNextStep}
						className="px-4 py-2 mt-4 text-gray-700 border border-gray-300 bg-white rounded shadow hover:border-gray-400 transition-colors duration-200 ease-in-out"
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
						className="border border-gray-300 rounded px-3 py-2 w-full"
					/>
					<label>Marital Status</label>
					<select
						name="marital_status"
						value={formData.marital_status || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full"
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
						className="border border-gray-300 rounded px-3 py-2 w-full"
					/>
					<label>Present Home Address</label>
					<input
						type="text"
						name="present_home_address"
						value={formData.present_home_address || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full"
					/>
					<label>Length of time at address</label>
					<input
						type="text"
						name="length_of_time_at_address"
						value={formData.length_of_time_at_address || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full"
					/>
					<label>Landlord Phone</label>
					<input
						type="text"
						name="landlord_phone"
						value={formData.landlord_phone || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full"
					/>
					<label>Reason For Leaving</label>
					<input
						type="text"
						name="reason_for_leaving"
						value={formData.reason_for_leaving || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full"
					/>
					<label>Amount of Rent</label>
					<input
						type="text"
						name="amount_of_rent"
						value={formData.amount_of_rent || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full"
					/>
					<label>Is your present rent up to date?</label>
					<select
						name="is_rent_up_to_date"
						value={formData.is_rent_up_to_date || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full"
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
						className="border border-gray-300 rounded px-3 py-2 w-full"
					/>
					{renderOccupants()}

					<div className="mt-4 flex gap-4 justify-center">
						<button
							className="px-4 py-2 text-gray-700 border border-gray-300 bg-white rounded shadow hover:border-gray-400 transition-colors duration-200 ease-in-out"
							type="button"
							onClick={handlePreviousStep}
						>
							Previous
						</button>
						<button
							className="px-4 py-2 text-gray-700 border border-gray-300 bg-white rounded shadow hover:border-gray-400 transition-colors duration-200 ease-in-out"
							type="button"
							onClick={handleNextStep}
						>
							Next
						</button>
					</div>
				</div>
			)}

			{/*page TREE*/}
			{step === 3 && (
				<div className="space-y-4">
					<label className="block text-lg text-gray-700">Number of Pets</label>
					<input
						type="number"
						name="number_of_pets"
						value={formData.number_of_pets || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full"
					/>
					{renderPets()}

					<div className="space-y-4"></div>
					<button
						className="px-4 py-2 mt-4 text-gray-700 border border-gray-300 bg-white rounded shadow hover:border-gray-400 transition-colors duration-200 ease-in-out"
						type="button"
						onClick={handlePreviousStep}
					>
						Previous
					</button>
					<button
						className="px-4 py-2 mt-4 ml-4 text-gray-700 border border-gray-300 bg-white rounded shadow hover:border-gray-400 transition-colors duration-200 ease-in-out"
						type="button"
						onClick={handleNextStep}
					>
						Next
					</button>
				</div>
			)}

			{/* Fourth page*/}
			{step === 4 && (
				<div className="space-y-4">
					<label className="block text-lg text-gray-700">
						Number of Vehicles
					</label>
					<input
						type="number"
						name="number_of_vehicles"
						value={formData.number_of_vehicles || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					{renderVehicles()}
					<div className="mt-4 flex gap-4 justify-center">
						<button
							className="px-4 py-2 text-gray-700 border border-gray-300 bg-white rounded shadow hover:border-gray-400 transition-colors duration-200 ease-in-out"
							type="button"
							onClick={handlePreviousStep}
						>
							Previous
						</button>
						<button
							className="px-4 py-2 text-gray-700 border border-gray-300 bg-white rounded shadow hover:border-gray-400 transition-colors duration-200 ease-in-out"
							type="button"
							onClick={handleNextStep}
						>
							Next
						</button>
					</div>
				</div>
			)}

			{/* Fifth page*/}
			{step === 5 && (
				<div className="space-y-4">
					<label className="block text-lg text-gray-700">
						Employment Status
					</label>
					<select
						name="employment_status"
						value={formData.employment_status || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					>
						<option value="">-- Select --</option>
						<option value="employed">Employed</option>
						<option value="unemployed">Unemployed</option>
						<option value="student">Student</option>
						<option value="retired">Retired</option>
					</select>
					{(formData.employment_status === 'employed' ||
						formData.employment_status === 'student') && (
						<div className="space-y-4">
							<label className="block text-lg text-gray-700">
								Current Employer
							</label>
							<input
								type="text"
								name="current_employer"
								value={formData.current_employer || ''}
								onChange={handleChange}
								className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
							/>
							<label className="block text-lg text-gray-700">Occupation</label>
							<input
								type="text"
								name="occupation"
								value={formData.occupation || ''}
								onChange={handleChange}
								className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
							/>
							<label className="block text-lg text-gray-700">Supervisor</label>
							<input
								type="text"
								name="supervisor"
								value={formData.supervisor || ''}
								onChange={handleChange}
								className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
							/>
							<label className="block text-lg text-gray-700">
								Hours per Week
							</label>
							<input
								type="text"
								name="hours_per_week"
								value={formData.hours_per_week || ''}
								onChange={handleChange}
								className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
							/>
							<label className="block text-lg text-gray-700">
								Employer Phone
							</label>
							<input
								type="text"
								name="employer_phone"
								value={formData.employer_phone || ''}
								onChange={handleChange}
								className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
							/>
							<label className="block text-lg text-gray-700">
								Years Employed
							</label>
							<input
								type="text"
								name="years_employed"
								value={formData.years_employed || ''}
								onChange={handleChange}
								className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
							/>
							<label className="block text-lg text-gray-700">
								Employment Address
							</label>
							<input
								type="text"
								name="employment_address"
								value={formData.employment_address || ''}
								onChange={handleChange}
								className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
							/>
						</div>
					)}
					<div className="mt-4 flex gap-4 justify-center">
						<button
							className="px-4 py-2 text-gray-700 border border-gray-300 bg-white rounded shadow hover:border-gray-400 transition-colors duration-200 ease-in-out"
							type="button"
							onClick={handlePreviousStep}
						>
							Previous
						</button>
						<button
							className="px-4 py-2 text-gray-700 border border-gray-300 bg-white rounded shadow hover:border-gray-400 transition-colors duration-200 ease-in-out"
							type="button"
							onClick={handleNextStep}
						>
							Next
						</button>
					</div>
				</div>
			)}

			{/* Sixth page*/}
			{step === 6 && (
				<div className="space-y-4">
					<label className="block text-lg text-gray-700">Current Income</label>
					<select
						name="current_income"
						value={formData.current_income || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					>
						<option value="">-- Select --</option>
						<option value="weekly">Weekly</option>
						<option value="bi-weekly">Bi-weekly</option>
						<option value="monthly">Monthly</option>
						<option value="yearly">Yearly</option>
					</select>
					{formData.current_income && (
						<div className="space-y-4">
							<label className="block text-lg text-gray-700">
								Current Income Amount
							</label>
							<input
								type="text"
								name="current_income_amount"
								value={formData.current_income_amount || ''}
								onChange={handleChange}
								className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
							/>
							<label className="block text-lg text-gray-700">
								Income Source
							</label>
							<input
								type="text"
								name="income_source"
								value={formData.income_source || ''}
								onChange={handleChange}
								className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
							/>
							<label className="block text-lg text-gray-700">
								Proof of Income
							</label>
							<select
								name="has_proof_of_income"
								value={formData.has_proof_of_income || ''}
								onChange={handleChange}
								className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
							>
								<option value="">-- Select --</option>
								<option value="yes">Yes</option>
								<option value="no">No</option>
							</select>
						</div>
					)}
					<div className="mt-4 flex gap-4 justify-center">
						<button
							className="px-4 py-2 text-gray-700 border border-gray-300 bg-white rounded shadow hover:border-gray-400 transition-colors duration-200 ease-in-out"
							type="button"
							onClick={handlePreviousStep}
						>
							Previous
						</button>
						<button
							className="px-4 py-2 text-gray-700 border border-gray-300 bg-white rounded shadow hover:border-gray-400 transition-colors duration-200 ease-in-out"
							type="button"
							onClick={handleNextStep}
						>
							Next
						</button>
					</div>
				</div>
			)}

			{/* Seventh page*/}
			{step === 7 && (
				<div>
					<label className="block text-lg text-gray-700">
						Car Loan Lien Holder
					</label>
					<input
						type="text"
						name="car_loan_lien_holder"
						value={formData.car_loan_lien_holder || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<label className="block text-lg text-gray-700">
						Car Loan Balance
					</label>
					<input
						type="text"
						name="car_loan_balance"
						value={formData.car_loan_balance || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<label className="block text-lg text-gray-700">
						Car Loan Monthly Payment
					</label>
					<input
						type="text"
						name="car_loan_monthly_payment"
						value={formData.car_loan_monthly_payment || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<label className="block text-lg text-gray-700">
						Car Loan Creditor Phone Number
					</label>
					<input
						type="text"
						name="car_loan_creditor_phone"
						value={formData.car_loan_creditor_phone || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<label className="block text-lg text-gray-700">
						Credit Card Company
					</label>
					<input
						type="text"
						name="credit_card_company"
						value={formData.credit_card_company || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<label className="block text-lg text-gray-700">
						Credit Card Balanced Owed
					</label>
					<input
						type="text"
						name="credit_card_balance_owed"
						value={formData.credit_card_balance_owed || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<label className="block text-lg text-gray-700">
						Credit Card Monthly Payment
					</label>
					<input
						type="text"
						name="credit_card_monthly_payment"
						value={formData.credit_card_monthly_payment || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<label className="block text-lg text-gray-700">
						Creditor Phone Number
					</label>
					<input
						type="text"
						name="creditor_phone_number"
						value={formData.creditor_phone_number || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<label className="block text-lg text-gray-700">
						Child Support / Other Creditor Owed
					</label>
					<input
						type="text"
						name="child_support_creditor_owed"
						value={formData.child_support_creditor_owed || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<label className="block text-lg text-gray-700">
						Child Support / Other (Balance)
					</label>
					<input
						type="text"
						name="child_support_balance"
						value={formData.child_support_balance || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<label className="block text-lg text-gray-700">
						Child Support / Other (Monthly Payment)
					</label>
					<input
						type="text"
						name="child_support_monthly_payment"
						value={formData.child_support_monthly_payment || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<label className="block text-lg text-gray-700">
						Child Support / Other (Creditor Phone)
					</label>
					<input
						type="text"
						name="child_support_creditor_phone"
						value={formData.child_support_creditor_phone || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<label className="block text-lg text-gray-700">
						Bank Account Name Of Bank
					</label>
					<input
						type="text"
						name="bank_account_name"
						value={formData.bank_account_name || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<label className="block text-lg text-gray-700">
						Bank Account Balance
					</label>
					<input
						type="text"
						name="bank_account_balance"
						value={formData.bank_account_balance || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<label className="block text-lg text-gray-700">
						Bank Account Monthly Payment
					</label>
					<input
						type="text"
						name="bank_account_monthly_payment"
						value={formData.bank_account_monthly_payment || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<label className="block text-lg text-gray-700">Account Number</label>
					<input
						type="text"
						name="account_number"
						value={formData.account_number || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<div className="mt-4 flex gap-4 justify-center">
						<button
							className="px-4 py-2 text-gray-700 border border-gray-300 bg-white rounded shadow hover:border-gray-400 transition-colors duration-200 ease-in-out"
							type="button"
							onClick={handlePreviousStep}
						>
							Previous
						</button>
						<button
							className="px-4 py-2 text-gray-700 border border-gray-300 bg-white rounded shadow hover:border-gray-400 transition-colors duration-200 ease-in-out"
							type="button"
							onClick={handleNextStep}
						>
							Next
						</button>
					</div>
				</div>
			)}

			{/* page 8*/}
			{step === 8 && (
				<div>
					<label className="block text-lg text-gray-700">
						Emergency Contact
					</label>
					<input
						type="text"
						name="emergency_contact"
						value={formData.emergency_contact || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<label className="block text-lg text-gray-700">
						Emergency Contact Phone
					</label>
					<input
						type="text"
						name="emergency_contact_phone"
						value={formData.emergency_contact_phone || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<label className="block text-lg text-gray-700">
						Emergency Contact Relationship
					</label>
					<input
						type="text"
						name="emergency_contact_relationship"
						value={formData.emergency_contact_relationship || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<label className="block text-lg text-gray-700">
						Emergency Contact Address
					</label>
					<input
						type="text"
						name="emergency_contact_address"
						value={formData.emergency_contact_address || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<div className="mt-4 flex gap-4 justify-center">
						<button
							className="px-4 py-2 text-gray-700 border border-gray-300 bg-white rounded shadow hover:border-gray-400 transition-colors duration-200 ease-in-out"
							type="button"
							onClick={handlePreviousStep}
						>
							Previous
						</button>
						<button
							className="px-4 py-2 text-gray-700 border border-gray-300 bg-white rounded shadow hover:border-gray-400 transition-colors duration-200 ease-in-out"
							type="button"
							onClick={handleNextStep}
						>
							Next
						</button>
					</div>
				</div>
			)}

			{/*page 9*/}
			{step === 9 && (
				<div>
					<label className="block text-lg text-gray-700">
						Personal Reference Name
					</label>
					<input
						type="text"
						name="personal_reference_name"
						value={formData.personal_reference_name || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<label className="block text-lg text-gray-700">
						Personal Reference Contact Phone
					</label>
					<input
						type="text"
						name="personal_reference_contact_phone"
						value={formData.personal_reference_contact_phone || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<label className="block text-lg text-gray-700">
						Personal Reference Contact Relationship
					</label>
					<input
						type="text"
						name="personal_reference_contact_relationship"
						value={formData.personal_reference_contact_relationship || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<label className="block text-lg text-gray-700">
						Personal Reference Contact Address
					</label>
					<input
						type="text"
						name="personal_reference_contact_address"
						value={formData.personal_reference_contact_address || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<div className="mt-4 flex gap-4 justify-center">
						<button
							className="px-4 py-2 text-gray-700 border border-gray-300 bg-white rounded shadow hover:border-gray-400 transition-colors duration-200 ease-in-out"
							type="button"
							onClick={handlePreviousStep}
						>
							Previous
						</button>
						<button
							className="px-4 py-2 text-gray-700 border border-gray-300 bg-white rounded shadow hover:border-gray-400 transition-colors duration-200 ease-in-out"
							type="button"
							onClick={handleNextStep}
						>
							Next
						</button>
					</div>
				</div>
			)}

			{/*page 10*/}
			{step === 10 && (
				<div>
					<label className="block text-lg text-gray-700">
						Has Applicant Ever Been Sued For Bills?
					</label>
					<select
						name="has_been_sued"
						value={formData.has_been_sued || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					>
						<option value="">-- Select --</option>
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
					{/*MORE SHIT GOES HERE DONT FORGET*/}
					<div className="mt-4 flex gap-4 justify-center">
						<button
							className="px-4 py-2 text-gray-700 border border-gray-300 bg-white rounded shadow hover:border-gray-400 transition-colors duration-200 ease-in-out"
							type="button"
							onClick={handlePreviousStep}
						>
							Previous
						</button>
						<button
							className="px-4 py-2 text-gray-700 border border-gray-300 bg-white rounded shadow hover:border-gray-400 transition-colors duration-200 ease-in-out"
							type="button"
							onClick={handleNextStep}
						>
							Next
						</button>
					</div>
				</div>
			)}

			{/*Page 11*/}
			{step === 11 && (
				<div>
					<label className="block text-lg text-gray-700">Upload Photo ID</label>
					<input
						type="file"
						name="photo_id"
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<div className="mt-4 flex gap-4 justify-center">
						<button
							className="px-4 py-2 text-gray-700 border border-gray-300 bg-white rounded shadow hover:border-gray-400 transition-colors duration-200 ease-in-out"
							type="button"
							onClick={handlePreviousStep}
						>
							Previous
						</button>
						<button
							className="px-4 py-2 text-gray-700 border border-gray-300 bg-white rounded shadow hover:border-gray-400 transition-colors duration-200 ease-in-out"
							type="button"
							onClick={handleNextStep}
						>
							Next
						</button>
					</div>
				</div>
			)}

			{/*page 12*/}
			{step === 12 && (
				<div>
					<label className="block text-lg text-gray-700">Signature</label>
					<input
						type="text"
						name="signature"
						value={formData.signature || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<label className="block text-lg text-gray-700">Date</label>
					<input
						type="date"
						name="date"
						value={formData.date || ''}
						onChange={handleChange}
						className="border border-gray-300 rounded px-3 py-2 w-full text-lg"
					/>
					<div className="mt-4 flex gap-4 justify-center">
						<button
							className="px-4 py-2 text-gray-700 border border-gray-300 bg-white rounded shadow hover:border-gray-400 transition-colors duration-200 ease-in-out"
							type="button"
							onClick={handlePreviousStep}
						>
							Previous
						</button>
						<button
							className="px-4 py-2 text-gray-700 border border-gray-300 bg-white rounded shadow hover:border-gray-400 transition-colors duration-200 ease-in-out"
							type="submit"
						>
							Submit
						</button>
					</div>
				</div>
			)}
		</form>
	);
};

export default RentalApplicationForm;
