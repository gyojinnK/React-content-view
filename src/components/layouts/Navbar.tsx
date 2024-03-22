import { NavLink } from "react-router-dom";
import "./Navbar.css";
import categorys from "../../db/cotegoryInfo.json";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
    const [currentCategory, setCurrentCategory] = useState<number>(0);
    const slideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (slideRef.current) {
            slideRef.current.style.left = `${currentCategory * 80 + 15}px`;
        }
    }, [currentCategory]);

    return (
        <ul className="navbarWrap">
            {categorys.map((category: CategoryInfo, index: number) => (
                <li className="liNav" key={category.id}>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "nlink active" : "nlink"
                        }
                        to={category.path}
                        onClick={() => {
                            setCurrentCategory(index);
                        }}
                    >
                        {category.title}
                    </NavLink>
                </li>
            ))}
            <div className="slidingBar" ref={slideRef}></div>
        </ul>
    );
};

export default Navbar;
