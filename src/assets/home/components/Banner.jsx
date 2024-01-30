export const Banner = () => {
  return (
    <section className="container mx-auto  px-6">
      <div className="md:bg-banner-tablet flex flex-col items-center gap-8 rounded-lg bg-banner-mobile bg-cover bg-no-repeat px-6 py-24 text-center md:items-start md:px-14 md:py-28 md:text-start lg:bg-banner-desktop lg:px-20 lg:py-28">
        <h1
          className="font-fraunces text-4xl font-bold text-white md:w-2/3 md:text-5xl lg:w-1/2 xl:text-7xl
        "
        >
          Great coffee made simple.
        </h1>
        <p className="font-barlow text-[15px] text-white/70 md:w-2/3 lg:w-1/2 lg:text-base xl:w-2/5">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <button className="rounded-md bg-light-cyan px-8 py-4  font-fraunces text-lg text-white">
          Create your plan
        </button>
      </div>
    </section>
  );
};
