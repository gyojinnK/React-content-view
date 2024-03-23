import "./Footer.css";
import chartIcon from "../../assets/images/icons/chart.svg";
import newsIcon from "../../assets/images/icons/news.svg";
import whosfanIcon from "../../assets/images/icons/whosfan.svg";

const Footer = () => {
    const toHTChartHandler = () => {
        window.open("https://www.hanteochart.com/");
    };

    const toWhosfanHandler = () => {
        window.open("https://www.whosfan.com/");
    };

    const toHTNewsHandler = () => {
        window.open("https://www.hanteonews.com/");
    };

    return (
        <div className="footerWrap">
            <div className="footerLine"></div>
            <div className="footerContent">
                <div className="footerHTChart">
                    <img
                        src={chartIcon}
                        alt="chartIcon"
                        onClick={toHTChartHandler}
                    />
                </div>
                <div className="footerWhosfan">
                    <img
                        src={whosfanIcon}
                        alt="whosfanIcon"
                        onClick={toWhosfanHandler}
                    />
                </div>
                <div className="footerHTNews">
                    <img
                        src={newsIcon}
                        alt="newsIcon"
                        onClick={toHTNewsHandler}
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;
