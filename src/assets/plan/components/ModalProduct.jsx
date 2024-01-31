import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter} from "@nextui-org/react";
import { TextSummary } from "./TextSummary";

export const ModalProduct = ({ isOpen, orderInfo, onOpenChange }) => {
  return (
    <Modal backdrop="opaque" isOpen={isOpen} placement="center" onOpenChange={onOpenChange} classNames={{
      base: "mx-6",
      body: "py-6 md:p-10",
     
    }} >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="text-3xl font-fraunces py-7 text-white bg-dark-gray-blue">Order Summary</ModalHeader>
            <ModalBody>
              <p className="font-fraunces text-2xl leading-loose text-light-gray ">
                <TextSummary orderInfo={orderInfo} />
              </p>
              <p className="text-[15px] font-barlow leading-loose text-dark-gray-blue">
                Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout.
              </p>
            </ModalBody>
            <ModalFooter>
              <button onClick={onClose} className="rounded-md w-full bg-light-cyan px-6 py-4  font-fraunces text-lg text-white">
                Checkout <span>$19.20 / mo</span>
              </button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

