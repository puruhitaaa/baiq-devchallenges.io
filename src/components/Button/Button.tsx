import { FC } from 'react';
import './Button.css';
import { AddShoppingCart } from '@material-ui/icons';

interface ButtonProps {
  color?: 'default' | 'primary' | 'danger' | 'secondary';
  disabled?: boolean;
  disableShadow?: boolean;
  endIcon?: 'local_grocery_store';
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  startIcon?: 'local_grocery_store';
  variant?: 'default' | 'outline' | 'text';
  type?: 'button' | 'reset' | 'submit';
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  color = 'default',
  label = 'Default',
  variant = 'default',
  disabled = false,
  disableShadow = false,
  endIcon,
  size = 'md',
  startIcon,
  type,
  onClick,
  ...rest
}) => {
  const className = [
    'button',
    disableShadow ? 'button--disableShadow' : null,
    `button-${variant !== 'default' ? variant : 'solid'}--${color}`,
    `button-size--${size}`,
    `button-variant--${variant}`,
  ]
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();

  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {startIcon && <AddShoppingCart className="button-icon--left" />}
      {label}
      {endIcon && <AddShoppingCart className="button-icon--right" />}
    </button>
  );
};

export default Button;
