import "./App.css";
import CollectionCard from "./components/collectionCard/CollectionCard";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import SecondNav from "./components/SecondNav/SecondNav";
import Section from "./components/Section/Section";
import FeaturedCard from "./components/FeaturedCards/FeaturedCard";
import Footer from "./components/Footer/Footer";
import BottomNav from "./components/BottomNav/BottomNav";


function App() {
  return (
    <div>
      <Navbar />
      <SecondNav />
      <Main />
      <Section />
      <FeaturedCard />
      <CollectionCard />
      <Footer />
      <BottomNav />
    </div>
  );
}

export default App;
