import Box from "../ui/Box";
import "./Card.css";

const Card: React.FC<CardInfo> = ({
    id,
    contentImg,
    contentTitle,
    contentDescription,
    views,
}) => {
    return (
        <Box className="CardWrap" width="90%" height="64px" margin="10px auto">
            <img
                className="contentImg"
                src={contentImg}
                alt={`${contentTitle} image`}
            />
            <div className="contentDescription">
                <p>{id}</p>
                <div className="contentDomain">
                    <p>{contentTitle}</p>
                    <p>{contentDescription}</p>
                </div>
            </div>
            <p className="views">{views}</p>
        </Box>
    );
};

export default Card;
