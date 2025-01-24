import { cn } from '@/lib/utils';
import { Input } from '../Input/xinput';
import { Label } from '../Label/xlabel';
import Image from 'next/image';

export const CustomInput = ({
  label,
  icon,
  error,
  customClass,
  tabIndex,
  ...props
}) => {
  return (
    <div className="relative mb-4">
      <Label htmlFor={props.id} className="sr-only">
        {label}
      </Label>

      <div className="relative">
        <Input
          {...props}
          tabIndex={tabIndex}
          className={cn(
            'pl-4 pr-10 py-2 text-[17px] border-t-0 border-x-0 border-b-2 rounded-none',
            'focus:ring-0 focus:border-primary focus:outline-none',
            'transition-colors duration-200',
            error ? 'border-red-500' : 'border-gray-300',
            customClass
          )}
        />
        {icon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Image
              src={icon}
              alt={`${label} icon`}
              width={20}
              height={20}
              className="h-5 w-5 text-gray-400"
            />
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};
