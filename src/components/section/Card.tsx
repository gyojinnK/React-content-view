import Box from "../ui/Box";
import "./Card.css";

const Card: React.FC<ArtistInfo> = ({
    id,
    artistImg,
    artist,
    agency,
    views,
}) => {
    return (
        <Box className="CardWrap" width="90%" height="64px" margin="10px auto">
            <img
                className="artistImg"
                src={artistImg}
                alt={`${artist} image`}
            />
            <div className="artistDescription">
                <p>{id}</p>
                <div className="artistDomain">
                    <p>{artist}</p>
                    <p>{agency}</p>
                </div>
            </div>
            <p className="views">{views}</p>
        </Box>
    );
};

export default Card;
