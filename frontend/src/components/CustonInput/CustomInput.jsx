import { cn } from "@/lib/utils";
import { Input } from "../Input/Input";
import { Label } from "../Label/Label";
import Image from "next/image";

export const CustomInput = ({
  label,
  icon,
  error,
  className,
  customClass,
  tabIndex,
  showLabel = false,
  items = [],
  ...props
}) => {
  return (
    <div className="mb-5">
      <div className={cn("relative mb-1", className)}>
        {showLabel && (
          <Label htmlFor={props.id} className="block text-gray-700 mb-2">
            {label}
          </Label>
        )}

        <div className="relative w-full">
          <Input
            {...props}
            tabIndex={tabIndex}
            className={cn(
              "pl-4 pr-10 py-2 text-[17px] border-t-0 border-x-0 border-b-2 rounded-none",
              "focus:ring-0 focus:border-primary focus:outline-none",
              "transition-colors duration-200",
              error ? "border-red-500" : "border-gray-300",
              customClass
            )}
          />
          {icon && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <Image
                src={icon}
                alt={`${label} icon`}
                width={30}
                height={35}
                className="mb-2 text-gray-400"
              />
            </div>
          )}
        </div>
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
      {items.map((item, index) => (
        <p
          className={`text-right text-sm w-full ${item.className}`}
          key={index}
        >
          {item.text}
        </p>
      ))}
    </div>
  );
};
