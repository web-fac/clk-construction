import Link from "next/link";
import Image from "next/image";

function TopBar() {
  return (
    <header className="fg-container flex items-center mx-auto h-14">
      <div className="flex flex-col justify-center relative w-40 h-16">
        <Image
          src="/clk-construction-cropped.png"
          alt="CLK Construction"
          fill
          objectFit="contain"
        />
      </div>
      {/* <span className="text-2xl font-bold">CLK Construction</span> }
       */}
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-md font-medium hover:underline underline-offset-4"
          href="#services"
        >
          Services
        </Link>
        <Link
          className="text-md font-medium hover:underline underline-offset-4"
          href="#gallery"
        >
          Gallery
        </Link>
        <Link
          className="text-md font-medium hover:underline underline-offset-4"
          href="#contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default TopBar;
