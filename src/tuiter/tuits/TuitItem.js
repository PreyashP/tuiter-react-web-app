import React from "react";
import "./index.css";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/feed-tuits-reducer";

const TuitItem = (
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
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img width={60} className="float-end rounded-5" src={`/images/${tuit.image}`}/>
                </div>
                <div className="col-10">
                    <div>
                        <div className="">
                            <b>{tuit.userName}</b> <i className="wd-skyblue bi-check-circle-fill"></i>
                        </div>

                        <div className="d-inline-block">
                            {tuit.handle}
                        </div>

                        <div className="d-inline-block">
                            - {tuit.time}
                        </div>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                    </div>

                    <div>
                        {tuit.tuit}
                    {/*    add logic for image below text later when needed*/}
                    </div>

                    <TuitStats tuit={tuit}/>

                </div>

            </div>
        </li>
    );
}
export default TuitItem;

