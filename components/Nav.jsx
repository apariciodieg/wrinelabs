import Link from "next/link";

const Nav = () => {
  return (
    <header className="fixed top-0 w-full backdrop-filter backdrop-blur-lg">
    <div className="flex items-center justify-between mx-auto w-[90%] h-20  ">
      <h1 className="text-xl font-semibold tracking-tighter sm:text-2xl text-slate-800">
        Wrine Labs
      </h1>
      <nav className="flex items-center space-x-6 text-sm font-semibold sm:text-lg text-slate-800">
        <Link href="">
          <a className="hover:text-blue-400">Home</a>
        </Link>
        <Link href="">
          <a className=" hover:text-blue-400">Solutions</a>
        </Link>
        <Link href="">
          <a className=" hover:text-blue-400">Plans</a>
        </Link>
        <Link href="">
          <a className=" hover:text-blue-400">Contact</a>
        </Link>
      </nav>
    </div>
    </header>
  );
};

export default Nav;
