import "./BannerIndex.css";
import bannerInfos from "../../db/bannerInfo.json";

const BannerIndex: React.FC<{
    currentIndex: number;
    onSetCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}> = (props) => {
    return (
        <ul className="bannerIndexWrap">
            {bannerInfos.map((_, index: number) => (
                <li
                    key={index}
                    className={props.currentIndex === index ? "active" : ""}
                    onClick={() => {
                        props.onSetCurrentIndex(index);
                    }}
                ></li>
            ))}
        </ul>
    );
};

export default BannerIndex;
