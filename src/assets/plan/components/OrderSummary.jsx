import { ModalProduct } from "./ModalProduct";
import { TextSummary } from "./TextSummary";
import { useDisclosure } from "@nextui-org/react";
import { Button } from "../../common/Button";

export const OrderSummary = ({ order }) => {
  const isCapsule = order.preferences === "Capsule";
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const orderInfo = [
    {
      label: isCapsule ? "“I drink my coffee using " : "“I drink my coffee as ",
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
          <TextSummary orderInfo={renderOrderInfo} />
        </p>
      </div>
      <Button onClick={onOpen} disabled={isAnyFieldEmpty}>
        Create your plan
      </Button>
      <ModalProduct
        isOpen={isOpen}
        orderInfo={renderOrderInfo}
        onOpenChange={onOpenChange}
      />
    </div>
  );
};
