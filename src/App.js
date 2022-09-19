import Sidebar from "./components/Sidebar.js";
import Reviews from "./components/Reviews.js";
import Rating from "./components/Rating.js";
import Analysis from "./components/Analysis.js";
import Visitors from "./components/Visitors.js";
import './App.css';

function App() {
  return (
  <div className="container1">
    <div className="container2">
   <Sidebar/>
   <Reviews/>
   <Rating/>
   <Analysis/>
   <Visitors/>
   </div>
   </div>
  );
}

export default App;
