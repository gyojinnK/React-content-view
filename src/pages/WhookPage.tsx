import ListFrame from "../components/section/ListFrame";
import whookDatas from "../db/whookInfo.json";

const WhookPage = () => {
    return <ListFrame mockData={whookDatas} categoryTitle="WHOOK" />;
};

export default WhookPage;
