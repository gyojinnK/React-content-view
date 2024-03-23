import "./App.css";
import topPUI from "./assets/images/topPhoneUI.png";
import Article from "./components/article/Article.tsx";
import Footer from "./components/footer/Footer.tsx";
import Header from "./components/layouts/Header.tsx";

const App: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="mainWrap">
            <img src={topPUI} alt="topUI" />
            <Header />
            <Article />
            {children}
            <Footer />
        </div>
    );
};

export default App;
