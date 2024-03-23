import Box from "../ui/Box";
import userIcon from "../../assets/images/icons/user.svg";
import ChartSt from "./styles/Chart.module.css";
import NewsSt from "./styles/News.module.css";
import WhookSt from "./styles/Whook.module.css";

const Card: React.FC<CardInfo> = ({
    id,
    image,
    title,
    description,
    views,
    url,
    userCnt,
    categoryTitle,
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
        default:
            css = ChartSt;
            boxStyle = { height: "64px" };
    }

    return (
        <Box
            className={css.cardWrap}
            width="90%"
            margin="10px auto"
            {...(boxStyle || { height: "64px" })}
        >
            <div className={css.imgWrap}>
                {categoryTitle === "NEWS" ? (
                    <div className={css.blackBoard}></div>
                ) : null}
                <img
                    className={css.contentImg}
                    src={image}
                    alt={`${title} image`}
                />
            </div>
            <div className={css.contentDescription}>
                {categoryTitle === "ARTIST" ? <p>{id}</p> : null}
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
                ) : (
                    views
                )}
            </div>
        </Box>
    );
};

export default Card;
