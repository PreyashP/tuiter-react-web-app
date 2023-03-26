import TuitItem from "./TuitItem";
import {useSelector} from "react-redux";
const TuitsList = () => {
    const feedTuitsArray = useSelector(state => state.feedTuits)
    return (
        <div className="list-group border border-light">

            {
                feedTuitsArray.map(tuit => <TuitItem key={tuit._id} tuit={tuit}/>)
            }

        </div>
    ); }

export default TuitsList;
