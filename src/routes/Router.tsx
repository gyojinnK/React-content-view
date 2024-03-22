import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChartPage from "../pages/ChartPage";
import WhookPage from "../pages/WhookPage";
import EventPage from "../pages/EventPage";
import NewsPage from "../pages/NewsPage";
import StorePage from "../pages/StorePage";
import ChargePage from "../pages/ChargePage";
import App from "../App";
import { QueryClient, QueryClientProvider } from "react-query";

const Router = () => {
    const queryClient = new QueryClient();
    return (
        <BrowserRouter>
            <App>
                <QueryClientProvider client={queryClient}>
                    <Routes>
                        <Route path="/" element={<ChartPage />} />
                        <Route path="/whook" element={<WhookPage />} />
                        <Route path="/event" element={<EventPage />} />
                        <Route path="/news" element={<NewsPage />} />
                        <Route path="/store" element={<StorePage />} />
                        <Route path="/charge" element={<ChargePage />} />
                    </Routes>
                </QueryClientProvider>
            </App>
        </BrowserRouter>
    );
};

export default Router;
