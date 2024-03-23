import ListFrame from "../components/section/ListFrame";
import artistDatas from "../db/artistInfo.json";

const ChartPage = () => {
    return <ListFrame mockData={artistDatas} categoryTitle="ARTIST" />;
};

export default ChartPage;
