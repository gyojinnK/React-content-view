import ListFrame from "../ListFrame";
import usageDatas from "../../../db/usageInfo.json";

const ChargeInfoList = () => {
    return <ListFrame mockData={usageDatas} categoryTitle="USAGE" />;
};

export default ChargeInfoList;
