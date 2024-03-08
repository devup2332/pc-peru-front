/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeBanner from "../../../public/assets/homeBanner.jpg";
import "swiper/css";
import Image from "next/image";
import { IconLogo } from "@/components/icons/IconLogo";
import CustomInput from "@/components/atoms/CustomInput";
import { IoSearch } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { trendingProducts } from "@/data";
import ItemCard from "@/components/organisms/ItemCard";
import { m } from "framer-motion";
import { Navigation } from "swiper/modules";
import { BiSolidRightArrow } from "react-icons/bi";
import Carrousel from "@/components/organisms/Carrousel";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="relative h-96 xl:h-unit-8xl 2xl:h-unit-9xl bg-red-500">
        <Image
          className="w-full h-full object-cover"
          src={HomeBanner}
          width={2000}
          priority
          height={1000}
          alt=""
        />
        <div className="absolute bg-black/30 top-0 left-0 w-full h-full grid place-items-center">
          <div className="w-10/12 grid max-w-screen-2xl">
            <div className="self-start w-full grid gap-5 md:w-8/12 lg:gap-8 lg:w-6/12 xl:w-5/12 max-w-lg ">
              <IconLogo className="md:w-52 md:h-20 xl:w-72 xl:h-24 2xl:w-96 2xl:h-36" />
              <CustomInput
                variant="flat"
                placeholder={t("home.banner.input.placeholderText")}
                endContent={<IoSearch className="w-6 h-6" />}
              />
              <p className="text-white">{t("home.banner.description")}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-10/12 m-auto max-w-screen-2xl py-8 grid gap-10">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl">{t("home.trending.title")}</h1>
          <button className="flex items-center gap-2 hover:text-primary transition-colors">
            <p>{t("home.trending.showMore")}</p>
            <BiSolidRightArrow className="w-3 h-3" />
          </button>
        </div>
        <Carrousel
          itemsToShow={4}
          items={trendingProducts.map((item, index) => (
            <m.div key={index} className="min-w-72">
              <ItemCard item={item} />
            </m.div>
          ))}
        >
          {trendingProducts.map((item) => {
            return (
              <m.div key={item.id} className="min-w-72">
                <ItemCard item={item} />
              </m.div>
            );
          })}
        </Carrousel>
        {/* <Swiper
          slidesPerView={1}
          spaceBetween={30}
          initialSlide={5}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
              navigation: true,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
              navigation: false,
            },
            1524: {
              slidesPerView: 4,
              spaceBetween: 50,
              navigation: false,
            },
          }}
        >
          {trendingProducts.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <ItemCard item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper> */}
      </section>

      <section className="w-10/12 m-auto max-w-screen-2xl py-8 grid gap-3">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl">{t("home.cathegory.title")}</h1>
          <button className="flex items-center gap-2 hover:text-primary transition-colors">
            <p>{t("home.cathegory.showMore")}</p>
            <BiSolidRightArrow className="w-3 h-3" />
          </button>
        </div>
        <p>{t("home.cathegory.description")}</p>
      </section>
    </div>
  );
};

export default HomePage;
