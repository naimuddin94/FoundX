interface IFormInputProps {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  type?: string;
  label: string;
  name: string;
}

const FormInput = ({
  variant = "bordered",
  size = "md",
  required = false,
  type = "text",
  label,
  name,
}: IFormInputProps) => {
  return (
    <div>
      <h1>This is FormInput component</h1>
    </div>
  );
};

export default FormInput;