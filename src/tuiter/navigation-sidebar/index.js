import React from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";


const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a className="list-group-item">
                <i className="fab fa-tumblr pe-2"></i>
                Tuiter
            </a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                <i className="fas fa-home pe-2"></i>
                Home
            </Link>

            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                <i className="fas fa-hashtag pe-2"></i>
                Explore
            </Link>

            <a className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>
                <i className="fas fa-bell pe-2"></i>
                Notifications
            </a>

            <a className={`list-group-item ${active === 'messages' ? 'active' : ''}`}>
                <i className="fas fa-envelope pe-2"></i>
                Messages
            </a>

            <a className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}>
                <i className="fas fa-bookmark pe-2"></i>
                Bookmarks
            </a>

            <a className={`list-group-item ${active === 'lists' ? 'active' : ''}`}>
                <i className="fas fa-list pe-2"></i>
                Lists
            </a>

            <a className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                <i className="fas fa-user pe-2"></i>
                Profile
            </a>

            <a className={`list-group-item ${active === 'more' ? 'active' : ''}`}>
                <i className="fas fa-ellipsis-h pe-2"></i>
                More
            </a>
        </div>
    );
};
export default NavigationSidebar;