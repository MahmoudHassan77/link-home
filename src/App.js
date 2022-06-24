import style from './App.module.scss';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import ThingsWeDo from './pages/ThingsWeDo/ThingsWeDo';

function App() {
  return (
    <div className={style.App}>
      <Home />
      <ThingsWeDo />
      <News />
      <Footer />
    </div>
  );
}

export default App;
