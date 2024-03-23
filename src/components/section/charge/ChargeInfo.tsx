import "./ChargeInfo.css";
import ChargeInfoList from "./ChargeInfoList";

const ChargeInfo = () => {
    return (
        <div className="chargeCardInfoWrap">
            <h3>이용 내역</h3>
            <div className="chargeCardInfoLine"></div>
            <div className="chargeCardInfoHistoryHeader">
                <p>3월 이용금액</p>
                <p>34,000원</p>
            </div>
            <div className="chargeCardInfoLine2"></div>
            <ChargeInfoList />
        </div>
    );
};

export default ChargeInfo;
