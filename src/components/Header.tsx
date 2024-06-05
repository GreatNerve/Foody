import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 sticky top-0 z-50 backdrop-blur-md bg-opacity-90 dark:bg-opacity-90">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link
              href={"/"}
              className="block text-teal-600 dark:text-teal-300"
            >
              <span className="text-lg md:text-2xl font-bold">Foody </span>
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href={"/"}
                  >
                    Home
                  </Link>
                </li>


                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href={"/catalog"}
                  >
                    Catalog
                  </Link>
                </li>
                <div className="flex items-center gap-2 text-sm">
                <li>
                <Link
                  className="rounded-md border-2 border-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500"
                  href={"/login"}
                >
                  Login
                </Link>
                </li>
                <li>
                <Link
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500/50"
                  href={"/signup"}
                >
                    Signup
                </Link>
                </li>
                </div>
              </ul>
            </nav>

            
          </div>
        </div>
      </div>
    </header>
  );
}
