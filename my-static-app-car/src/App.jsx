import Nav from "./components/Nav";
import { background } from "./assets";
import Typewriter from "./utils/typewriter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray-800 font-roboto">
      <Nav />
      <div>
        <h1 className="text-center text-white absolute top-80 left-2/3 transform -translate-x-1/2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal">
          Welcome to <Typewriter text="My Car Website" delay={100} />
        </h1>
        <img src={background} alt="Car" />
      </div>
      <Footer />
    </div>
  );
};
export default App;
