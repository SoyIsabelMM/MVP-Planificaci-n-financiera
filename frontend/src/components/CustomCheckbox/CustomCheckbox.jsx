import { cn } from "@/lib/utils";
import { Label } from "../Label/Label";

export default function CustomCheckbox({
  label,
  description,
  className,
  customClass,
  tabIndex,
  value,
  ...props
}) {
  return (
    <div className={cn("relative mb-5", className)}>
      <div className="relative w-full">
        <div className="flex items-start w-full gap-2">
          <div>
            <input
              type="checkbox"
              className="size-5"
              {...props}
              tabIndex={tabIndex}
              defaultChecked={value}
            />
          </div>
          <div className="flex-1">
            <Label
              htmlFor={props.id}
              className="block text-black font-bold mb-2"
            >
              {label}
            </Label>
            <p className="">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
