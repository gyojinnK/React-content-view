import ListFrame from "../components/section/ListFrame";
import newsDatas from "../db/newsInfo.json";

const NewsPage = () => {
    return <ListFrame mockData={newsDatas} categoryTitle="NEWS" />;
};

export default NewsPage;
