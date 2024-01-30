export const Banner = () => {
  return (
    <section className="container mx-auto  px-6">
      <div className="flex flex-col items-center gap-8 rounded-lg bg-banner-about-mobile bg-cover bg-no-repeat px-6 py-24 text-center md:items-start md:bg-banner-about-tablet md:px-14 md:py-28 md:text-start lg:bg-banner-about-desktop lg:px-20 lg:py-28">
        <h1
          className="font-fraunces text-2xl font-bold text-white md:w-2/3 md:text-3xl lg:w-1/2 xl:text-5xl
        "
        >
          About Us
        </h1>
        <p className="font-barlow text-[15px] text-white/70 md:w-2/3 lg:w-1/2 lg:text-base xl:w-2/5">
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </div>
    </section>
  );
};
