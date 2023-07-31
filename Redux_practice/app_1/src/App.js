import logo from './logo.svg';
import './App.css';
import { Container } from 'reactstrap';
import ChangeCounter from './component/ChangeCounter';

import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
 
    <>
      <Provider store={store}>
        <Container >
          <ChangeCounter/>
        </Container>
        
      </Provider>
    </>
    
    
  );
}

export default App;
