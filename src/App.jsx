import { Suspense } from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import CardData from "./components/CardData";
import Action from "./components/Action";
import { useState } from "react";
import Footer from "./components/Footer";

const fetchCard = async () => {
  const res = await fetch("/Card.json");
  return res.json();
};

function App() {
  const cardPromise = fetchCard();

  const [selectedCards, setSelectedCards] = useState([]);
  const [resolvedCards, setResolvedCards] = useState([]);

  return (
    <>
      <Navbar></Navbar>
      <Banner
        selectedCount={selectedCards.length}
        resolvedCount={resolvedCards.length}
      ></Banner>

      <main className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        <div className="md:col-span-2">
          <Suspense
            fallback={
              <span className="loading loading-spinner text-error"></span>
            }
          >
            <CardData
              cardPromise={cardPromise}
              selectedCards={selectedCards}
              setSelectedCards={setSelectedCards}
            />
          </Suspense>
        </div>
        <div>
          <Action
            selectedCards={selectedCards}
            setSelectedCards={setSelectedCards}
            resolvedCards={resolvedCards}
            setResolvedCards={setResolvedCards}
          ></Action>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
