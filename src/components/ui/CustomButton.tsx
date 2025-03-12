
import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface CustomButtonProps extends ButtonProps {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  gradient?: boolean;
}

const CustomButton = ({
  children,
  className,
  variant = "default",
  size = "default",
  isLoading = false,
  leftIcon,
  rightIcon,
  gradient = false,
  ...props
}: CustomButtonProps) => {
  return (
    <Button
      className={cn(
        "relative overflow-hidden transition-all duration-300 ease-out active:scale-95",
        gradient && "bg-gradient-to-r from-brand-purple to-brand-pink hover:saturate-150",
        className
      )}
      variant={variant}
      size={size}
      disabled={isLoading || props.disabled}
      {...props}
    >
      <span className={cn(
        "flex items-center justify-center",
        isLoading && "opacity-0"
      )}>
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </span>
      
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="h-5 w-5 animate-spin" />
        </span>
      )}
    </Button>
  );
};

export default CustomButton;
