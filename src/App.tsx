import "./App.css";
import topPUI from "./assets/images/topPhoneUI.png";
import Article from "./components/article/Article.tsx";
import Footer from "./components/footer/Footer.tsx";
import Header from "./components/layouts/Header.tsx";
import NavAllow from "./components/layouts/NavAllow.tsx";
import { CategoryProvider } from "./stores/CategoryContext.tsx";

const App: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="mainWrap">
            <img src={topPUI} alt="topUI" />
            <CategoryProvider>
                <Header />
                <NavAllow />
                <Article />
                {children}
                <Footer />
            </CategoryProvider>
        </div>
    );
};

export default App;
