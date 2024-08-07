import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 lg:py-12 text-white">
      <div className="container mx-auto">
        {/* Mobile layout */}
        <div className="flex items-center justify-between xl:hidden">
          <div className="w-10">
            {" "}
            {/* Placeholder to balance the layout */}
            {/* You can put a back button or other element here if needed */}
          </div>
          <Link href="/" className="flex-grow text-center">
            <h1 className="text-4xl font-semibold">
              <span className="md:hidden">
                C<span className="text-accent">.</span>L
              </span>
              <span className="hidden md:inline">
                Christophe<span className="text-accent">.</span>
              </span>
            </h1>
          </Link>
          <MobileNav />
        </div>

        {/* Desktop layout */}
        <div className="hidden xl:flex items-center justify-between">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Christophe<span className="text-accent">.</span>
            </h1>
          </Link>
          <div className="flex items-center gap-8">
            <Nav />
            <Link href="/contact">
              <Button>Hire me</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
