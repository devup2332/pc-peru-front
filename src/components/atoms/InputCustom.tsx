import { Input, InputProps } from "@nextui-org/react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface CustomInputProps extends InputProps {
  register?: UseFormRegister<FieldValues>;
  name?: string;
}

const CustomInput = (props: CustomInputProps) => {
  const { register, name } = props;
  return register && name ? (
    <Input
      radius="sm"
      classNames={{
        inputWrapper: "h-12",
      }}
      {...props}
      {...register(name)}
    />
  ) : (
    <Input
      radius="sm"
      classNames={{
        input: "placeholder:text-gray-400",
        inputWrapper: "h-[50px]",
        label: "text-gray-400",
      }}
      {...props}
    />
  );
};

export default CustomInput;
