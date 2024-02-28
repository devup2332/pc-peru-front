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
import { usePathname, useRouter } from "next/navigation";

export const HeaderHome = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const goTo = (path: string) => router.push(path);
  const activeClass = "text-primary font-bold";
  return (
    <header className="flex justify-center items-center w-full py-3">
      <div className="flex justify-between items-center w-10/12 max-w-screen-2xl">
        <Link href="/">
          <IconLogo black />
        </Link>
        <div className="flex gap-7 xl:gap-12">
          <ul className="gap-10 text-sm items-center hidden xl:flex xl:gap-12">
            <Link className={pathname === "/" ? activeClass : ""} href="/">
              {t("home.menu.links.home")}
            </Link>
            <Link
              className={pathname === "/components" ? activeClass : ""}
              href="/components"
            >
              {t("home.menu.links.components")}
            </Link>
            <Link
              className={pathname === "/smartphones" ? activeClass : ""}
              href="/smartphones"
            >
              {t("home.menu.links.smartphones")}
            </Link>
            <Link
              className={pathname === "/budgets" ? activeClass : ""}
              href="/budgets"
            >
              {t("home.menu.links.budgets")}
            </Link>
          </ul>
          <button>
            <FaRegMoon className="w-5 h-5" />
          </button>
          <CustomButton
            className="hidden xl:block xl:px-8"
            onClick={() => goTo("/login")}
            variant="light"
          >
            Ingresar
          </CustomButton>
          <CustomButton
            className="hidden xl:block xl:px-8"
            color="primary"
            onClick={() => goTo("/register")}
          >
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
