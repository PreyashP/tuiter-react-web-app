import PostList from "../PostList/index.js";

// Home Component using PostList for full size tuits on homescreen
const HomeComponent = () => {
    return(`
    
           ${PostList()}
           
    `);
}

export default HomeComponent;


