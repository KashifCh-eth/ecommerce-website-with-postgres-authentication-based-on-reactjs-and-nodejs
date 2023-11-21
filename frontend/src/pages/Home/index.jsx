import BuySteps from "../../components/BuyStepsCard/BuySteps.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Fproduct from "../../components/Fproduct/Fproduct.jsx";
import Hero from "../../components/Hero/Hero.jsx";

const HOME = () => {
  return (
    <>
      <div className="scroll-smooth focus:scroll-auto"> 
     
        <Hero />
        <Fproduct />
        <BuySteps />
        <Footer />
      </div>
    </>
  );
};

export default HOME;
