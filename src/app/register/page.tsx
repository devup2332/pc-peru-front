"use client";
import { Toaster, toast } from "sonner";
import { CustomButton } from "@/components/atoms/CustomButton";
import CustomInput from "@/components/atoms/CustomInput";
import { IconGoogle } from "@/components/icons/IconGoogle";
import { REGISTER_USER_SCHEMA } from "@/schemas/registerUserSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import RegisterImage from "../../../public/assets/register.jpg";
import { IconLogo } from "@/components/icons/IconLogo";
import { MdPlayArrow } from "react-icons/md";
import { RegieterUserBody, authApi } from "@/utils/api/authApi";
import { PiSpinnerBold } from "react-icons/pi";
import axios from "axios";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
	const [showPass, setShowPass] = useState(false);
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const { t } = useTranslation();
	const {
		formState: { errors },
		handleSubmit,
		register,
	} = useForm({
		resolver: zodResolver(REGISTER_USER_SCHEMA),
	});

	const registerUser: SubmitHandler<FieldValues> = async (data) => {
		setLoading(true);
		try {
			delete data.password2;
			Object.keys(data).forEach((key) => (data[key] = data[key].trim()));
			const { data: responseData } = await authApi.registerUser(
				data as RegieterUserBody,
			);
			localStorage.setItem("token", responseData.data.token);
			router.push("/");
			setLoading(false);
		} catch (err) {
			setLoading(false);
			if (axios.isAxiosError(err)) {
				toast.error(err.response?.data.message || "Hubo un error inesperado", {
					duration: 2000,
					position: "top-right",
					style: {
						color: "red",
					},
				});
			}
		}
	};
	return (
		<div className="fade w-full h-screen grid place-items-center">
			<div className="lg:shadow-customShadow lg:rounded-xl w-10/12 max-w-sm lg:flex lg:max-w-5xl xl:max-w-6xl 2xl:max-w-screen-2xl overflow-hidden ">
				<div className="py-6 lg:py-16 lg:w-6/12 lg:flex lg:justify-center lg:items-center 2xl:py-28">
					<form
						className="gap-8 grid lg:w-9/12 2xl:grid-cols-2 2xl:gap-y-10"
						onSubmit={handleSubmit(registerUser)}
					>
						<div className="text-2xl 2xl:col-start-1 2xl:col-end-3">
							<p>{t("register.title.text")}</p>
							<Link href="/" className="font-bold text-4xl">
								{t("register.title.brand")}
							</Link>
						</div>
						<CustomButton
							variant="bordered"
							className="h-[50px] border-black/10 hover:border-black/30 w-full 2xl:col-start-1 2xl:col-end-3"
							radius="sm"
						>
							<IconGoogle className="w-5 h-5" />
							{t("register.buttons.google")}
						</CustomButton>
						<div className="w-full h-[2px] bg-black/20 relative 2xl:col-start-1 2xl:col-end-3">
							<p className="text-black/30 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-5 whitespace-nowrap">
								{t("register.buttons.or")}
							</p>
						</div>

						<CustomInput
							type="text"
							required={false}
							autoComplete="email"
							placeholder={t("register.inputs.email")}
							variant="bordered"
							name="email"
							register={register}
							errorMessage={errors.email ? String(errors.email.message) : ""}
							isInvalid={errors.email ? true : false}
							endContent={
								<MdOutlineMailOutline className="w-6 h-6 text-black/30 fill-current" />
							}
						/>
						<CustomInput
							type="tel"
							required={false}
							autoComplete="phone"
							placeholder={t("register.inputs.phone")}
							variant="bordered"
							name="phone"
							register={register}
							errorMessage={errors.phone ? String(errors.phone.message) : ""}
							isInvalid={errors.phone ? true : false}
							endContent={
								<MdPhone className="w-6 h-6 text-black/30 fill-current" />
							}
						/>
						<CustomInput
							type="text"
							required={false}
							className="2xl:col-start-1 2xl:col-end-3"
							autoComplete="name"
							placeholder={t("register.inputs.fullName")}
							variant="bordered"
							name="full_name"
							register={register}
							errorMessage={
								errors.fullName ? String(errors.fullName.message) : ""
							}
							isInvalid={errors.fullName ? true : false}
							endContent={
								<MdPerson className="w-6 h-6 text-black/30 fill-current" />
							}
						/>
						<CustomInput
							type={showPass ? "text" : "password"}
							required={false}
							autoComplete="current-password"
							placeholder={t("register.inputs.password")}
							variant="bordered"
							name="password"
							register={register}
							errorMessage={
								errors.password ? String(errors.password.message) : ""
							}
							isInvalid={errors.password ? true : false}
							endContent={
								<button
									type="button"
									className="outline-none"
									onClick={() => setShowPass(!showPass)}
								>
									{showPass ? (
										<FaEyeSlash className="w-6 h-6 text-black/30 fill-current" />
									) : (
										<FaEye className="w-6 h-6 text-black/30 fill-current" />
									)}
								</button>
							}
						/>
						<CustomInput
							type={showPass ? "text" : "password"}
							required={false}
							autoComplete="current-password"
							placeholder={t("register.inputs.password2")}
							variant="bordered"
							name="password2"
							register={register}
							errorMessage={
								errors.password2 ? String(errors.password2.message) : ""
							}
							isInvalid={errors.password2 ? true : false}
						/>
						<CustomButton
							color="primary"
							type="submit"
							className="2xl:col-start-1 2xl:col-end-3"
							disabled={loading}
						>
							{loading && <PiSpinnerBold className="w-5 h-5 animate-spin" />}
							{t("register.buttons.submit")}
						</CustomButton>
						<p className="text-primary text-xs lg:text-sm 2xl:col-start-1 2xl:col-end-3 w-fit">
							{t("register.links.haveAccount.text")}
							<Link className="font-bold ml-2" href="/login">
								{t("register.links.haveAccount.link")}
							</Link>
						</p>
					</form>
				</div>
				<div className="hidden relative lg:block lg:w-6/12">
					<Image
						src={RegisterImage}
						width={1000}
						height={1000}
						alt=""
						className="w-full h-full object-cover"
					/>
					<div className="absolute top-0 left-0 w-full h-full bg-black/50 text-white grid place-items-center">
						<div className="w-10/12 grid gap-5 2xl:w-8/12">
							<Link href="/" className="w-fit">
								<IconLogo />
							</Link>
							<p className="2xl:text-2xl">
								{t("register.sideImage.description")}
							</p>
							<Link
								href="/login"
								className="flex gap-2 items-center hover:text-primary transition-colors w-fit"
							>
								{t("register.sideImage.link")} <MdPlayArrow />
							</Link>
						</div>
					</div>
				</div>
				<Toaster />
			</div>
		</div>
	);
};

export default RegisterPage;
