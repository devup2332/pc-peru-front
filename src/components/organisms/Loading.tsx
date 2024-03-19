import React from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
	const { t } = useTranslation();
	return (
		<div className="h-screen w-screen flex justify-center items-center">
			<div className="grid justify-center gap-5">
				<AiOutlineLoading3Quarters className="animate-spin w-10 h-10 m-auto text-primary" />
				<p className="text-center">{t("home.loading")}</p>
			</div>
		</div>
	);
};

export default Loading;
