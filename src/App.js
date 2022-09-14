import { useEffect } from 'react';
import Form from './FormComp';

function App() {

  useEffect( () => {
    document.title = 'urlShortner'
  })
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
