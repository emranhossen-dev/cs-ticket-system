import Banner from "./Banner";
import Navbar from "./Navbar";
import Footer from "./components/Footer";

const fetchCard = async () => {
  const res = await fetch("/Card.json");
  return res.json();
};


function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Banner
        
      ></Banner>

      <main>
      
        
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
