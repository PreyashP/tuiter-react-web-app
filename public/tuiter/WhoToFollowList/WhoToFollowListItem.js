// Who to Follow List Item

const WhoToFollowListItem = (who) => {
    return (`
    <div class="list-group-item list-group-item-action border-0">
    <div class="row">
        <div class="col-12 col-lg-3 col-xxl-2">
<!--        User image-->
            <img class="wd-follow-icon rounded-circle" src="../../images/${who.avatarIcon}">
        </div>
        
        <div class="col-12 mt-2 col-lg-5 col-xxl-7">
            <div class="text-white fw-bolder">
<!--            User Name-->
                ${who.userName} <i class="fas fa-check-circle"></i>
            </div>
            
            <div class="text-secondary text-white">
<!--            User tuiter handle-->
                @${who.handle}
            </div>
        </div>
        
        <div class="col-12 mt-2 col-lg-4 col-xxl-3 pt-2">
            <a href=# class="btn btn-primary btn-block rounded-pill">Follow</a>
        </div>
    
    </div>
</div>
`
    );
}
export default WhoToFollowListItem;
