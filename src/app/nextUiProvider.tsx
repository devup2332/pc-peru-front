"use client"
import { NextUIProvider } from "@nextui-org/react";
interface NextUiProviderProps {
	children: React.ReactNode;
}
export const NextUiProvider = ({ children }: NextUiProviderProps) => {
	return <NextUIProvider>{children}</NextUIProvider>;
};
