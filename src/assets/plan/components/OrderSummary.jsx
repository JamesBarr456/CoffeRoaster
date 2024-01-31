export const OrderSummary = ({ order }) => {
  const isCapsule = order.preferences === "Capsule";

  const orderInfo = [
    {
      label: isCapsule ? "I drink my coffee using " : "I drink my coffee as ",
      value: order.preferences,
    },
    { label: ", with a ", value: order.beanType },
    { label: " type of bean. ", value: order.quantity },
    {
      label: order.grindOption !== "Wholebean" && " ground ala ",
      value: order.grindOption,
    },
    { label: ", sent to me ", value: order.deliverie },
  ];

  const renderOrderInfo = () =>
    isCapsule ? orderInfo.slice(0, 3).concat(orderInfo.slice(4)) : orderInfo;

  const isAnyFieldEmpty = renderOrderInfo().some((info) => !info.value);

  return (
    <div className="flex flex-col items-center gap-20 lg:items-end">
      <div className="rounded-lg bg-dark-gray-blue px-6 py-10 md:px-14 lg:px-8 xl:px-16">
        <h3 className="mb-4 font-barlow uppercase text-light-gray">
          order summary
        </h3>
        <p className="font-fraunces text-2xl leading-loose text-white ">
          {renderOrderInfo().map((info, index) => (
            <span key={index}>
              {info.label && <span>{info.label} </span>}
              {info.value ? (
                <span className="text-light-cyan">{info.value}</span>
              ) : (
                <span className="text-light-cyan">_____</span>
              )}
            </span>
          ))}
          {`.”`}
        </p>
      </div>
      <button
        className={`rounded-md ${isAnyFieldEmpty && "opacity-50"} bg-light-cyan px-8 py-4 font-fraunces text-lg text-white`}
        disabled={isAnyFieldEmpty}
      >
        Create your plan
      </button>
    </div>
  );
};
