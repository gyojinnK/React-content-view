import { useState, useEffect, useRef } from "react";
import "./BannerWrap.css";
import bannerInfos from "../../db/bannerInfo.json";
import Banner from "./Banner";
import BannerIndex from "./BannerIndex";

const BannerWrap = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const slideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex < bannerInfos.length - 1 ? prevIndex + 1 : 0
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (slideRef.current) {
            slideRef.current.style.transition = "transform 0.5s ease-in-out";
            slideRef.current.style.transform = `translateX(-${
                currentIndex * (100 / bannerInfos.length)
            }%)`;
        }
    }, [currentIndex]);

    return (
        <div className="bannerWrap">
            <div className="slider" ref={slideRef}>
                {bannerInfos.map((banner: BannerInfo) => (
                    <Banner
                        key={banner.id}
                        id={banner.id}
                        imagePath={banner.imagePath}
                        title={banner.title}
                        description={banner.description}
                        externalURL={banner.externalURL}
                        category={banner.category}
                        period={banner.period}
                        marginOption="0 5px"
                    />
                ))}
            </div>
            <BannerIndex
                currentIndex={currentIndex}
                onSetCurrentIndex={setCurrentIndex}
            />
        </div>
    );
};

export default BannerWrap;
