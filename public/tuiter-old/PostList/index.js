import PostItem from "../PostList/PostItem.js";
import posts from "../PostList/posts.js";


const PostList = () => {
    return (`

           <div class="list-group border border-light">
            
           ${
        posts.map(post => {
            return(PostItem(post));
            
        }).join('')
    }

           </div>
`); }

export default PostList;