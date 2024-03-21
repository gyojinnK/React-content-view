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

type ArtistInfo = {
    id: number;
    artistImg: string;
    artist: string;
    agency: string;
    views: number;
};
