import { cn } from "@/lib/utils";
import { Label } from "../Label/Label";

export default function CustomSelector({
  label,
  className,
  customClass,
  tabIndex,
  options,
  showLabel = false,
  items = [],
  ...props
}) {
  return (
    <div className="mb-5">
      <div className={cn("relative", className)}>
        {showLabel && (
          <Label htmlFor={props.id} className="block text-gray-700 mb-2">
            {label}
          </Label>
        )}

        <div className="relative w-full">
          <select
            {...props}
            tabIndex={tabIndex}
            className={cn(
              "pl-4 pr-10 py-2 text-[17px] border-t-0 border-x-0 border-b-2 rounded-none",
              "focus:ring-0 focus:border-primary focus:outline-none",
              "transition-colors duration-200 w-full",
              customClass
            )}
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
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
}
