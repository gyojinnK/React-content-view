/// <reference types="vite/client" />

type BannerInfo = {
    id: number;
    imagePath: string;
    title: string;
    description: string;
    externalURL: string;
    period: string;
    category: string;
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
    contentImg: string;
    contentTitle: string;
    contentDescription: string;
    views: number;
};

type ArtistInfo = {
    id: number;
    artistImg: string;
    artist: string;
    agency: string;
    views: number;
};
