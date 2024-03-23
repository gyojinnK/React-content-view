import "./ChargeCard.css";
import Box from "../../ui/Box";
import Button from "../../ui/Button";
import chargeIcon from "../../../assets/images/icons/chargeIcon.svg";
import refreshIcon from "../../../assets/images/icons/refreshIcon.svg";
import { useEffect, useState } from "react";
import ChargeInfo from "./ChargeInfo";

const ChargeCard = () => {
    const [isRefresh, setIsRefresh] = useState<boolean>(false);
    const refreshHandler = () => {
        setIsRefresh(true);
    };

    useEffect(() => {
        setIsRefresh(false);
    }, [isRefresh]);

    return (
        <Box
            className="chargeCardMainWrap"
            width="90%"
            height="60%"
            margin="0 auto"
            flexdirection="column"
            overflow="scroll"
        >
            <Box
                className="chargeCard"
                width="90%"
                margin="10px auto"
                bgcolor="rgb(51, 51, 51)"
                overflow="visible"
            >
                <div className="chargeCardWrap">
                    <div className="chargeCardTitle">
                        <img src={chargeIcon} alt="charge icon" />
                        <h2>Wallet</h2>
                    </div>
                    <div className="chargeCardDescriptionWrap">
                        <div className="chargeCardDescription">
                            <p>충전 포인트</p>
                        </div>
                        <div className="chargeCardAmountWrap">
                            <div>
                                <div>W</div>
                            </div>
                            <p>10,000</p>
                        </div>
                    </div>
                </div>
                <Button
                    className="chargeCardBtn"
                    width="50px"
                    height="22px"
                    bodercolor="white"
                    color="black"
                    fontSize="0.75rem"
                    fontfam="var(--font-nanum-bold)"
                >
                    충전
                </Button>
                <div className="refreshBtn" onClick={refreshHandler}>
                    <img src={refreshIcon} alt="refresh icon" />
                </div>
            </Box>
            <ChargeInfo />
        </Box>
    );
};

export default ChargeCard;
