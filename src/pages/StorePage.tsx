import ListFrame from "../components/section/ListFrame";
import storeDatas from "../db/storeInfo.json";

const StorePage = () => {
    return <ListFrame mockData={storeDatas} categoryTitle="STORE" />;
};

export default StorePage;
