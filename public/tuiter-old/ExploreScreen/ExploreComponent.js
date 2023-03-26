import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div>
            <div class="row">
             <div class="col-12 col-sm-11">
             
<!--         Search Bar-->
                <div class="input-group">
                    <div class="wd-bg-color-white wd-rounded-corners">
<!--                    Magnifying Glass-->
                        <span class="input-group-text bg-transparent wd-magnifying-custom-gray"><i class="fa fa-search mt-1"></i></span>
                    </div>
                    <input class="form-control wd-rounded-corners" type="text" placeholder="Search Tuiter" name="search">
                </div>
             </div>
             
<!--         Gear Icon-->
             <div class="col-12 col-sm-1">
                  <a href="explore-settings.html"><i class="pt-1 fas fa-cog fa-2x"></i></a>
             </div>
             
            </div>
            
<!--        Hyperlink Tabs-->
            <ul class="nav mb-2 mt-2 nav-tabs">
                   <li class="nav-item active ms-1">
                       <a class="nav-link active" href="../explore-js/for-you.html">For you</a>
                   </li>
                   <li class="nav-item ms-1">
                       <a class="nav-link" href="../explore-js/trending.html">Trending</a>
                   </li>
                   <li class="nav-item ms-1">
                       <a class="nav-link" href="../explore-js/news.html">News</a>
                   </li>
                   <li class="nav-item ms-1">
                       <a class="nav-link" href="../explore-js/sports.html">Sports</a>
                   </li>
                   <li class="nav-item ms-1">
                       <a class="nav-link d-none d-md-block" href="../explore-js/entertainment.html">Entertainment</a>
                   </li>
            </ul>
        </div>
        
        
<!--    Main Image Section + Posts-->
        <div class="wd-main-section-image">
            <img class = "wd-main-section-image" src="../../images/Starship-Mk1-Day.webp">
            <span class="wd-main-image-left-corner-caption">SpaceX's Starship</span>
        </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

