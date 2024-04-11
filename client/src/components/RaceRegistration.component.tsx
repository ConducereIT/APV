import React, { useEffect, useState } from 'react';
import {BackendService} from "@genezio-sdk/dev-apv";

type RegistrationState = {
  tshirtSize: string;
  phoneNumber: string;
  races: string[]; // Modificare: de la string la string[]
};

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

const inputStyle = {
  padding: '10px',
  margin: '10px 0',
  border: '1px solid #00b9ae4d',
  borderRadius: '4px',
  width: 'calc(100% - 22px)',
};

const labelStyle = {
  display: 'block',
  marginTop: '20px',
  marginBottom: '5px',
  fontWeight: 'semibold',
  color: '#656372',
};

const RaceRegistration: React.FC = () => {
  const [registration, setRegistration] = useState<RegistrationState>({
    tshirtSize: '',
    phoneNumber: '',
    races: [], // Modificare: inițializare cu un array gol
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setRegistration({
        ...registration,
        races: [...registration.races, value], // Adăugare cursei în array-ul races
      });
    } else {
      setRegistration({
        ...registration,
        races: registration.races.filter(race => race !== value), // Eliminare cursei din array-ul races
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await BackendService.updateUser(registration.phoneNumber, registration.tshirtSize);
    await BackendService.addRaces(registration.races);

    alert('Înscrierea a fost realizată cu succes!');
    window.location.href = '/';
  };

  return (
    <div className="registration-form" style={{ margin: '0 auto', maxWidth: '500px' }}>
      <h2 style={{ textAlign: 'center' }}>Înscriere cros caritabil Aleargă pentru Viață</h2>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle} htmlFor="tshirtSize">Mărime tricou:</label>
        <select
          id="tshirtSize"
          name="tshirtSize"
          style={inputStyle}
          value={registration.tshirtSize}
          onChange={(e) => setRegistration({ ...registration, tshirtSize: e.target.value })}
        >
          <option value="">Selectează mărimea...</option>
          {tshirtSizes.map((size) => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>

        <label style={labelStyle} htmlFor="phoneNumber">Număr de telefon:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          style={inputStyle}
          value={registration.phoneNumber}
          onChange={(e) => setRegistration({ ...registration, phoneNumber: e.target.value })}
          placeholder="07XX XXX XXX"
        />

        <label style={labelStyle}>Cursa:</label>
        {Object.entries(races).map(([key, text]) => (
          <div key={key}>
            <input
              type="checkbox"
              id={`race_${key}`}
              name="races"
              value={key}
              checked={registration.races.includes(key)}
              onChange={handleInputChange}
            />
            <label htmlFor={`race_${key}`}>{text}</label>
          </div>
        ))}

        <button style={{
          padding: '10px 20px',
          marginTop: '20px',
          borderRadius: '4px',
          cursor: 'pointer',
          backgroundColor: '#029e77',
          color: 'white',
          border: 'none'
        }} type="submit">
          Trimite
        </button>
      </form>
    </div>
  );
};

export default RaceRegistration;
