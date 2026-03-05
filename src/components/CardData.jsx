import { useEffect, useState } from "react";
import vectorImg from "../assets/vector.png";

const CardData = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch("/Card.json")
      .then((res) => res.json())
      .then((data) => setCardData(data));
  }, []);

  return (
    <>
      <h2 className="text-2xl w-full pl-1 text-black my-3 font-semibold">
        Customer Tickets
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3 mb-10">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="card w-full shadow-sm px-3 py-5 bg-white cursor-pointer"
          >
            <div className="cardTitle flex justify-between items-center text-[#001931]">
              <h2 className="text-lg font-semibold my-4">{card.title}</h2>

              <div className="statusbtn inline-flex items-center gap-2 bg-[#B9F8CF] rounded-2xl px-5 py-2">
                <span className="w-3 h-3 rounded-full bg-[#02A53B]"></span>
                <span className="text-[#0B5E06] font-semibold text-sm">
                  {card.status}
                </span>
              </div>
            </div>

            <div className="text-justify text-[#627382] mb-2">
              {card.description}
            </div>

            <div className="text-sm flex justify-between items-center text-[#627382] gap-3">
              <div className="flex items-center gap-2">
                <p>{card.id}</p>
                <p className="font-medium">{card.priority}</p>
              </div>

              <div className="flex items-center gap-2">
                <p>{card.customer}</p>
                <img src={vectorImg} alt="" />
                <p>{card.createdAt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardData;