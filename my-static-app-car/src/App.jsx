import Nav from "./components/Nav";
import { background } from "./assets";
import Typewriter from "./utils/typewriter";

const App = () => {
  return (
    <div className="bg-slate-900">
      <Nav />
      <div>
        <h1 className="text-center text-white absolute top-80 left-1/2 text-6xl font-normal">
          Welcome to <Typewriter text="My Car Website" delay={100} />
        </h1>
        <img src={background} alt="Car" />
      </div>
    </div>
  );
};
export default App;
