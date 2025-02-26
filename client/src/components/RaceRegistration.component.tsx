import React, { useEffect, useState } from "react";
import { BackendService } from "@genezio-sdk/apv";

type RegistrationState = {
  tshirtSize: string;
  phoneNumber: string;
  race: string;
  revolut: string;
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

const RaceRegistration: React.FC = () => {
  const [registration, setRegistration] = useState<RegistrationState>({
    tshirtSize: "",
    phoneNumber: "",
    revolut: "",
    race: "",
    paymentMethod: "cash",
  });

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogin(true);
    }

    if (!isLogin && !localStorage.getItem("token")) {
      window.location.href = "/login";
    }
  }, [isLogin]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setRegistration({
      ...registration,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await BackendService.addUser();
      const response = await BackendService.addRaces(
        registration.race,
        registration.phoneNumber,
        registration.tshirtSize,
        registration.paymentMethod
      );
      console.log(response);
      if (response.status === 200) {
        alert("Înscrierea a fost realizată cu succes!");
        window.location.href = "/";
      }
      if (response.status === 400) {
        alert(response.message);
      }
    } catch (error) {
      alert("A apărut o eroare la înscriere. Vă rugăm să încercați din nou.");
    }
  };

  return (
    <div className="max-w-[20rem] md:max-w-[30rem] mx-auto mt-[-2rem] bg-white rounded-lg shadow-md pl-12 pr-12 pt-2 pb-4">
      <h2 className="mb-6 text-lg text-center md:text-2xl">Înscriere</h2>
      <form onSubmit={handleSubmit} className="w-full">
        <label
          className="block mb-2 font-semibold text-gray-700"
          htmlFor="tshirtSize"
        >
          Mărime tricou:
        </label>
        <select
          id="tshirtSize"
          name="tshirtSize"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          value={registration.tshirtSize}
          onChange={handleInputChange}
          required={true}
        >
          <option value="">Selectează mărimea...</option>
          {tshirtSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>

        <label
          className="block mb-2 font-semibold text-gray-700"
          htmlFor="phoneNumber"
        >
          Număr de telefon:
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
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
                type="radio" // Modificăm tipul de input în 'radio'
                id={`race_${key}`}
                name="race" // Schimbăm numele câmpului pentru a grupa input-urile de tip radio
                value={key}
                checked={registration.race === key} // Verificăm dacă cursa selectată este aceasta
                onChange={handleInputChange}
                className="mr-2"
                required={true}
              />
              <label htmlFor={`race_${key}`} className="text-gray-700">
                {text}
              </label>
            </div>
          ))}
        </div>

        <label className="block mt-2 mb-2 font-semibold text-gray-700">
          Metodă de plată:
        </label>
        <select
          id="paymentMethod"
          name="paymentMethod"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          value={registration.paymentMethod}
          onChange={handleInputChange}
          required={true}
        >
          <option value="">Selectează metodă...</option>
          <option value="cash">Cash</option>
          <option value="revolut">Revolut</option>
        </select>

        <button
          className="w-full px-4 py-2 mt-6 font-semibold text-white bg-green-600 rounded-md hover:bg-green-700"
          type="submit"
        >
          Trimite
        </button>
      </form>
    </div>
  );
};

export default RaceRegistration;
