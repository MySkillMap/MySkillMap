import React, { FormEvent, useState } from 'react';
import FormInput from './FormInput';

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
  onSwitchToSignup: () => void;
}

/**
 * Form component for user login
 */
const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onSwitchToSignup }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Welcome Back to MySkillMap!</h2>
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
      <a href='#' className="forgot-password">Forgot password?</a>
      <button type="submit">Login</button>
      
      <div className="signup-prompt">
        Not a member?
        <a href='#' onClick={(e) => {
          e.preventDefault();
          onSwitchToSignup();
        }}>Signup now</a>
      </div>
    </form>
  );
};

export default LoginForm;