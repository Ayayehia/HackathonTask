// import "./App.css";
import Header from "./components/Header";
import InfoBlock from "./components/InfoBlock";
import Tabs from "./components/TeamTabs";
function App() {
  return (
    <main className="font-inter bg-[#080A16] px-8 lg:px-0">
      <Header />
      <div className="max-w-[880px] mx-auto">
        <InfoBlock />
        <Tabs />
      </div>
    </main>
  );
}

export default App;
