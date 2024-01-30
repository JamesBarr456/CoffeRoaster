import { Collections } from "../static/Data";

export const Collection = () => {
  return (
    <section className="lg container relative mx-auto px-6 py-32 md:px-28 lg:px-0 lg:py-52 xl:px-28">
      <h1 className="absolute left-0 top-14 -z-10 w-full  bg-gradient-to-b from-light-gray to-light-gray/5 bg-clip-text text-center font-fraunces text-[40px] text-transparent md:top-16 md:text-8xl md:tracking-wider lg:top-28 lg:text-[150px]">
        our collection
      </h1>
      <div className="flex flex-col gap-12 lg:flex-row">
        {Collections.map((coffe) => (
          <div
            key={coffe.id}
            className="flex flex-col items-center gap-6 md:flex-row  lg:flex-col"
          >
            <img
              className="h-40 w-48 md:h-48 md:w-64"
              src={coffe.imgUrl}
              alt={coffe.title}
            />
            <div className="text-center md:text-start lg:text-center ">
              <h1 className="mb-4 font-fraunces text-2xl text-dark-gray-blue md:mb-6">
                {coffe.title}
              </h1>
              <p className="font-barlow text-[15px] text-dark-gray-blue">
                {coffe.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
