import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "../App";
import LoadSpinner from "../components/ui/LoadSpinner";

const ChartPage = lazy(() => import("../pages/ChartPage"));
const WhookPage = lazy(() => import("../pages/WhookPage"));
const EventPage = lazy(() => import("../pages/EventPage"));
const NewsPage = lazy(() => import("../pages/NewsPage"));
const StorePage = lazy(() => import("../pages/StorePage"));
const ChargePage = lazy(() => import("../pages/ChargePage"));

const Router = () => {
    const queryClient = new QueryClient();
    return (
        <BrowserRouter>
            <App>
                <QueryClientProvider client={queryClient}>
                    <Suspense
                        fallback={
                            <div
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                <LoadSpinner />
                            </div>
                        }
                    >
                        <Routes>
                            <Route path="/" element={<ChartPage />} />
                            <Route path="/whook" element={<WhookPage />} />
                            <Route path="/event" element={<EventPage />} />
                            <Route path="/news" element={<NewsPage />} />
                            <Route path="/store" element={<StorePage />} />
                            <Route path="/charge" element={<ChargePage />} />
                        </Routes>
                    </Suspense>
                </QueryClientProvider>
            </App>
        </BrowserRouter>
    );
};

export default Router;
