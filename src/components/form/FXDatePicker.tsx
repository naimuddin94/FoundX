import { IInputProps } from "@/src/types";
import { DatePicker } from "@nextui-org/date-picker";
import { Controller } from "react-hook-form";

const FXDatePicker = ({ label, name }: IInputProps) => {
  return (
    <Controller
      name={name}
      render={({ field: { value, ...fields } }) => (
        <DatePicker
          value={value}
          {...fields}
          label={label}
          className="max-w-[284px]"
        />
      )}
    />
  );
};

export default FXDatePicker;
