//  Navigation Sidebar (Left Side Panel)

const NavigationSidebar = (active) => {
    // language=HTML
    return (`
        <div class="list-group border-0">


            <!--            Tuiter Icon-->
            <a class="list-group-item" href=#><i class="fab fa-tumblr"></i></a>

            <!--            Home Icon-->
            <a href="../HomeScreen/index.html"
               class="list-group-item ${active == 'home' ? 'active' : ''} list-group-item-action border-0">
                <div class="row">
                    <div class="col-12 col-xl-1 col-xxl-1">
                        <i class="fas fa-home"></i>
                    </div>
                    <div class="d-none d-xl-block col-12 col-xl-10 col-xxl-10">
                        Home
                    </div>
                </div>
            </a>


            <!--            Explore Icon-->
            <a href="../explore/index.html"
               class="list-group-item ${active == 'explore' ? 'active' : ''} list-group-item-action border-0">
                <div class="row">
                    <div class="col-12 col-xl-1 col-xxl-1">
                        <i class="fas fa-hashtag"></i>
                    </div>
                    <div class=" d-none d-xl-block col-12 col-xl-10 col-xxl-10">
                        Explore
                    </div>
                </div>
            </a>


            <!--            Notifications Icon-->
            <a href=#
               class="list-group-item ${active == 'notifications' ? 'active' : ''} list-group-item-action border-0">
                <div class="row">
                    <div class="col-12 col-xl-1 col-xxl-1">
                        <i class="fas fa-bell"></i>
                    </div>
                    <div class="d-none d-xl-block col-12 col-xl-10 col-xxl-10">
                        Notifications
                    </div>
                </div>
            </a>


            <!--            Messages Icon-->
            <a href=# class="list-group-item ${active == 'messages' ? 'active' : ''} list-group-item-action border-0">
                <div class="row">
                    <div class="col-12 col-xl-1 col-xxl-1">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div class="d-none d-xl-block col-12 col-xl-10 col-xxl-10">
                        Messages
                    </div>
                </div>
            </a>


            <!--            Bookmarks Icon-->
            <a href="../bookmarks/index.html"
               class="list-group-item ${active == 'bookmarks' ? 'active' : ''} list-group-item-action border-0">
                <div class="row">
                    <div class="col-12 col-xl-1 col-xxl-1">
                        <i class="fas fa-bookmark"></i>
                    </div>
                    <div class="d-none d-xl-block col-12 col-xl-10 col-xxl-10">
                        Bookmarks
                    </div>
                </div>
            </a>


            <!--            Lists Icon-->
            <a href=#
               class="list-group-item ${active == 'top-articles' ? 'active' : ''} list-group-item-action border-0">
                <div class="row">
                    <div class="col-12 col-xl-1 col-xxl-1">
                        <i class="fas fa-list"></i>
                    </div>
                    <div class="d-none d-xl-block col-12 col-xl-10 col-xxl-10">
                        Lists
                    </div>
                </div>
            </a>


            <!--            Profile Icon-->
            <a href=# class="list-group-item ${active == 'profile' ? 'active' : ''} list-group-item-action border-0">
                <div class="row">
                    <div class="col-12 col-xl-1 col-xxl-1">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="d-none d-xl-block col-12 col-xl-10 col-xxl-10">
                        Profile
                    </div>
                </div>
            </a>


            <!--            More Icon-->
            <a href=# class="list-group-item ${active == 'more' ? 'active' : ''} list-group-item-action border-0">
                <div class="row">
                    <div class="col-12 col-xl-1 col-xxl-1">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                    <div class="d-none d-xl-block col-12 col-xl-10 col-xxl-10">
                        More
                    </div>
                </div>
            </a>
        </div>
        <div class="d-grid mt-3">
            <a href="../tuit.html" class="btn btn-primary btn-block rounded-pill">Tuit</a>
        </div>

    `);
}

export default NavigationSidebar;

