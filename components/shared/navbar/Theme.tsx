"use client";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { themes } from "@/constants";
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";

const Theme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          {theme === "light" ? (
            <Image
              src="/assets/icons/sun.svg"
              alt="light mode sun"
              width={20}
              height={20}
              className="active-theme"
            />
          ) : (
            <Image
              src="/assets/icons/moon.svg"
              alt="dark mode moon"
              width={20}
              height={20}
              className="active-theme"
            />
          )}
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes?.map(({ value, label, icon }) => (
            <MenubarItem
              key={value}
              className="flex items-center gap-4 px-2.5  py-2 dark:focus:bg-dark-400"
              onClick={() => {
                setTheme(value);
                if (value !== "system") {
                  localStorage.setItem("theme", value);
                } else {
                  localStorage.removeItem("theme");
                }
              }}
            >
              <Image
                src={icon}
                alt={value}
                width={16}
                height={16}
                className={`${theme === value && "active-theme"}`}
              />
              <p
                className={`body-semibold text-light-500 
                ${
                  theme === value ? "text-primary-500" : "text-dark100_light900"
                }`}
              >
                {label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
export default Theme;
