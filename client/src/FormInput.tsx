import React from 'react';

interface FormInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  validationError?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  required = false,
  validationError
}) => {
  return (
    <div className="form-input-container">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`form-input ${validationError ? 'input-error' : ''}`}
      />
      {validationError && (
        <div className="input-error-message">{validationError}</div>
      )}
    </div>
  );
};

export default FormInput;