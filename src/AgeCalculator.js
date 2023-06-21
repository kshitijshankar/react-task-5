import React, { useState } from 'react';
import './AgeCalculator.css';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [ageYears, setAgeYears] = useState(0);
  const [ageMonths, setAgeMonths] = useState(0);

  const calculateAge = () => {
    const today = new Date();
    const birthDateArr = birthDate.split('-');
    const birthYear = parseInt(birthDateArr[0]);
    const birthMonth = parseInt(birthDateArr[1]) - 1;
    const birthDay = parseInt(birthDateArr[2]);
    const birth = new Date(birthYear, birthMonth, birthDay);

    let calculatedAgeYears = today.getFullYear() - birth.getFullYear();
    let calculatedAgeMonths = today.getMonth() - birth.getMonth();

    if (today.getDate() < birth.getDate()) {
      calculatedAgeMonths--;
    }

    if (calculatedAgeMonths < 0) {
      calculatedAgeYears--;
      calculatedAgeMonths = 12 + calculatedAgeMonths;
    }

    setAgeYears(calculatedAgeYears);
    setAgeMonths(calculatedAgeMonths);
  };

  return (
    <div className="container">
      <h1>React Task-5</h1>
      <h1 className="title">Age Calculator</h1>
      <div className="form">
        <label htmlFor="birthDate">Enter your birthdate:</label>
        <input
          type="date"
          id="birthDate"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <button className="calculate-btn" onClick={calculateAge}>Calculate</button>
      </div>
      {ageYears > 0 && (
        <p className="age-result">
          Your age is: {ageYears} years {ageMonths} months
        </p>
      )}
    </div>
  );
};

export default AgeCalculator;
