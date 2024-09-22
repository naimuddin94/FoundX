import { IInputProps } from "@/src/types";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";

interface IProps extends IInputProps {
  options: {
    key: string;
    label: string;
  }[];
}

const FXSelect = ({ options, label, name, variant = "bordered" }: IProps) => {
  return (
    <Select
      label={label}
      className="max-w-xs"
    >
      {options?.map(option=>(<SelectItem>{option.label}</SelectItem>))}
    </Select>
  );
};

export default FXSelect;
