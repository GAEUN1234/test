for(let i=1; i<=5; i++){
  let reels_wrap = document.querySelector(".reels_wrap");
  let reels = document.createElement("div");
  reels.className="reels"
  reels.innerHTML=`
  <div class="reels_img">
   <ul>
    <li>
     <img src="img/explore_img5.jpg" alt="x">
    </li>
   </ul>
   <div class="reels_txt">
    <ul class="reels_id">
     <li><img src="img/zzangah.PNG" alt="x"></li>
     <li>Instar_id${i}</li>
     <li><p>팔로우</p></li>
    </ul>
    <ul class="reels_contents"></ul>
    <ul class="reels_audio"></ul>
   </div>
  </div>
  <div class="reels_comment">
   <ul>
    <li><img class="like" src="img/like.png" alt="x">
    <img class="hate" src="img/hate.png" alt="x"><p class="like_cnt">0</p></li>
    <li><img src="img/comment.png" alt="x"><p>0</p></li>
    <li><img src="img/dm.png" alt="x"></li>
    <li><img class="scrap" src="img/scrap.png" alt="x">
    <img class="save" src="img/save.png" alt="x"></li>
    <li><p class="add_txt">···</p></li>
    <li><img src="img/zzangah.PNG" alt="x"></li>
   </ul>
  </div>
 <!-- reels r1 end -->
  `;
  reels_wrap.appendChild(reels);
  reelsHandler(reels);
}

// 좋아요 /스크랩 클릭 script
function reelsHandler(reels){
  let like = reels.querySelector(".like");
  let hate = reels.querySelector(".hate");
  let scrap = reels.querySelector(".scrap");
  let save= reels.querySelector(".save");
  let LikeNum = reels.querySelector(".like_cnt");


  function likeClick(){
    like.style.display="none";
    hate.style.display="inline";
    let LikeCnt = parseInt(LikeNum.textContent);

    LikeCnt++
    LikeNum.textContent = LikeCnt;
  }

  like.addEventListener('click',likeClick);

  function HateClick(){
    like.style.display="inline";
    hate.style.display="none";
    let LikeCnt = parseInt(LikeNum.textContent);

    LikeCnt--
    LikeNum.textContent = LikeCnt;

  }

  hate.addEventListener('click',HateClick);

  function scrapClick(){
    scrap.style.display="none";
    save.style.display="inline";
    save.style.width="22px";
    save.style.marginRight="2px";
  }
  scrap.addEventListener('click',scrapClick);


  function saveClick(){
    save.style.display="none";
    scrap.style.display="inline";
  }

  save.addEventListener('click',saveClick);
}