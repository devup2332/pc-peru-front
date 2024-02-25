import { Button, ButtonProps } from "@nextui-org/react";

export const CustomButton = (props: ButtonProps) => {
  const { children, ...otherProps } = props;
  return (
    <Button className="h-12 text-sm" radius="sm" {...otherProps}>
      {children}
    </Button>
  );
};
