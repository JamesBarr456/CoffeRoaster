export const Commitment = () => {
  return (
    <section className="container mx-auto my-32 flex flex-col gap-12 px-6 md:flex-row md:gap-20 lg:gap-32 xl:px-24">
      <div className="h-[400px] rounded-lg bg-barista-movil bg-cover bg-no-repeat md:h-[470px] md:w-[281px] md:bg-barista-tablet lg:h-[520px] lg:w-[445px] lg:bg-barista-desktop"></div>
      <div className="text-center md:w-1/2 md:py-12 md:text-start lg:w-2/5 lg:py-24">
        <h1 className="mb-8 font-fraunces text-3xl text-dark-gray-blue">
          Our commitment
        </h1>
        <p className="font-barlow text-[15px] text-dark-gray-blue">
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </div>
    </section>
  );
};
