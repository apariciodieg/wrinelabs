import Link from "next/link";

const Nav = () => {
  return (
    <header className="fixed top-0 z-40 w-full backdrop-filter backdrop-blur-lg">
    <div className="flex items-center justify-between mx-auto w-[90%] h-20  ">
      <h1 className="text-xl font-semibold tracking-tighter sm:text-2xl text-slate-800">
        Wrine Labs
      </h1>
      <nav className="flex items-center space-x-6 font-semibold text-md sm:text-lg text-slate-800 ">
        <Link href="">
          <a className="duration-200 hover:text-indigo-500">Home</a>
        </Link>
        <Link href="">
          <a className="duration-200 hover:text-indigo-500">Solutions</a>
        </Link>
        <Link href="">
          <a className="duration-200 hover:text-indigo-500">Plans</a>
        </Link>
        <Link href="">
          <a className="duration-200 hover:text-indigo-500">Contact</a>
        </Link>
      </nav>
    </div>
    </header>
  );
};

export default Nav;
