import { useInfiniteQuery } from "react-query";
import Card from "../Card";
import "./ListFrame.css";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useRef, useState } from "react";
import CardSkeleton from "../../ui/Skeleton";

const ListFrame: React.FC<ListFrameProps> = ({ mockData, categoryTitle }) => {
    const listCount = 8;
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const topTocontentView = useRef<HTMLDivElement | null>(null);
    const fetchDatas = async ({ pageParam = 0 }) => {
        const perPage = listCount;
        const start = pageParam * perPage;
        const end = start + perPage;
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsLoading(true);
        return mockData.slice(start, end);
    };

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
        useInfiniteQuery("artists", fetchDatas, {
            getNextPageParam: (_, pages) => {
                if (pages.length * 8 < mockData.length) {
                    return pages.length;
                } else {
                    return undefined;
                }
            },
        });

    const { ref, inView } = useInView({
        threshold: 0,
    });

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, isFetchingNextPage]);

    const scrollToTop = () => {
        if (topTocontentView.current) {
            topTocontentView.current.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <h2 className="contentTitle">{categoryTitle}</h2>
            <div className="line"></div>
            <div className="contentWrap" ref={topTocontentView}>
                {isLoading
                    ? data?.pages.map((pageData, index: number) => (
                          <React.Fragment key={index}>
                              {pageData.map((info: ArtistInfo) => (
                                  <Card
                                      key={info.id}
                                      id={info.id}
                                      contentImg={info.artistImg}
                                      contentTitle={info.artist}
                                      contentDescription={info.agency}
                                      views={info.views}
                                  />
                              ))}
                          </React.Fragment>
                      ))
                    : Array.from({ length: listCount }, (_, index) => (
                          <CardSkeleton key={index} />
                      ))}
                <div ref={ref} aria-live="polite">
                    {isFetchingNextPage ? (
                        <CardSkeleton />
                    ) : hasNextPage ? (
                        "더 보기"
                    ) : (
                        <div className="upInter" onClick={scrollToTop}>
                            <p>Top ^</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ListFrame;
