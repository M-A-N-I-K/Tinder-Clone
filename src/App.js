import './App.css';
import Header from './Header';
import Swipebuttons from './Swipebuttons';
import Swipecards from './Swipecards';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* SwipeCards */}
      <Swipecards />
      {/* SwipeButtons */}
      <Swipebuttons />
    </div>
  );
}

export default App;
