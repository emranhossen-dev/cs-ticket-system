import React, { use } from "react";
import vectorImg from "../assets/vector.png";

const CardData = ({ cardPromise, selectedCards, setSelectedCards }) => {  
  const cardData = use(cardPromise);
  console.log(cardData);
  
  const availableCards = cardData.filter(
  (card) => !selectedCards.find((selected) => selected.id === card.id)
);

  return (
    <>
      <h2 className="text-2xl w-full pl-1 text-black my-3 font-semibold">
        Customer Tickets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3 mb-10">
        {availableCards.map((card) => (  
          <div 
            key={card.id}
            className="card w-full shadow-sm my-0 px-3 py-5 bg-white cursor-pointer"
            onClick={() => setSelectedCards((prev) => [...prev, card])}
          >
            <div className="cardTitle flex justify-between items-center bg-white text-[#001931] py-0 my-0">
              <h2 className="text-lg font-semibold my-4">{card.title}</h2>
              <div className="statusbtn inline-flex items-center gap-2 bg-[#B9F8CF] rounded-2xl px-5 py-2">
                <span className="w-3 h-3 rounded-full bg-[#02A53B]"></span>
                <span className="text-[#0B5E06] font-semibold text-sm">
                  {card.status}
                </span>
              </div>
            </div>
            <div className="descript text-justify text-[#627382] mb-2 py-0 my-0">
              {card.description}
            </div>
            <div className="cardFooter text-sm flex justify-between items-center text-[#627382] gap-3">
              <div className="leftsection flex justify-between items-center gap-2">
                <p className="id">{card.id}</p>
                <p className="priority font-medium">{card.priority}</p>
              </div>
              <div className="rightsec flex justify-between items-center gap-2">
                <p className="customerName">{card.customer}</p>
                <img className="" src={vectorImg} alt="" />
                <p className="date">{card.createdAt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardData;
