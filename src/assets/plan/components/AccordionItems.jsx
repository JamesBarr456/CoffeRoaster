import { Accordion, AccordionItem } from "@nextui-org/react";
import { useState } from "react";
import { optionsCarrousel, Arrow } from "../static/Data";

export const AccordionItems = ({ addOrder }) => {
  const [selectedItems, setSelectedItems] = useState({});
  const [activeCapsule, setActiveCapsule] = useState(false);

  const verifCapsule = (item) => {
    if (item === "Capsule") {
      setActiveCapsule(true);
    } else if (item === "Filter" || item === "Espresso") {
      setActiveCapsule(false);
    }
  };
  const handleItemClick = (ancla, sub, index) => {
    verifCapsule(sub);
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [ancla]: index,
    }));
    addOrder(ancla, sub);
  };

  const itemClasses = {
    title:
      "w-4/5 lg:w-full transition-all xl:mr-20 font-fraunces text-2xl lg:text-3xl xl:text-[40px] text-light-gray",
    indicator: "data-[open=true]:-rotate-180",
  };

  return (
    <>
      {optionsCarrousel.map(({ ancla, title, options }, accordionIndex) => (
        <Accordion disabledKeys={activeCapsule && ["3"]} itemClasses={itemClasses} key={accordionIndex}>
          <AccordionItem
            aria-label={`Accordion ${accordionIndex}`}
            title={title}
            key={accordionIndex}
            id={ancla}
            indicator={<Arrow />}
          >
            <div className="flex flex-col gap-4 md:flex-row">
              {options.map(({ sub, summary }, cardIndex) => (
                <div
                  onClick={() => handleItemClick(ancla, sub, cardIndex)}
                  key={cardIndex}
                  className={`cursor-pointer rounded-lg p-6 md:pb-20 md:pt-8 ${
                    selectedItems[ancla] === cardIndex
                      ? "bg-light-cyan text-white"
                      : "bg-white-light text-dark-gray-blue hover:bg-light-pink"
                  }`}
                >
                  <h2 className="mb-2 font-fraunces text-2xl ">{sub}</h2>
                  <p className="font-barlow text-base ">{summary}</p>
                </div>
              ))}
            </div>
          </AccordionItem>
        </Accordion>
      ))}
    </>
  );
};
