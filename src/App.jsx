import Banner from "./Banner";
import Navbar from "./Navbar";
import CardData from "./components/CardData";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <main className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        <div className="md:col-span-2">
          <CardData></CardData>
        </div>

        <div></div>
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;