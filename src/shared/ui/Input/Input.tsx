import { type ChangeEventHandler, type FocusEventHandler } from 'react';

interface InputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  error?: string;
  disabled?: boolean;
  className?: string;
}

export const Input = ({
  value,
  onChange,
  onBlur,
  placeholder,
  type = 'text',
  error,
  disabled = false,
  className = '',
}: InputProps) => {
  return (
    <div className="input-wrapper">
      <input
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        className={`input ${error ? 'input-error' : ''} ${className}`}
      />
      {error && <span className="input-error-message">{error}</span>}
    </div>
  );
};