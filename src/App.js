import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ExchangeRatesContainer from './components/ExchangeRates/ExchangeRatesContainer';

// function App() {
//   return (
//     <div className='app-wrapper'>
//       <Header />
//       <div className='app-wrapper-content'>
//         <Routes>
//           <Route path='/' element=<Home /> />
//         </Routes>
//       </div>
//       <Footer />
//     </div>
//   );
// }

const App = (props) => {
  return (
    <ExchangeRatesContainer />
  )
}

export default App;
