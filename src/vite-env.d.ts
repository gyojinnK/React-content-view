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
