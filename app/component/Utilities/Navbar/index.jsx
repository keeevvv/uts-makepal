import Link from "next/link";
import SearchFunction from "../Search";

const Navbar = () => {
  return (
    <header className="bg-slate-800 w-full mb-2 md:h-[55px] h-[100px]">
      <div className="flex md:justify-between items-center px-6 flex-col md:flex-row ">
        <Link href={"/"}>
          <h1 className="lg:text-3xl md:text-2xl font-bold text-white p-2">
            My Anjaynme List
          </h1>
        </Link>
        <SearchFunction />
      </div>
    </header>
  );
};

export default Navbar;
