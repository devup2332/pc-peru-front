"use client";
import React, { useEffect, useState } from "react";
import "../globals.css";
import { useTranslation } from "react-i18next";
import { HeaderHome } from "@/components/organisms/HeaderHome";

import Loading from "@/components/organisms/Loading";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const getData = async () => {
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  if (loading) return <Loading />;
  return (
    <div className="fade">
      <HeaderHome />
      {children}
    </div>
  );
};

export default HomeLayout;
