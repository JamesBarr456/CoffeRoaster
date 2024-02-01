import { LocateUs } from "../static/Data";
export const OurHeadquarters = () => {
  return (
    <section className="container mx-auto mb-32 px-6 transition-all">
      <div className="lg:px-20">
        <h1 className="mb-20 text-center font-fraunces text-2xl text-light-gray md:text-start">
          Our headquarters
        </h1>
        <div className="flex flex-col gap-20 md:flex-row lg:gap-24">
          {LocateUs.map(
            ({ id, locationMap, alt, city, street, town, code, phone }) => (
              <div
                key={id}
                className="flex  flex-col items-center gap-6 text-center md:items-start md:text-start xl:w-1/2"
              >
                <img className="mb-5" src={locationMap} alt={alt} />
                <h1 className="font-fraunces text-3xl text-dark-gray-blue">
                  {city}
                </h1>
                <div className="flex  flex-col gap-2 font-barlow text-[15px] text-dark-gray-blue">
                  <span>{street}</span>
                  <span>{town}</span>
                  <span>{code}</span>
                  <span>{phone}</span>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};
