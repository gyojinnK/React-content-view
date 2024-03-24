import whookDatas from "../db/whookInfo.json";
import ListFrame from "../components/section/ListFrame";

const WhookPage = () => {
    return <ListFrame mockData={whookDatas} categoryTitle="WHOOK" />;
};

export default WhookPage;
