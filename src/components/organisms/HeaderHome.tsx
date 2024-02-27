import Link from "next/link";
import { IconLogo } from "../icons/IconLogo";
import { FaRegMoon } from "react-icons/fa";
import { CustomButton } from "../atoms/CustomButton";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import { MdMenu } from "react-icons/md";
import { useTranslation } from "react-i18next";

export const HeaderHome = () => {
  const { t } = useTranslation();
  return (
    <header className="flex justify-center items-center w-full py-3">
      <div className="flex justify-between items-center w-10/12">
        <Link href="/">
          <IconLogo black />
        </Link>
        <div className="flex gap-7">
          <ul className="gap-10 text-sm items-center hidden xl:flex">
            <li>{t("home.menu.links.home")}</li>
            <li>{t("home.menu.links.components")}</li>
            <li>{t("home.menu.links.smartphones")}</li>
            <li>{t("home.menu.links.budgets")}</li>
          </ul>
          <button>
            <FaRegMoon className="w-5 h-5" />
          </button>
          <CustomButton className="hidden xl:block" variant="light">
            Ingresar
          </CustomButton>
          <CustomButton className="hidden xl:block xl:px-8" color="primary">
            Registrare
          </CustomButton>
          <Dropdown>
            <DropdownTrigger className="xl:hidden">
              <button>
                <MdMenu className="w-7 h-7" />
              </button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions" color="secondary">
              <DropdownSection showDivider>
                <DropdownItem key="home" href="/">
                  {t("home.menu.links.home")}
                </DropdownItem>
                <DropdownItem key="components" href="/components">
                  {t("home.menu.links.components")}
                </DropdownItem>
                <DropdownItem key="smartphones" href="/smartphones">
                  {t("home.menu.links.smartphones")}
                </DropdownItem>
                <DropdownItem key="presupuestos" href="/budgets">
                  {t("home.menu.links.budgets")}
                </DropdownItem>
              </DropdownSection>
              <DropdownSection>
                <DropdownItem key="login" href="/login">
                  {t("home.menu.links.login")}
                </DropdownItem>
                <DropdownItem key="register" href="/register">
                  {t("home.menu.links.register")}
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};
