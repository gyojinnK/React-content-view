import ListFrame from "../components/section/ListFrame";
import EventDatas from "../db/bannerInfo.json";

const EventPage = () => {
    return <ListFrame mockData={EventDatas} categoryTitle="EVENT" />;
};

export default EventPage;
