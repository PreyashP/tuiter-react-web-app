// Post Item for Full Post

const PostItem = (post) => {
    return (`
    <div class="list-group-item list-group-item-action wd-border-bot-gray-1px">
    
<!--    Profile Image-->
        <div class="row ">
        <div class="col-1 col-sm-1">
            <img class="wd-image-round-48px float-start mt-1" src="../../images/${post.avatarIcon}">
        </div>
        
        <div class="col-11 mt-2 col-sm-11">
            <div>
<!--            Name + Verified Check-->
                <div class="wd-post-summary-text">
                    ${post.title} <i class="fas fa-check-circle"></i>
                </div>
                
<!--            User Handle-->
                <div class="wd-handle-text-darkgray">
                    @${post.handle}
                </div>
                
<!--            Tuit Time-->
                <div class="text-secondary d-inline">
                    - ${post.time}
                </div>
            </div>
            
<!--        Tuit Main Image-->
            <div>
                ${post.text}
                <img class="wd-full-post-pic mt-2" src="../../images/${post.tweetImage}">
            </div>
            
<!--        Post Reaction Icons (Chat, Retuit, Heart, Upload)-->
            <div class="wd-flex-reaction-icons mt-3">
                <div>
                     <i class="far fa-comment"></i> ${post.numOfReplies}
                </div>
                
                <div>
                    <i class="fas fa-retweet"></i> ${post.numOfRTs}
                </div>
           
                <div>
                    <i class="far fa-heart"></i> ${post.numOfLikes}
                </div>
                
                <div>
                    <i class="fas fa-upload"></i> 
                </div>
                
            </div>
    
    </div>
        </div>
    </div>
`
    );
}
export default PostItem;
