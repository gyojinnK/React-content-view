import Card from "../Card";
import "./ChartWrap.css";
import artistDatas from "../../../db/artistInfo.json";

const ChartWrap = () => {
    return (
        <div className="chartWrap">
            {artistDatas.map((info: ArtistInfo) => (
                <Card
                    key={info.id}
                    id={info.id}
                    artistImg={info.artistImg}
                    artist={info.artist}
                    agency={info.agency}
                    views={info.views}
                />
            ))}
        </div>
    );
};

export default ChartWrap;
