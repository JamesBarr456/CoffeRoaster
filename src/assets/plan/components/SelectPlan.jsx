import { Works } from "../../home/static/Data";

export const SelectPlan = () => {
  return (
    <section className="my-32  lg:container lg:mx-auto lg:px-6">
      <div className="rounded-md bg-dark-gray-blue md:pt-20 ">
        <div className="relative flex flex-col gap-14 px-6 py-20 md:flex-row md:gap-8 md:px-5 lg:gap-20 lg:px-20 xl:gap-24 ">
          <span className="md:absolute md:left-7 md:top-12 md:h-px md:w-[70%] md:bg-light-pink lg:left-20 lg:w-[65%]"></span>
          {Works.map(({ id, sub, summary, title }) => (
            <div
              key={id}
              className={`relative text-center md:text-start md:before:absolute md:before:-top-12 md:before:left-0 md:before:z-10 md:before:h-8 md:before:w-8 md:before:rounded-full md:before:border-2 md:before:border-light-cyan md:before:bg-dark-gray-blue md:before:content-['']`}
            >
              <span className="font-fraunces text-7xl text-light-pink">
                {sub}
              </span>
              <div className="mt-6">
                <h2 className="mb-6 font-fraunces text-3xl text-white md:w-48">
                  {title}
                </h2>
                <p className="font-barlow text-[15px] text-white/60 xl:pr-10">
                  {summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
