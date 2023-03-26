import NavigationSidebar from "../NavigationSidebar/index.js";
import HomeComponent from "../home_component/HomeComponent.js";
import PostSummaryList from "../PostSummaryList/index.js";


function homeComponent() {
    $('#wd-home').append(`
  <div class="row mt-2">
  
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
        ${NavigationSidebar('home')}
   </div>
   
   <div class="col-10 col-lg-8 col-xl-7">
    ${HomeComponent()}
    
   </div>
   
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-3 col-xl-3">
    ${PostSummaryList()}
    
   </div>
  </div>
  
   `);
}

$(homeComponent);