export const Banner = () => {
  return (
    <section className="container mx-auto  px-6">
      <div className="bg-blackcup-movil md:bg-blackcup-tablet lg:bg-blackcup-desktop flex flex-col items-center gap-8 rounded-lg bg-cover bg-no-repeat px-6 py-24 text-center md:items-start md:px-14 md:py-28 md:text-start lg:px-20 lg:py-28">
        <h1 className="font-fraunces text-4xl font-bold text-white md:w-2/3 md:text-5xl lg:w-1/2 xl:text-7xl">
          Create a plan
        </h1>
        <p className="font-barlow text-[15px] text-white/70 md:w-2/3 lg:w-1/2 lg:text-base xl:w-2/5">
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </div>
    </section>
  );
};
