import PostSummaryItem from "../PostSummaryList/PostSummaryItem.js";
import posts from "../PostSummaryList/posts.js"

// Post Summary List

const PostSummaryList = () => {

    return (`
           <div class="list-group">
           ${

        posts.map(post => {
            return (PostSummaryItem(post));

        }).join('')

    }
           </div>
`);
}


export default PostSummaryList;