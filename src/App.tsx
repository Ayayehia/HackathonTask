// import "./App.css";
import Header from "./components/Header";
import TitleDescriptionSection from "./components/TitleDescriptionSection";
import Tabs from "./components/TeamTabs";
function App() {
  return (
    <main className=" pl-[25%] sm:ml-8">
      <Header />
      <TitleDescriptionSection />
      <Tabs />
    </main>
  );
}

export default App;
