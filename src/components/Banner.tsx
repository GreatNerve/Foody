export default function Banner({ img }: { img: string }) {
  return (
    <section
      className={`h-[calc(100vh-4rem-1px)] relative bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${img})` }}
    >
          <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-5 mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Let us find your
            <strong className="block font-extrabold text-rose-700">
              {" "}
              Food Forever.{" "}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            The perfect meal is waiting for you. Let us help you find it. We
            have a wide range of options to choose from. We are sure you will
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center justify-center sm:justify-start">
            <a
              href="#"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
                Order Now
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
                Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
