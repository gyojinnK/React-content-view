import "./App.css";
import topPUI from "./assets/images/topPhoneUI.png";
import Header from "./components/layouts/Header.tsx";

const App: React.FC = () => {
    return (
        <div className="mainWrap">
            <img src={topPUI} alt="topUI" />
            <Header />
        </div>
    );
};

export default App;
