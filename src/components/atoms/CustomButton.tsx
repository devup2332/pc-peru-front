import { Button, ButtonProps } from "@nextui-org/react";
import { twMerge } from "tailwind-merge";

export const CustomButton = (props: ButtonProps) => {
	const { children, ...otherProps } = props;
	return (
		<Button
			{...otherProps}
			radius="sm"
			className={twMerge("h-12 text-sm", props.className)}
		>
			{children}
		</Button>
	);
};
