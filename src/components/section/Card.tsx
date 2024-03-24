import Box from "../ui/Box";
import userIcon from "../../assets/images/icons/user.svg";
import ChartSt from "./cardStyles/Chart.module.css";
import NewsSt from "./cardStyles/News.module.css";
import WhookSt from "./cardStyles/Whook.module.css";
import StoreSt from "./cardStyles/Store.module.css";
import UsageSt from "./cardStyles/Usage.module.css";
import Button from "../ui/Button";

const Card: React.FC<CardInfo> = ({
    id,
    image,
    title,
    description,
    views,
    url,
    userCnt,
    cost,
    categoryTitle,
    usageDate,
}) => {
    const toExternalUrlHandler = () => {
        window.open(url);
    };

    let css: CSSModuleClasses;
    let boxStyle = {};
    switch (categoryTitle) {
        case "ARTIST":
            css = ChartSt;
            boxStyle = { height: "64px" };
            break;
        case "NEWS":
            css = NewsSt;
            boxStyle = { height: "120px" };
            break;
        case "WHOOK":
            css = WhookSt;
            boxStyle = { height: "64px" };
            break;
        case "STORE":
            css = StoreSt;
            boxStyle = { height: "180px", flexdirection: "column" };
            break;
        case "USAGE":
            css = UsageSt;
            boxStyle = { height: "64px" };
            break;
        default:
            css = ChartSt;
            boxStyle = { height: "64px" };
    }

    return (
        <Box
            className={css.cardWrap}
            margin="10px auto"
            // width="90%"
            {...(categoryTitle === "USAGE"
                ? { width: "99%" }
                : { width: "90%" })}
            {...(boxStyle || { height: "64px" })}
        >
            <div className={css.imgWrap}>
                {categoryTitle === "NEWS" ? (
                    <div className={css.blackBoard}></div>
                ) : null}
                {categoryTitle === "USAGE" ? null : (
                    <img
                        className={css.contentImg}
                        src={image}
                        alt={`${title} image`}
                    />
                )}
            </div>
            <div className={css.contentDescription}>
                {categoryTitle === "ARTIST" ? <p>{id}</p> : null}
                {categoryTitle === "NEWS" ? (
                    <div
                        className={`${css.contentDomain} ${css.newCursor}`}
                        onClick={toExternalUrlHandler}
                    >
                        <p>{title}</p>
                        <p>{description}</p>
                    </div>
                ) : (
                    <div className={css.contentDomain}>
                        <p>{title}</p>
                        <p>{description}</p>
                    </div>
                )}
                <div className={css.contentDomain}>
                    {categoryTitle === "NEWS" ? (
                        <p onClick={toExternalUrlHandler}>{title}</p>
                    ) : (
                        <p>{title}</p>
                    )}
                    <p>{description}</p>
                </div>
            </div>
            <div className={css.views}>
                {categoryTitle === "WHOOK" ? (
                    <>
                        <img src={userIcon} alt="User Icon" />
                        {userCnt}
                    </>
                ) : categoryTitle === "USAGE" ? (
                    usageDate
                ) : (
                    views
                )}
            </div>
            {categoryTitle === "STORE" ? (
                <>
                    <Button
                        className={css.storeBtn}
                        width="65px"
                        height="20px"
                        fontSize="0.65rem"
                        fontfam="var(--font-nanum-bold)"
                        color="#919191"
                        bodercolor="#919191"
                        onClick={toExternalUrlHandler}
                    >
                        상세보기
                    </Button>
                    <div className={css.costWrap}>
                        <p>₩ {cost}</p>
                    </div>
                </>
            ) : null}
        </Box>
    );
};

export default Card;
