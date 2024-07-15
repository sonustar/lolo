import React, { useEffect, useState } from 'react';

const Formpage = () => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  // Validation function (example)
  const validationFunction = (inputValue) => {
    // Example validation: ensuring the input is not empty
    if (inputValue.trim() === '') {
      setErrorMessage('Name cannot be empty');
      return false;
    } else {
      setErrorMessage('');
      return true;
    }
  };

  useEffect(() => {
    setIsValid(validationFunction(value));
  }, [value]);

  function Update(val){
    setValue(val)
  }

  return (
    <div>
      <input
        type="text"
        placeholder='enter the name'
        value={value}
        onChange={(e)=>{
            Update(e.target.value)
        }}
        className={isValid ? '' : 'error'}
      />

      {!isValid && <p className="error-message">{errorMessage}</p>}
      <h1> Name : {value}</h1>
      
    </div>
  ); 
};

export default Formpage;
