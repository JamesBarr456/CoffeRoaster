export const Card = ({ objeto }) => {
  return (
    <>
      {objeto.map(({ id, title, summary, imgUrl }) => (
        <div
          key={id}
          className="flex flex-col items-center gap-14 rounded-md bg-light-cyan px-3 py-14 md:flex-row md:px-16 md:py-10
          lg:flex-col"
        >
          <img src={imgUrl} alt={title} />
          <div className="flex flex-col gap-6  text-center md:text-start lg:text-center">
            <h2 className="font-fraunces text-2xl text-white">{title}</h2>
            <p className="px-5 font-barlow text-[15px] text-white/60 md:px-0">
              {summary}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
