import { Input, InputProps } from "@nextui-org/react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface CustomInputProps extends InputProps {
	register?: UseFormRegister<FieldValues>;
	name?: string;
}

const CustomInput = (props: CustomInputProps) => {
	return props.register && props.name ? (
		<Input
			radius="sm"
			classNames={{
				inputWrapper: "h-12",
			}}
			{...props}
			{...props.register(props.name)}
		/>
	) : (
		<Input
			radius="sm"
			classNames={{
				inputWrapper: "h-12",
			}}
			{...props}
		/>
	);
};

export default CustomInput;
