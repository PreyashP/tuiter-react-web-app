// Post Summary Item

const PostSummaryItem = (post) => {
    return (`

    <div class="list-group-item list-group-item-action border-0">
        <div class="wd-post-flex ">
            <div>
                <div class="text-secondary">
                    ${post.topic}
                </div>
                
                <div class="wd-post-summary-text">
                     ${post.userName} <i class="fas fa-check-circle"></i>
                </div>
                
                <div class="d-inline text-secondary">
                    - ${post.time}
                </div>
                
                </br>
                
                <div class="wd-post-summary-text">
                    ${post.title}
                </div>
                
                <div class="text-secondary">
                    ${post.tweets === undefined ? '' : post.tweets + ' Tuits'}
                </div>
            </div>
        
            <div>
                <img class="wd-post-summary-image m-1 pe-1" src=${post.image}></img>
            </div>
            
            
        </div>
        
    </div>
`
    );
}
export default PostSummaryItem;