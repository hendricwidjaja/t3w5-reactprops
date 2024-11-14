// import logo from '../logo.svg';
import '../stylesheets/App.css';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FoodList from '../components/FoodList.jsx';

function App() {
  return (
    <div className="App">
        <Header />
        <FoodList />
        <Footer />
    </div>
  );
}

export default App;
