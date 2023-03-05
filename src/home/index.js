// Home Screen
import PostListing from "./post-listing";
import posts from "./posts.js"


const HomeComponent = () => {
    return (
        <div className="list-group border border-light">

            {
                posts.map(post => <PostListing
                    key={post.title} post={post}/>)
            }

        </div>
    );
}

export default HomeComponent;