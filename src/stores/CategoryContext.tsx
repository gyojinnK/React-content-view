import { createContext, useContext, useState, ReactNode } from "react";

type CategoryContextType = {
    currentCategory: number;
    setCurrentCategory: (category: number) => void;
};

type CategoryProviderProps = {
    children: ReactNode;
};

const CategoryContext = createContext<CategoryContextType>(
    {} as CategoryContextType
);

export const useCategory = () => useContext(CategoryContext);

export const CategoryProvider = ({ children }: CategoryProviderProps) => {
    const [currentCategory, setCurrentCategory] = useState<number>(0);

    return (
        <CategoryContext.Provider
            value={{ currentCategory, setCurrentCategory }}
        >
            {children}
        </CategoryContext.Provider>
    );
};
