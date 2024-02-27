"use client";
import { IconLogo } from "@/components/icons/IconLogo";
import React from "react";
import { MdMenu } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { CustomButton } from "@/components/atoms/CustomButton";
import { HeaderHome } from "@/components/organisms/HeaderHome";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const { t } = useTranslation();
  return (
    <div>
      <HeaderHome />
      {children}
    </div>
  );
};

export default HomeLayout;
