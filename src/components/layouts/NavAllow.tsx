import { useCategory } from "../../stores/CategoryContext";
import "./NavAllow.css";
import categorys from "../../db/cotegoryInfo.json";
import { useNavigate } from "react-router-dom";

const NavAllow = () => {
    const navi = useNavigate();
    const { currentCategory, setCurrentCategory } = useCategory();

    const prevHandler = () => {
        const newIdx = currentCategory > 0 ? currentCategory - 1 : 0;
        setCurrentCategory(newIdx);
        navi(categorys[newIdx].path);
    };

    const nextHandler = () => {
        const newIdx =
            currentCategory < categorys.length - 1
                ? currentCategory + 1
                : categorys.length - 1;
        setCurrentCategory(newIdx);
        navi(categorys[newIdx].path);
    };

    return (
        <div className="AllowWrap">
            <div className="lAllow" onClick={prevHandler}>
                {"<"}
            </div>
            <div className="rAllow" onClick={nextHandler}>
                {">"}
            </div>
        </div>
    );
};

export default NavAllow;
