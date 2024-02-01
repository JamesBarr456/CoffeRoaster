import { NavLink } from "react-router-dom";
import { Button } from "../../common/Button";
import { Works } from "../static/Data";

export const HowItWork = () => {
  return (
    <section className="container mx-auto mb-32 flex flex-col items-center px-6 md:items-start lg:pl-20 lg:pr-36">
      <h1 className="mb-20 text-center font-fraunces text-2xl text-light-gray">
        How it Works
      </h1>
      <div className="relative mb-8 flex flex-col gap-14 md:flex-row md:gap-8 lg:gap-20 xl:gap-24">
        <span className="md:absolute md:-top-8 md:left-0 md:h-px md:w-3/4 md:bg-light-pink "></span>
        {Works.map(({ id, sub, summary, title }) => (
          <div
            key={id}
            className="relative text-center md:text-start md:before:absolute md:before:-top-12 md:before:left-0 md:before:z-10 md:before:h-8 md:before:w-8 md:before:rounded-full md:before:border-2 md:before:border-light-cyan md:before:bg-white md:before:content-['']"
          >
            <span className="font-fraunces text-7xl text-light-pink">
              {sub}
            </span>
            <div className="mt-6">
              <h2 className="mb-6 font-fraunces text-3xl text-dark-gray-blue  md:w-48">
                {title}
              </h2>
              <p className="font-barlow text-[15px] xl:pr-10">{summary}</p>
            </div>
          </div>
        ))}
      </div>
      <Button classes="hover:scale-90">
        <NavLink to="/create">Create your plan</NavLink>
      </Button>
    </section>
  );
};
