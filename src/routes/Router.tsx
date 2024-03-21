import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChartPage from "../pages/ChartPage";
import WhookPage from "../pages/WhookPage";
import EventPage from "../pages/EventPage";
import NewsPage from "../pages/NewsPage";
import StorePage from "../pages/StorePage";
import App from "../App";
import Header from "../components/layouts/Header";

const Router = () => {
    return (
        <BrowserRouter>
            <App />
            <Header />
            <Routes>
                <Route path="/" element={<ChartPage />} />
                <Route path="/whook" element={<WhookPage />} />
                <Route path="/event" element={<EventPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/store" element={<StorePage />} />
                <Route path="/charge" element={<ChartPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;