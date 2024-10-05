import Link from "next/link";

function Footer() {
  return (
    // <header className="fg-container flex items-center mx-auto h-14">
    //   <Link className="flex items-center justify-center" href="">
    //     <span className="text-2xl font-bold">CLK Construction</span>
    //   </Link>
    //   <nav className="ml-auto flex gap-4 sm:gap-6">
    //     <Link
    //       className="text-md font-medium hover:underline underline-offset-4"
    //       href="#services"
    //     >
    //       Services
    //     </Link>
    //     <Link
    //       className="text-md font-medium hover:underline underline-offset-4"
    //       href="#gallery"
    //     >
    //       Gallery
    //     </Link>
    //     <Link
    //       className="text-md font-medium hover:underline underline-offset-4"
    //       href="#contact"
    //     >
    //       Contact
    //     </Link>
    //   </nav>
    // </header>
    <footer className="bg-container bg-primary">
      <div className="fg-container  flex items-center mx-auto h-14">
        <div className="text-primary-foreground">CLK Construction</div>
      </div>
    </footer>
  );
}

export default Footer;
