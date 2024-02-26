"use client";
import React, { useState } from "react";
import { IconGoogle } from "@/components/icons/IconGoogle";
import { useTranslation } from "react-i18next";
import CustomInput from "@/components/atoms/CustomInput";
import { CustomButton } from "@/components/atoms/CustomButton";
import LoginImage from "../../../public/assets/login.jpg";
import Image from "next/image";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LOGIN_USER_SCHEMA } from "@/schemas/loginUserSchema";
import { MdPlayArrow } from "react-icons/md";
import { PiSpinnerBold } from "react-icons/pi";
import { IconLogo } from "@/components/icons/IconLogo";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { sleep } from "@/lib/utils/sleep";

const LoginPage = () => {
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LOGIN_USER_SCHEMA),
  });
  const { t } = useTranslation();

  const loginUser: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    await sleep(3000);
    setIsLoading(false);
  };

  return (
    <div className="h-screen flex justify-center items-center text-sm">
      <div className="lg:shadow-customShadow lg:rounded-xl w-10/12 max-w-sm lg:max-w-4xl flex overflow-hidden xl:max-w-6xl 2xl:max-w-screen-2xl">
        <div className="w-6/12 hidden lg:block lg:relative">
          <Image
            src={LoginImage}
            className="w-full h-full object-cover"
            alt=""
            width={1000}
            height={1000}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
            <div className="w-10/12 grid gap-4 2xl:w-8/12 2xl:gap-8">
              <Link href="/">
                <IconLogo />
              </Link>
              <p className="text-white text-lg 2xl:text-2xl">
                {t("login.sideImage.description")}
              </p>
              <Link
                className="text-white flex items-center gap-2 hover:text-primary transition-colors w-fit"
                href="/register"
              >
                {t("login.sideImage.link")}
                <MdPlayArrow />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:flex lg:justify-center lg:items-center lg:w-6/12 lg:py-16 2xl:py-32">
          <form
            className="grid gap-7 2xl:gap-10 2xl:w-6/12"
            onSubmit={handleSubmit(loginUser)}
          >
            <div className="grid">
              <p className="text-xl lg:w-72 xl:text-2xl">{t("login.title")}</p>
              <Link className="text-4xl font-extrabold w-fit" href="/">
                PC Peru
              </Link>
            </div>
            <CustomButton
              variant="bordered"
              className="h-[50px] border-black/10 hover:border-black/30"
              radius="sm"
            >
              <IconGoogle className="w-5 h-5" />
              {t("login.buttons.google")}
            </CustomButton>
            <div className="w-full h-[2px] bg-black/20 relative">
              <p className="text-black/30 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-5 whitespace-nowrap">
                {t("login.buttons.or")}
              </p>
            </div>
            <CustomInput
              type="text"
              required={false}
              autoComplete="email"
              placeholder={t("login.inputs.email")}
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
              type={showPass ? "text" : "password"}
              placeholder={t("login.inputs.password")}
              autoComplete="current-password"
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
            <Link
              rel="stylesheet"
              href="/forgotPassword"
              className="text-primary text-xs w-fit lg:text-sm"
            >
              {t("login.sideForm.forgotPassword")}
            </Link>
            <CustomButton variant="solid" color="primary" type="submit">
              {isLoading && <PiSpinnerBold className="w-5 h-5 animate-spin" />}
              {t("login.buttons.submit")}
            </CustomButton>

            <p className="text-primary text-xs lg:text-sm">
              {t("login.links.notHaveAccount.text")}
              <Link className="font-bold ml-2" href="/register">
                {t("login.links.notHaveAccount.link")}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
