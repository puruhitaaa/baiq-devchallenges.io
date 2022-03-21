import { FC } from 'react';
import './Input.css';
import { Phone, Lock } from '@material-ui/icons';

interface Props {
  disabled?: boolean;
  fullWidth?: boolean;
  error?: boolean;
  label?: string;
  helperText?: string;
  onChange?: () => void;
  placeholder?: string;
  row?: string;
  size?: 'sm' | 'md';
  startIcon?: boolean;
  endIcon?: boolean;
  multiline?: boolean;
  type?: 'number' | 'password' | 'email' | 'text' | 'tel';
  value?: string;
}

const Input: FC<Props> = ({
  label,
  fullWidth,
  disabled,
  error,
  helperText,
  onChange,
  placeholder = 'Placeholder',
  startIcon,
  endIcon,
  row = '6',
  multiline,
  type = 'text',
  size,
  value,
  ...rest
}) => {
  return (
    <div
      className={['input--wrapper', error ? 'error' : null]
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim()}
    >
      {label?.trim() !== '' ? (
        <label
          className={['input--label', error ? 'error' : null]
            .join(' ')
            .replace(/\s+/g, ' ')
            .trim()}
        >
          {label}
        </label>
      ) : null}

      {!multiline ? (
        <div
          className={[
            'input--comp-wrapper',
            disabled ? 'disabled' : null,
            error ? 'error' : null,
            startIcon ? 'with--start-icon' : null,
            endIcon ? 'with--end-icon' : null,
            size ? size.trim() === 'sm' && 'sm' : null,
            fullWidth ? 'fullWidth' : null,
          ]
            .join(' ')
            .replace(/\s+/g, ' ')
            .trim()}
        >
          {startIcon && (
            <Phone
              className={['input--start-icon', fullWidth ? 'fullWidth' : null]
                .join(' ')
                .replace(/\s+/g, ' ')
                .trim()}
            />
          )}
          <input
            className={[
              'input--comp',
              startIcon ? 'with--start-icon' : null,
              endIcon ? 'with--end-icon' : null,
              fullWidth ? 'fullWidth' : null,
            ]
              .join(' ')
              .replace(/\s+/g, ' ')
              .trim()}
            disabled={disabled}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            value={value}
            {...rest}
          />

          {endIcon && (
            <Lock
              className={['input--end-icon', fullWidth ? 'fullWidth' : null]
                .join(' ')
                .replace(/\s+/g, ' ')
                .trim()}
            />
          )}
        </div>
      ) : (
        <textarea
          className={[
            'input--textarea',
            disabled ? 'disabled' : null,
            error ? 'error' : null,
          ]
            .join(' ')
            .replace(/\s+/g, ' ')
            .trim()}
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder}
          rows={parseInt(row)}
          value={value}
          {...rest}
        />
      )}

      {helperText ? (
        <p
          className={['input--helper-text', error ? 'error' : null]
            .join(' ')
            .replace(/\s+/g, ' ')
            .trim()}
        >
          {helperText}
        </p>
      ) : null}
    </div>
  );
};

export default Input;
