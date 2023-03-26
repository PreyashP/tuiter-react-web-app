import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {tuitToggle} from "../reducers/feed-tuits-reducer";

const TuitStats = (
    {
        tuit =
            {
                _id: 234,
                topic: "Travel",
                userName: "Virgin Galactic",
                time: "2h",
                title: "Hundreds of flights cancelled during winter storm",
                image: "virgin-galactic.png",
                liked: true,
                replies: 123,
                retuits: 456,
                likes: 2345,
                handle: "@virgingalactic",
                tuit: "Winter storm causing numerous cancellations across the country."
            }
    }
) => {
    const dispatch = useDispatch();

    const toggleTuitLike = (tuit) => {
        dispatch(tuitToggle(tuit))
    }

    return (
        <div className="wd-flex-impressions mt-2">
            <div>
                <i className="bi-chat"></i> {tuit.replies}
            </div>

            <div>
                <i className="bi-share"></i> {tuit.retuits}
            </div>

            <div>
                {/*Heart Color for Like based on click event*/}
                <button onClick={() =>
                    toggleTuitLike(tuit)} className="btn">
                    <i style={{
                        color: tuit.liked ? 'red' : 'lightgrey'
                    }} className="bi-heart-fill"></i></button>
                {tuit.likes}

            </div>

            <div>

                <i className="bi-upload"></i>
            </div>

        </div>

    );
};
export default TuitStats;