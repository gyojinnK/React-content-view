import Box from "../ui/Box";
import ChartSt from "./styles/Chart.module.css";
import NewsSt from "./styles/News.module.css";

const Card: React.FC<CardInfo> = ({
    id,
    image,
    title,
    description,
    views,
    url,
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
        default:
            css = ChartSt;
            boxStyle = { height: "64px" };
    }

    return (
        <Box
            className={css.cardWrap}
            width="90%"
            margin="10px auto"
            {...boxStyle}
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
            <p className={css.views}>{views}</p>
        </Box>
    );
};

export default Card;
