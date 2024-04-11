import React, { useState } from 'react';

type RegistrationState = {
  name: string;
  surname: string;
  phone: string;
  email: string;
};

const RegistrationForm: React.FC = () => {
  const [registration, setRegistration] = useState<RegistrationState>({
    name: '',
    surname: '',
    phone: '',
    email: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegistration({
      ...registration,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for submission logic, like an API call
    alert(`Registration Data: ${JSON.stringify(registration, null, 2)}`);
  };

  return (
    <div className="registration-form">
      <h2>Inscriere</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nume:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={registration.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="surname">Prenume:</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={registration.surname}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Telefon:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={registration.phone}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={registration.email}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Trimite</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
