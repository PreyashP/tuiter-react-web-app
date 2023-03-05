// Full Post Listing
import React from "react";

import "./index.css";

const PostListing = (
    {
        post = {
            text: 'Charmander is the best the starter pokemon!',
            handle: 'Ash_899',
            title: 'Ash Ketchup',
            time: '4h',
            avatarIcon: 'charmander.jpg',
            tweetImage: 'charizard_charmander.jpg',
            numOfReplies: '2.4K',
            numOfLikes: '7.9K',
            numOfRTs: '1.2K',
        }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    {/*User Image Icon*/}
                    <img width={70} className="float-end wd-rounded" src={`/images/${post.avatarIcon}`}/>
                </div>
                <div className="col-10">
                    <div>
                        <div className="wd-inline-block">
                            <b>{post.title}</b> <i className="wd-skyblue fa-solid fa-circle-check"></i>
                        </div>
                        {/*User Handle*/}
                        <div className="wd-inline-block wd-dark-gray">
                            @{post.handle}
                        </div>

                        {/*Post time*/}
                        <div className="wd-inline-block wd-dark-gray">
                            - {post.time}
                        </div>
                    </div>

                    <div>
                        {post.text}
                        {/*Main Image*/}
                        <img className="wd-full-post-pic mt-2" src={`/images/${post.tweetImage}`}></img>
                    </div>
                    {/*Post Reactions*/}
                    <div className="wd-flex-reaction-icons mt-2">
                        <div>
                            <i className="far fa-comment"></i> {post.numOfReplies}
                        </div>

                        <div>
                            <i className="fas fa-retweet"></i> {post.numOfRTs}
                        </div>

                        <div>
                            <i className="far fa-heart"></i> {post.numOfLikes}
                        </div>

                        <div>
                            <i className="fas fa-upload"></i>
                        </div>

                    </div>

                </div>

            </div>
        </li>
    );
}
export default PostListing;
