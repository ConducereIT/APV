import React, { useEffect, useState } from 'react';
import { BackendService } from "@genezio-sdk/dev-apv";

type RegistrationState = {
  tshirtSize: string;
  phoneNumber: string;
  race: string;
  revolut: string;
  paymentMethod: PaymentMethod; // Adăugăm câmpul pentru metoda de plată
};

// Adăugăm un tip pentru metodele de plată disponibile
type PaymentMethod = "cash" | "revolut";

const races = {
  "0": "Cursa Copii",
  "1": "Feminin 10-16 ani",
  "2": "Masculin 10-16 ani",
  "3": "Feminim 17-35 de ani",
  "4": "Masculin 17-35 de ani",
  "5": "Feminin 35+ de ani",
  "6": "Masculin 35+ de ani",
};

const tshirtSizes = ["XS", "S", "M", "L", "XL", "XXL"];

const RaceRegistration: React.FC = () => {
  const [registration, setRegistration] = useState<RegistrationState>({
    tshirtSize: '',
    phoneNumber: '',
    revolut: '',
    race: '',
    paymentMethod: 'cash'
  });

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogin(true);
    }

    if (!isLogin && !localStorage.getItem("token")) {
      window.location.href = '/login';
      console.log('Redirecting to login page');
    }
  }, [isLogin]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setRegistration({
      ...registration,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await BackendService.addRaces(registration.race, registration.phoneNumber, registration.tshirtSize, registration.paymentMethod); // Actualizăm pentru a include și metoda de plată

    alert('Înscrierea a fost realizată cu succes!');
    window.location.href = '/';
  };

  return (
    <div className="max-w-[20rem] md:max-w-[30rem] mx-auto mt-[-2rem] bg-white rounded-lg shadow-md pl-12 pr-12 pt-2 pb-4">
      <h2 className="text-lg md:text-2xl text-center mb-6">Înscriere</h2>
      <form onSubmit={handleSubmit} className="w-full">
        <label className="block mb-2 font-semibold text-gray-700" htmlFor="tshirtSize">Mărime tricou:</label>
        <select
          id="tshirtSize"
          name="tshirtSize"
          className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4"
          value={registration.tshirtSize}
          onChange={handleInputChange}
        >
          <option value="">Selectează mărimea...</option>
          {tshirtSizes.map((size) => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>

        <label className="block mb-2 font-semibold text-gray-700" htmlFor="phoneNumber">Număr de telefon:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4"
          value={registration.phoneNumber}
          onChange={handleInputChange}
          placeholder="07XX XXX XXX"
        />

        <label className="block mb-2 font-semibold text-gray-700">Cursa:</label>
        <div className="space-y-2">
          {Object.entries(races).map(([key, text]) => (
            <div key={key} className="flex items-center">
              <input
                type="radio" // Modificăm tipul de input în 'radio'
                id={`race_${key}`}
                name="race" // Schimbăm numele câmpului pentru a grupa input-urile de tip radio
                value={key}
                checked={registration.race === key} // Verificăm dacă cursa selectată este aceasta
                onChange={handleInputChange}
                className="mr-2"
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
        >
          <option value="">Selectează metodă...</option>
          <option value="cash">Cash</option>
          <option value="revolut">Revolut</option>
        </select>

        <button className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-md mt-6 hover:bg-green-700" type="submit">
          Trimite
        </button>
      </form>
    </div>
  );
};

export default RaceRegistration;
