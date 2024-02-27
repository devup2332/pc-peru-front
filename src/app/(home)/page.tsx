"use client";
import React from "react";
import HomeBanner from "../../../public/assets/homeBanner.jpg";
import Image from "next/image";
import { IconLogo } from "@/components/icons/IconLogo";
import CustomInput from "@/components/atoms/CustomInput";
import { IoSearch } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="relative">
        <Image
          className="w-full h-full object-cover"
          src={HomeBanner}
          width={1000}
          height={1000}
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full grid place-items-center">
          <div className="px-6 w-full md:px-24 grid gap-5 max-w-2xl">
            <IconLogo />
            <CustomInput
              variant="flat"
              placeholder={t("home.banner.input.placeholderText")}
              endContent={<IoSearch className="w-6 h-6" />}
            />
            <p className="text-white">{t("home.banner.description")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
