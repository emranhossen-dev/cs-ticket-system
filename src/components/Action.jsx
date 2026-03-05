import React from "react";

const Action = ({
  selectedCards,
  setSelectedCards,
  resolvedCards,
  setResolvedCards,
}) => {
  const handleComplete = (card) => {
    setSelectedCards((prev) => prev.filter((c) => c.id !== card.id));
    setResolvedCards((prev) => [...prev, card]);
  };

  return (
    <div className="flex flex-col items-start">
      <h2 className="text-2xl w-full pl-1 text-black my-1 font-semibold">
        Selected Tasks
      </h2>
      {!selectedCards || selectedCards.length === 0 ? (
        <div className="text-black my-2 w-full">
          <p>Select a ticket to add to Task Status.</p>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-1 mt-4">
          {selectedCards.map((card) => (
            <div
              key={card.id}
              className="w-full flex flex-col bg-white rounded-md text-black mb-2 p-2"
            >
              <h1 className="text-[#001931] text-left text-lg font-medium p-4">
                {card.title}
              </h1>
              <button
                className="w-11/12 mx-auto rounded-lg border-none text-base btn bg-[#02A53B] text-white font-semibold p-4 mt-2 mb-4"
                onClick={() => handleComplete(card)}
              >
                Complete
              </button>
            </div>
          ))}
        </div>
      )}

      <h2 className="text-2xl w-full pl-1 text-black my-3 font-semibold mt-10">
        Resolved Tasks
      </h2>
      {!resolvedCards || resolvedCards.length === 0 ? (
        <div className="text-black my-5 w-full">
          <p>No resolved tasks yet.</p>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-2">
          {resolvedCards.map((card) => (
            <div
              key={card.id}
              className="w-full bg-[#E0E7FF] shadow-sm p-4 rounded-md mb-2 text-lg font-medium text-black"
            >
              {card.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Action;
