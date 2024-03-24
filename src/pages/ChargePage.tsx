import { Suspense, lazy } from "react";
import "./PageStyle.css";
import LoadSpinner from "../components/ui/LoadSpinner";

const ChargeWrap = lazy(
    () => import("../components/section/charge/ChargeWrap")
);

const ChartPage = () => {
    return (
        <>
            <Suspense
                fallback={
                    <div className="susWrap">
                        <LoadSpinner />
                    </div>
                }
            >
                <ChargeWrap />
            </Suspense>
        </>
    );
};

export default ChartPage;
