import { AccordionItems } from "./AccordionItems";
import { optionsNavigation } from "../static/Data";
import { OrderSummary } from "./OrderSummary";
import { useState } from "react";

export const Accordion = () => {
  const [orderState, setOrderState] = useState({
    preferences: "",
    beanType: "",
    quantity: "",
    grindOption: "",
    deliverie: "",
  });
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const addOrder = (name, value) => {
    setOrderState({ ...orderState, [name]: value });
  };
  return (
    <section className="container mx-auto mb-32 px-6">
      <div className="lg:flex lg:gap-24 xl:gap-32  xl:px-20">
        <div className="hidden lg:flex lg:flex-col">
          {optionsNavigation.map(({ number, title, href }, index) => (
            <a
              href={`#${href}`}
              key={index}
              onClick={() => handleLinkClick(index)}
              className={`border-b border-light-gray py-6 font-fraunces text-2xl text-dark-gray-blue ${
                activeLink === index
                  ? "opacity-100"
                  : "opacity-45 hover:opacity-70"
              } lg:w-64`}
            >
              <span className="mr-7 text-light-cyan">{number}</span>
              {title}
            </a>
          ))}
        </div>
        <div className="flex w-full flex-col items-center gap-12 lg:gap-20">
          <AccordionItems addOrder={addOrder} />
          <OrderSummary order={orderState} />
        </div>
      </div>
    </section>
  );
};
