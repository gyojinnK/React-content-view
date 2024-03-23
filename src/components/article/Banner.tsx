import Box from "../ui/Box";
import Button from "../ui/Button";
import "./Banner.css";

const Banner: React.FC<BannerInfo> = ({
    imagePath,
    description,
    period,
    title,
    externalURL,
    category,
    marginOption,
}) => {
    const requestExternalUrlHandler = () => {
        window.open(externalURL);
    };

    return (
        <Box
            width="380px"
            height="190px"
            margin={marginOption}
            flexDirection="column"
        >
            <div
                className="bannerImage"
                style={{
                    backgroundImage: `url(${imagePath})`,
                    backgroundPositionX: "center",
                    backgroundSize: "380px 180px",
                    backgroundPositionY: "-30px",
                }}
            ></div>
            <div className="bannerTextInfo">
                <div className="bannerText">
                    <p>
                        {title} {description}
                    </p>
                </div>
                <p>{period}</p>
                <Button
                    className="bannerBtn"
                    onClick={requestExternalUrlHandler}
                    width="65px"
                    height="20px"
                    fontSize="0.65rem"
                    fontFam="var(--font-nanum-bold)"
                >
                    {category === "vote" ? "투표하기" : "확인하기"}
                </Button>
            </div>
        </Box>
    );
};

export default Banner;
