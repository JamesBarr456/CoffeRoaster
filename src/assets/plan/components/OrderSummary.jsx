export const OrderSummary = ({ order }) => {
  const orderInfo = [
    {
      label: order.preferences === "Capsule" ? "I drink my coffee using" : "I drink my coffee as",
      value: order.preferences,
    },
    { label: "with a", value: order.beanType },
    { label: "", value: order.quantity },
    { label: order.grindOption !== "Wholebean" ? "ground ala" : "", value: order.grindOption },
    { label: "sent to me", value: order.deliverie },
  ];

  return (
    <div className="rounded-lg bg-dark-gray-blue px-6 py-10 md:px-14 lg:px-8 xl:px-16">
      <h3 className="mb-4 font-barlow uppercase text-light-gray">
        order summary
      </h3>
      <p className="font-fraunces text-2xl leading-loose text-white ">
        {orderInfo.map((info, index) => (
          <span key={index}>
            {info.label && <span>{info.label} </span>}
            {info.value ? (
              <span className="text-light-cyan">{info.value}</span>
            ) : (
              <span className="text-light-cyan">_____</span>
            )}
            {index < orderInfo.length - 1 && <span>, </span>}
          </span>
        ))}
        {`.”`}
      </p>
    </div>
  );
};
