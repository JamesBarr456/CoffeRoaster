import { CardList } from "../static/Data";
import { Card } from "./Card";
export const WhyUs = () => {
  return (
    <section className="container mx-auto mb-32 px-6">
      <div className="relative px-6 pt-16 md:px-14">
        <span className="absolute left-0 top-0 -z-10 h-3/5 w-full rounded-md bg-dark-indigo lg:h-3/4"></span>
        <div className="mb-16 flex flex-col items-center gap-6 text-center">
          <h1 className="font-fraunces text-3xl text-white">Why choose us?</h1>
          <p className="text-sm text-white/60 md:px-12 lg:w-2/3 xl:w-1/2">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
        <div className="flex flex-col  gap-6 lg:flex-row">
          <Card objeto={CardList} />
        </div>
      </div>
    </section>
  );
};
