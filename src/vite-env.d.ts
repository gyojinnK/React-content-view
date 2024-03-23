/// <reference types="vite/client" />

type BannerInfo = {
    id: number;
    imagePath: string;
    title: string;
    description: string;
    externalURL: string;
    period: string;
    category: string;
    marginOption?: string;
};

type CategoryInfo = {
    id: number;
    path: string;
    title: string;
};

type ListFrameProps = {
    mockData: any[];
    categoryTitle: string;
};

type CardInfo = {
    id: number;
    image: string; // 일반화된 이미지 필드
    title: string; // 일반화된 타이틀 필드
    description: string; // 일반화된 설명 필드
    views?: number; // 선택적 필드
    url?: string;
    [key: string]: any; // 추가적인 필드를 위한 인덱스 시그니처
};

type ArtistInfo = {
    id: number;
    artistImg: string;
    artist: string;
    agency: string;
    views: number;
};

type NewsInfo = {
    id: number;
    newsImg: string;
    newsHeader: string;
    newsDescription: string;
    url: string;
};

type WhookInfo = {
    id: number;
    hookImg: string;
    hookTitle: string;
    hookCurrentChating: string;
    userCnt: string;
};

type ItemInfo = {
    id: number;
    itemImg: string;
    itemTitle: string;
    itemDescription: string;
    itemCost: string;
    storeUrl: string;
};

type UsageInfo = {
    id: number;
    usageTitle: string;
    usageDescription: string;
    usageDate: string;
};
