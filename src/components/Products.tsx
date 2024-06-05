import Image from 'next/image'
export default function Products() {
    return (
      <section className="bg-gray-50">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header className="text-center">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Our Catalog of Products</h2>
  
        <p className="mx-auto mt-4 max-w-md text-gray-500">
          We have a wide range of dishes to choose from. Here are some of our most popular dishes.
        </p>
      </header>
  
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <li>
          <a href="#" className="group block overflow-hidden">
            <Image unoptimized  width={1470} height={1470}
              src="https://plus.unsplash.com/premium_photo-1679434137779-8a824574bbb8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="object-cover transition duration-500 group-hover:scale-105 w-full aspect-square"
            />
  
            <div className="relative bg-white pt-3  px-4 py-3">
              <h3 className="text-lg md:text-2xl text-gray-900 font-bold group-hover:underline group-hover:underline-offset-4">
                Burger & Fries
              </h3>
  
              <p className="mt-2">
                <span className="sr-only"> Regular Price </span>
  
                <span className="tracking-wider text-base md:text-lg text-gray-900"> ₹ 500.00 </span>
              </p>
            </div>
          </a>
        </li>
  
        <li>
          <a href="#" className="group block overflow-hidden">
            <Image unoptimized  width={1470} height={1470}
              src="https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="object-cover transition duration-500 group-hover:scale-105 w-full aspect-square"
            />
  
            <div className="relative bg-white pt-3  px-4 py-3">
              <h3 className="text-lg md:text-2xl text-gray-900 font-bold group-hover:underline group-hover:underline-offset-4">
                Ice Cream
              </h3>
  
              <p className="mt-2">
                <span className="sr-only"> Regular Price </span>
  
                <span className="tracking-wider text-base md:text-lg text-gray-900"> ₹ 100.00 </span>
              </p>
            </div>
          </a>
        </li>
  
        <li>
          <a href="#" className="group block overflow-hidden">
            <Image unoptimized  width={1470} height={1470}
              src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="object-cover transition duration-500 group-hover:scale-105 w-full aspect-square"
            />
  
            <div className="relative bg-white pt-3 px-4 py-3">
              <h3 className="text-lg md:text-2xl text-gray-900 font-bold group-hover:underline group-hover:underline-offset-4">
                Tortia & Fruits
              </h3>
  
              <p className="mt-2">
                <span className="sr-only"> Regular Price </span>
  
                <span className="tracking-wider text-base md:text-lg text-gray-900"> ₹ 1000.00 </span>
              </p>
            </div>
          </a>
        </li>
  
        <li>
          <a href="#" className="group block overflow-hidden">
            <Image unoptimized  width={1470} height={1470}
              src="https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="object-cover transition duration-500 group-hover:scale-105 w-full aspect-square"
            />
  
            <div className="relative bg-white pt-3  px-4 py-3">
              <h3 className="text-lg md:text-2xl text-gray-900 font-bold group-hover:underline group-hover:underline-offset-4">
                Sandwich & Fries
              </h3>
  
              <p className="mt-2">
                <span className="sr-only"> Regular Price </span>
  
                <span className="tracking-wider text-base md:text-lg text-gray-900"> ₹ 500.00 </span>
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="#" className="group block overflow-hidden">
            <Image unoptimized  width={1470} height={1470}
              src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="object-cover transition duration-500 group-hover:scale-105 w-full aspect-square"
            />
  
            <div className="relative bg-white pt-3  px-4 py-3">
              <h3 className="text-lg md:text-2xl text-gray-900 font-bold group-hover:underline group-hover:underline-offset-4">
                Chocolate Shake
              </h3>
  
              <p className="mt-2">
                <span className="sr-only"> Regular Price </span>
  
                <span className="tracking-wider text-base md:text-lg text-gray-900"> ₹ 2000.00 </span>
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="#" className="group block overflow-hidden">
            <Image unoptimized  width={1470} height={1470}
              src="https://images.unsplash.com/photo-1556040220-4096d522378d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="object-cover transition duration-500 group-hover:scale-105 w-full aspect-square"
            />
  
            <div className="relative bg-white pt-3  px-4 py-3">
              <h3 className="text-lg md:text-2xl text-gray-900 font-bold group-hover:underline group-hover:underline-offset-4">
                Rammen & Noodles
              </h3>
  
              <p className="mt-2">
                <span className="sr-only"> Regular Price </span>
  
                <span className="tracking-wider text-base md:text-lg text-gray-900"> ₹ 800.00 </span>
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
    )
  }
  