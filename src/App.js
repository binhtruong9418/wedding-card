import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import { store } from './redux/store';



const WrappedStyled = styled.div`
    background-color: #9ED2C6;
    width: 100vw;
    min-height: 100vh;    
`

function App() {
  return (
    <WrappedStyled>
      <BrowserRouter>
          <AuthProvider>
            <Provider store={store} >
              <Routes>
                <Route path='login' element={ <Login /> } />
                <Route path='/' element={ <Home /> } />
              </Routes>
            </Provider>
          </AuthProvider>
        </BrowserRouter>
    </WrappedStyled>
  );
}

export default App;
