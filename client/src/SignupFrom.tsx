import React, { FormEvent, useState } from 'react';
import FormInput from './FormInput';

interface SignupFormProps {
  onSignup: (email: string, password: string, confirmPassword: string) => void;
}


const SignupForm: React.FC<SignupFormProps> = ({ onSignup }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSignup(email, password, confirmPassword);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <FormInput
        type='email'
        placeholder='Email Address'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <FormInput
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <FormInput
        type='password'
        placeholder='Confirm Password'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;