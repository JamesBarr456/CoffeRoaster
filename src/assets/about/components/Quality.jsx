export const Quality = () => {
  return (
    <section className="container mx-auto mb-32 px-6 transition-all">
      <div className="relative flex flex-col items-center gap-16 px-6 before:absolute before:bottom-0 before:left-0 before:-z-10 before:h-[87%]  before:w-full before:rounded-md before:bg-dark-indigo before:content-[''] md:px-16 md:before:h-[75%] lg:flex-row lg:items-end  lg:pb-20 lg:before:h-[85%] xl:px-20">
        <div className="h-40 w-full rounded-md bg-coffeHand-movil bg-cover bg-no-repeat md:h-80 md:bg-coffeHand-tablet lg:order-2 lg:h-[474px]  lg:w-[445px] lg:bg-coffeHand-desktop "></div>
        <div className="text-center md:px-7 lg:order-1 lg:w-1/2 lg:px-5 lg:text-start xl:pb-10">
          <h1 className="mb-6 font-fraunces text-3xl text-white ">
            Uncompromising quality
          </h1>
          <p className="mb-16 font-barlow text-[15px] text-white/60">
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
      </div>
    </section>
  );
};
