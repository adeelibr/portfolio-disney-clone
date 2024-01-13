import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import SearchInput from "@/components/SearchInput";
import GenreDropDown from "@/components/GenreDropDown";

function Header() {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href="/" prefetch={false} className="mr-10 ">
        <Image
          src="/logo.png"
          alt="Disney logo"
          width={120}
          height={100}
          className="cursor-pointer dark:invert"
        />
      </Link>
      <div className="flex items-center space-x-2">
        <GenreDropDown />
        <SearchInput />
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
