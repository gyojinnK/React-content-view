import "./App.css";
import topPUI from "./assets/topPhoneUI.png";
import Header from "./components/header/Header.tsx";

const App: React.FC = () => {
    return (
        <div className="mainWrap">
            <img src={topPUI} alt="topUI" />
            <Header />
        </div>
    );
};

export default App;
