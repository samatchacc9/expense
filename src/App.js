import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './layout/header/Header';
import Footer from './layout/Footer';
import Content from './layout/Content';
import MainContainer from './layout/MainContainer';

function App() {
  return (
    <BrowserRouter>
      <MainContainer>
        <Header />
        <Content>
          <Switch>
            <Route path='/create-transaction' component={CreateTransaction} />
            <Route path='/' component={Home} />
          </Switch>
        </Content>
        <Footer />
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
