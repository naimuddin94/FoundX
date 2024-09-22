import { IInputProps } from "@/src/types";
import { DatePicker } from "@nextui-org/date-picker";
import { Controller } from "react-hook-form";

const FXDatePicker = ({
  variant = "bordered",
  size = "md",
  required = false,
  label,
  name,
}: IInputProps) => {
  return (
    <Controller
      name={name}
      render={({ field: { value, ...fields } }) => (
        <DatePicker
          variant={variant}
          size={size}
          isRequired={required}
          value={value}
          {...fields}
          label={label}
          className="min-w-full sm:min-w-[225px]"
        />
      )}
    />
  );
};

export default FXDatePicker;
