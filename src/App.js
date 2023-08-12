import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import HeadingCard from "./components/HeadingCard"
import Food from "./components/Food";
import Category from "./components/Category";

export default function App() {
    return (
      <div>
        <Navbar />
        <Hero />
        <HeadingCard />
        <Food />
        <Category />
      </div>
    )
  }