import React, { useState } from 'react';

type RegistrationState = {
  tshirtSize: string;
  phoneNumber: string;
  race: string;
};

const races = {
  "2": "Cursa Copii",
  "3": "Feminin 10-16 ani",
  "4": "Masculin 10-16 ani",
  "5": "Feminim 17-35 de ani",
  "6": "Masculin 17-35 de ani",
  "7": "Feminin 35+ de ani",
  "8": "Masculin 35+ de ani",
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
    race: '', 
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setRegistration({
      ...registration,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Registration Data: ${JSON.stringify(registration, null, 2)}`);
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
          placeholder="07XX XXX XXX"
        />

        <label style={labelStyle} htmlFor="race">Cursa:</label>
        <select
          id="race"
          name="race"
          style={inputStyle}
          value={registration.race}
          onChange={handleInputChange}
        >
          <option value="">Selectează cursa...</option>
          {Object.entries(races).map(([key, text]) => (
            <option key={key} value={key}>{text}</option>
          ))}
        </select>

        <button style={{ padding: '10px 20px', marginTop: '20px', borderRadius: '4px', cursor: 'pointer', backgroundColor: '#029e77', color: 'white', border: 'none' }} type="submit">
          Trimite
        </button>
      </form>
    </div>
  );
};

export default RaceRegistration;
