import NavLink from "./NavLink";
import Link from "next/link";

const navLinks = [
    {title: "List Of Cources", path: "/courses"},
    {title: "Login", path:"/auth/login"},
    {title: "Sign up", path:"/auth/register"},
]

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
          <div className="flex flex-wrap items-center justify-between mx-auto py-4 px-4">
            <Link href={"/"} className=" text-2xl md:text-5xl text-white font-semibold">
              Learn
            </Link>
            <div className="menu block md:w-auto" id="navbar"></div>
            <ul className=" flex p-4 md:p-0 md:flex-row space-x-10 mr-50 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </nav>
      );
}

export default Navbar;