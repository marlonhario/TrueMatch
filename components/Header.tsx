import Link from "next/link";
import Nav from "./Nav";
// import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="px-8 2xl:px-24 py-12 text-white">
      <div className="continaer mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Marlon<span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          {/* <Link href={"/contact"}>
            <Button variant={"outline"}>Hire me</Button>
          </Link> */}
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
