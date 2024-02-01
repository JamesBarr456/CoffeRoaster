import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { TextSummary } from "./TextSummary";
import { Button } from "../../common/Button";

export const ModalProduct = ({ isOpen, orderInfo, onOpenChange }) => {
  return (
    <Modal
      backdrop="opaque"
      isOpen={isOpen}
      placement="center"
      onOpenChange={onOpenChange}
      classNames={{
        base: "mx-6",
        body: "py-6 md:p-10",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="bg-dark-gray-blue py-7 font-fraunces text-3xl text-white">
              Order Summary
            </ModalHeader>
            <ModalBody>
              <p className="font-fraunces text-2xl leading-loose text-light-gray ">
                <TextSummary orderInfo={orderInfo} />
              </p>
              <p className="font-barlow text-[15px] leading-loose text-dark-gray-blue">
                Is this correct? You can proceed to checkout or go back to plan
                selection if something is off. Subscription discount codes can
                also be redeemed at the checkout.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose} classes="w-full md:w-1/2 relative">
                Checkout
                <span className="md:absolute md:left-0  md:top-0 md:w-full md:-translate-x-[100%] md:translate-y-1/3 md:text-3xl md:text-dark-gray-blue">
                  $19.20 / mo
                </span>
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
