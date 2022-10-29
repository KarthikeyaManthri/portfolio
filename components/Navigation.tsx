import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const Navigation = () => {
  return (
    <div className="sticky top-0 z-20 py-2 md:py-6 md:mb-6 bg-[#FFDDD2] dark:bg-black transition duration-300">
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
        <div className="items-start flex">
          <Link
            href="/"
            className={
              "font-medium font-satoshi tracking-wider transition-colors text-gray-900 dark:hover:text-sky-500 hover:text-sky-500 uppercase dark:text-[#FFB9B9]"
            }
          >
            Karthikeya Manthri
          </Link>
        </div>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navigation;
