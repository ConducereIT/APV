import React, {useEffect, useState} from 'react';
import {BackendService} from "@genezio-sdk/apv-production";
import {AuthService} from "@genezio/auth";

type RegistrationState = {
  name: string;
  email: string;
  tshirtSize: string;
  tshirtNumber: string;
  phoneNumber: string;
  race: string;
  money: string;
  paymentMethod: PaymentMethod;
};

type PaymentMethod = "cash" | "revolut";

const races = {
  "0": "Cursa Copii",
  "1": "Feminin 13-17 ani",
  "2": "Masculin 13-17 ani",
  "3": "Feminin 18-35 de ani",
  "4": "Masculin 18-35 de ani",
  "5": "Feminin 35+ de ani",
  "6": "Masculin 35+ de ani",
};

const tshirtSizes = ["XS", "S", "M", "L", "XL", "XXL"];

const Inscriere: React.FC = () => {
  const [registration, setRegistration] = useState<RegistrationState>({
    name: '',
    email: '',
    tshirtSize: '',
    tshirtNumber: '',
    phoneNumber: '',
    race: '',
    paymentMethod: 'cash',
    money: '',
  });

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const response = await AuthService.getInstance().userInfo();
        if (response.authProvider !== "checkin" && response.authProvider !== "admin") {
          window.location.href = "/";
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkAdmin();
  },);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setRegistration({
      ...registration,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await BackendService.addRacesInEventDay(
        registration.name,
        registration.email,
        registration.tshirtSize,
        registration.tshirtNumber,
        registration.phoneNumber,
        registration.race,
        registration.paymentMethod,
        registration.money
      );
      console.log(response);
      if (response.status === 200) {
        alert('Înscrierea a fost realizată cu succes!');
        window.location.reload();
      }
      if (response.status === 400) {
        alert(response.message);
      }

    } catch (error) {
      console.log(error);
      alert('A apărut o eroare la înscriere. Vă rugăm să încercați din nou.');
    }
  };

  return (
    <div
      className="max-w-[20rem] md:max-w-[30rem] mx-auto mt-[-2rem] bg-white rounded-lg shadow-md pl-12 pr-12 pt-2 pb-4">
      <h2 className="text-lg md:text-2xl text-center mb-6">Înscriere</h2>
      <form onSubmit={handleSubmit} className="w-full">
        <label className="block mb-2 font-semibold text-gray-700" htmlFor="name">Nume</label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4"
          value={registration.name}
          onChange={handleInputChange}
          placeholder="Nume"
          required={true}
        />
        <label className="block mb-2 font-semibold text-gray-700" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4"
          value={registration.email}
          onChange={handleInputChange}
          placeholder="Email"
          required={true}
        />
        <label className="block mb-2 font-semibold text-gray-700" htmlFor="tshirtSize">Mărime tricou:</label>
        <select
          id="tshirtSize"
          name="tshirtSize"
          className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4"
          value={registration.tshirtSize}
          onChange={handleInputChange}
          required={true}
        >
          <option value="">Selectează mărimea...</option>
          {tshirtSizes.map((size) => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>

        <label className="block mb-2 font-semibold text-gray-700" htmlFor="tshirtNumber">Număr tricou:</label>
        <input
          type="text"
          id="tshirtNumber"
          name="tshirtNumber"
          className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4"
          value={registration.tshirtNumber}
          onChange={handleInputChange}
          placeholder="1234"
          required={true}
        />

        <label className="block mb-2 font-semibold text-gray-700" htmlFor="phoneNumber">Număr de telefon:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4"
          value={registration.phoneNumber}
          onChange={handleInputChange}
          placeholder="07XX XXX XXX"
          required={true}
        />

        <label className="block mb-2 font-semibold text-gray-700">Cursa:</label>
        <div className="space-y-2">
          {Object.entries(races).map(([key, text]) => (
            <div key={key} className="flex items-center">
              <input
                type="radio"
                id={`race_${key}`}
                name="race"
                value={key}
                checked={registration.race === key}
                onChange={handleInputChange}
                className="mr-2"
                required={true}
              />
              <label htmlFor={`race_${key}`} className="text-gray-700">{text}</label>
            </div>
          ))}
        </div>

        <label className="block mb-2 font-semibold text-gray-700 mt-2">Metodă de plată:</label>
        <select
          id="paymentMethod"
          name="paymentMethod"
          className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4"
          value={registration.paymentMethod}
          onChange={handleInputChange}
          required={true}
        >
          <option value="">Selectează metodă...</option>
          <option value="cash">Cash</option>
          <option value="revolut">Revolut</option>
        </select>


        <label className="block mb-2 font-semibold text-gray-700" htmlFor="money"> Donatie:</label>
        <input
          type="text"
          id="money"
          name="money"
          className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4"
          value={registration.money}
          onChange={handleInputChange}
          placeholder="Suma in lei"
          required={true}
        />

        <button className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-md mt-6 hover:bg-green-700"
                type="submit">
          Trimite
        </button>
      </form>
    </div>
  );
};

export default Inscriere;
