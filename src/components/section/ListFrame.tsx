import { useInfiniteQuery } from "react-query";
import Card from "./Card";
import "./ListFrame.css";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useRef, useState } from "react";
import CardSkeleton from "../ui/Skeleton";
import Banner from "../article/Banner";

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
        return mockData.slice(start, end).map((data) => ({
            id: data.id,
            image:
                data.artistImg ||
                data.newsImg ||
                data.hookImg ||
                data.imagePath,
            title:
                data.artist || data.newsHeader || data.hookTitle || data.title,
            description:
                data.agency ||
                data.newsDescription ||
                data.hookCurrentChating ||
                data.description,
            views: data.views,
            url: data.url,
            userCnt: data.userCnt,
            externalURL: data.externalURL,
            period: data.period,
            category: data.category,
        }));
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
                {isLoading && categoryTitle != "EVENT"
                    ? data?.pages.map((pageData, index: number) => (
                          <React.Fragment key={index}>
                              {pageData.map((info: CardInfo) => (
                                  <Card
                                      key={info.id}
                                      id={info.id}
                                      image={info.image}
                                      title={info.title}
                                      description={info.description}
                                      views={info.views}
                                      url={info.url}
                                      userCnt={info.userCnt}
                                      externalURL={info.externalURL}
                                      period={info.period}
                                      categoryTitle={categoryTitle}
                                  />
                              ))}
                          </React.Fragment>
                      ))
                    : categoryTitle === "EVENT"
                    ? data?.pages.map((pageData, index: number) => (
                          <React.Fragment key={index}>
                              {pageData.map((info: CardInfo) => (
                                  <Banner
                                      id={info.id}
                                      imagePath={info.image}
                                      description={info.description}
                                      period={info.period}
                                      title={info.title}
                                      externalURL={info.externalURL}
                                      category={info.caterogy}
                                      marginOption="10px auto"
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
