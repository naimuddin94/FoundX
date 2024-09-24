import { IInputProps } from "@/src/types";
import { Select, SelectItem } from "@nextui-org/select";
import { useFormContext } from "react-hook-form";

interface IProps extends IInputProps {
  options: {
    key: string;
    label: string;
  }[];
}

export default function FXSelect({
  options,
  name,
  label,
  variant = "bordered",
  disabled,
}: IProps) {
  const { register } = useFormContext();

  return (
    <Select
      {...register(name)}
      className="min-w-full sm:min-w-[225px]"
      isDisabled={disabled}
      label={label}
      variant={variant}
    >
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
}
