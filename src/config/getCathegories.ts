import { TFunction } from "i18next";

export const getCathegories = (t: TFunction) => {
	return [
		{
			id: 1,
			name: t("cathegories.laptops"),
			image: "",
		},
		{
			id: 2,
			name: t("cathegories.peripherals"),
		},
	];
};
