import HelloWorldClass from './components/HelloWorldClass';
import HelloWorldFunctional from './components/HelloWorldFunctional';

function App() {
  const name1 = 'Anna';
  const name2 = 'Billy';

  return (
    <div>
      <HelloWorldFunctional name={name1} />
      <HelloWorldClass name={name2} />
    </div>
  );
}

export default App;
