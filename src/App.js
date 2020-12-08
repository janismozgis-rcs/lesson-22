import HelloWorldClass from './components/HelloWorldClass';
import HelloWorldFunctional from './components/HelloWorldFunctional';
import Counter from './components/Counter';
import Changer from './components/Changer';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Atm from './components/Atm'
import Show from './components/Show'
import FancyInput from './components/FancyInput';


function App() {
  const name1 = 'Anna';
  const name2 = 'Billy';

  return (
    <div>
      <HelloWorldFunctional name={name1} />
      <HelloWorldClass name={name2} />
      <Counter />
      <Changer />
      <Task1 />
      <Task2 />
      <Atm />
      <Show />
      <FancyInput />
    </div>
  );
}

export default App;
