import { NavLink } from "react-router-dom";
import { Button } from "../../common/Button";

export const Banner = () => {
  return (
    <section className="container mx-auto  transition-all px-6">
      <div className="flex flex-col items-center gap-8 rounded-lg bg-banner-mobile bg-cover bg-no-repeat px-6 py-24 text-center md:items-start md:bg-banner-tablet md:px-14 md:py-28 md:text-start lg:bg-banner-desktop lg:px-20 lg:py-28">
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
        <Button classes="hover:scale-90">
          <NavLink to="/create">Create your plan</NavLink>
        </Button>
      </div>
    </section>
  );
};
