import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {tuitToggle} from "../reducers/feed-tuits-reducer";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({
                       tuit = {
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
                           dislikes: 123,
                           handle: "@virgingalactic",
                           tuit: "Winter storm causing numerous cancellations across the country."
                       }
                   }) => {
    const dispatch = useDispatch();
    const [liked, setLiked] = useState(tuit.liked);
    const [disliked, setDisliked] = useState(false);

    const toggleTuitLike = (tuit) => {
        dispatch(tuitToggle(tuit));
    };

    const handleLikeClick = () => {
        if (liked) {
            dispatch(
                updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes - 1,
                    liked: false,
                })
            );
        } else {
            dispatch(
                updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1,
                    disliked: false,
                    liked: true,
                })
            );
        }
        setLiked(!liked);
        setDisliked(false);
    };

    const handleDislikeClick = () => {
        if (disliked) {
            dispatch(
                updateTuitThunk({
                    ...tuit,
                    dislikes: tuit.dislikes - 1,
                    disliked: false,
                })
            );
        } else {
            dispatch(
                updateTuitThunk({
                    ...tuit,
                    dislikes: tuit.dislikes + 1,
                    liked: false,
                    disliked: true,
                })
            );
        }
        setDisliked(!disliked);
        setLiked(false);
    };

    return (
        <div className="wd-flex-impressions mt-2">
            <div>
                <i className="bi-chat"></i> {tuit.replies}
            </div>

            <div>
                <i className="bi-share"></i> {tuit.retuits}
            </div>

            <div>
                <i
                    onClick={handleLikeClick}
                    className={
                        "bi bi-heart-fill me-2 " +
                        (liked ? "text-danger" : "text-secondary")
                    }
                ></i>{" "}
                {tuit.likes}
            </div>

            <div>
                <i
                    onClick={handleDislikeClick}
                    className={
                        "bi-hand-thumbs-down-fill me-2 " +
                        (disliked ? "text-info" : "text-secondary")
                    }
                ></i>{" "}
                {tuit.dislikes}
            </div>

            <div>
                <i className="bi-upload"></i>
            </div>
        </div>
    );
};

export default TuitStats;
