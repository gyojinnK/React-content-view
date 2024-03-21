import "./Article.css";
import BannerWrap from "./BannerWrap";

const Article = () => {
    return (
        <div className="articleWrap">
            <BannerWrap />
            <div className="lBlur"></div>
            <div className="rBlur"></div>
        </div>
    );
};

export default Article;
