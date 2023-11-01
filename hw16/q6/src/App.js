import "./App.css";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div className='app'>
      <Counter initialValue={0} />
      <Counter initialValue={5} />
      <Counter initialValue={10} />
      <Counter initialValue={15} />
      <Counter initialValue={20} />
    </div>
  );
};

export default App;
