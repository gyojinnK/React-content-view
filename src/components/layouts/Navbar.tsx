import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <ul>
            <li>
                <NavLink className="nlink" to="/">
                    차트
                </NavLink>
            </li>
            <li>
                <NavLink className="nlink" to="/whook">
                    Whook
                </NavLink>
            </li>
            <li>
                <NavLink className="nlink" to="/event">
                    이벤트
                </NavLink>
            </li>
            <li>
                <NavLink className="nlink" to="/news">
                    뉴스
                </NavLink>
            </li>
            <li>
                <NavLink className="nlink" to="/store">
                    스토어
                </NavLink>
            </li>
            <li>
                <NavLink className="nlink" to="/charge">
                    충전소
                </NavLink>
            </li>
        </ul>
    );
};

export default Navbar;
