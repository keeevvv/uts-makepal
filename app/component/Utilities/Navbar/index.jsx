import Link from "next/link";
import SearchFunction from "../Search";

const Navbar = () => {
  return (
    <header className="bg-slate-800 w-full h-[55px]  fixed md:pt-1 lg:pt-0 pt-2">
      <div className="flex justify-between items-center px-6 flex-row ">
        <Link href={"/"}>
          <h1 className="lg:text-3xl md:text-2xl font-bold text-white p-1">
            My Anjaynme List
          </h1>
        </Link>
        <SearchFunction />
      </div>
    </header>
  );
};

export default Navbar;
