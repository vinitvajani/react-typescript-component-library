import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Eye, EyeOff, X, Loader2 } from 'lucide-react';
import { InputFieldProps } from './types';

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      value,
      onChange,
      label,
      placeholder,
      helperText,
      errorMessage,
      disabled = false,
      invalid = false,
      variant = 'outlined',
      size = 'md',
      type = 'text',
      loading = false,
      clearable = false,
      onClear,
      className,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [internalValue, setInternalValue] = useState(value || '');
    
    const inputValue = value !== undefined ? value : internalValue;
    const isPassword = type === 'password';
    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e);
      } else {
        setInternalValue(e.target.value);
      }
    };

    const handleClear = () => {
      if (onClear) {
        onClear();
      } else {
        setInternalValue('');
      }
    };

    const getInputClasses = () => {
      const baseClasses = 'w-full transition-all duration-200 focus:outline-none';
      
      // Size classes
      const sizeClasses = {
        sm: 'px-2 py-1 text-sm rounded',
        md: 'px-3 py-2 rounded-lg',
        lg: 'px-4 py-3 text-lg rounded-lg'
      };

      // Variant classes
      const variantClasses = {
        filled: cn(
          'border-0 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400',
          'focus:bg-white dark:focus:bg-gray-600 focus:ring-2 focus:ring-primary-500',
          invalid && 'bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-600 focus:ring-red-500',
          disabled && 'bg-gray-50 dark:bg-gray-800 cursor-not-allowed'
        ),
        outlined: cn(
          'bg-transparent border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400',
          'focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
          invalid && 'border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-900/20 focus:ring-red-500 focus:border-red-500',
          disabled && 'bg-gray-50 dark:bg-gray-800 cursor-not-allowed border-gray-200 dark:border-gray-700'
        ),
        ghost: cn(
          'bg-transparent border-0 border-b border-gray-300 dark:border-gray-600 rounded-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400',
          'focus:border-primary-500 focus:outline-none',
          invalid && 'border-red-500 focus:border-red-500',
          disabled && 'cursor-not-allowed border-gray-200 dark:border-gray-700'
        )
      };

      return cn(baseClasses, sizeClasses[size], variantClasses[variant]);
    };

    const getLabelClasses = () => {
      return cn(
        'block font-medium mb-2',
        size === 'sm' ? 'text-xs' : 'text-sm',
        disabled ? 'text-gray-400 dark:text-gray-500' : 'text-gray-700 dark:text-gray-300'
      );
    };

    const showRightIcons = (isPassword && !loading) || (clearable && inputValue && !loading) || loading;
    
    return (
      <div className={cn('w-full', className)}>
        {label && (
          <label className={getLabelClasses()}>
            {label}
          </label>
        )}
        
        <div className="relative">
          <input
            ref={ref}
            type={inputType}
            value={inputValue}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={disabled || loading}
            className={cn(
              getInputClasses(),
              showRightIcons && (size === 'sm' ? 'pr-8' : size === 'lg' ? 'pr-12' : 'pr-10')
            )}
            data-testid="input-field"
            aria-invalid={invalid}
            aria-describedby={
              errorMessage ? 'error-message' : helperText ? 'helper-text' : undefined
            }
            {...props}
          />
          
          {showRightIcons && (
            <div className="absolute inset-y-0 right-0 flex items-center space-x-1 pr-3">
              {loading && (
                <Loader2 
                  className={cn(
                    'animate-spin text-gray-400',
                    size === 'sm' ? 'h-3 w-3' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'
                  )}
                  data-testid="loading-spinner"
                />
              )}
              
              {!loading && clearable && inputValue && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  data-testid="clear-button"
                  aria-label="Clear input"
                >
                  <X className={cn(
                    size === 'sm' ? 'h-3 w-3' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'
                  )} />
                </button>
              )}
              
              {!loading && isPassword && (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  data-testid="password-toggle"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeOff className={cn(
                      size === 'sm' ? 'h-3 w-3' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'
                    )} />
                  ) : (
                    <Eye className={cn(
                      size === 'sm' ? 'h-3 w-3' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'
                    )} />
                  )}
                </button>
              )}
            </div>
          )}
        </div>
        
        {(errorMessage || helperText) && (
          <div className="mt-1">
            {invalid && errorMessage && (
              <p 
                id="error-message"
                className="text-xs text-red-600 dark:text-red-400"
                data-testid="error-message"
                role="alert"
              >
                {errorMessage}
              </p>
            )}
            {!invalid && helperText && (
              <p 
                id="helper-text"
                className="text-xs text-gray-500 dark:text-gray-400"
                data-testid="helper-text"
              >
                {helperText}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField';
