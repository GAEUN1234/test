// p_click을 클릭했을때 r_click,t_click의 border-top의 값은 사라지고 p_click의 border-top값이 나와야한다.
// p_click을 클릭했을 때, post_list가 활성화되고 tag_list, reels_list는 사라져야한다.

let pclick =document.querySelector(".p_click");
let rclick =document.querySelector(".r_click");
let tclick =document.querySelector(".t_click");
let postlist =document.querySelector(".post_list");
let reelslist =document.querySelector(".reels_list");
let taglist =document.querySelector(".tag_list");


function pClick(){
  rclick.style.borderTop="0";
  tclick.style.borderTop="0";
  pclick.style.borderTop="3px solid #aaa";
  postlist.style.display="flex";
  reelslist.style.display="none";
  taglist.style.display="none";
}

pclick.addEventListener('click',pClick);

function rClick(){
  pclick.style.borderTop="0";
  tclick.style.borderTop="0";
  rclick.style.borderTop="3px solid #aaa";
  reelslist.style.display="flex";
  postlist.style.display="none";
  taglist.style.display="none";
}

rclick.addEventListener('click',rClick);



function tClick(){
  pclick.style.borderTop="0";
  rclick.style.borderTop="0";
  tclick.style.borderTop="3px solid #aaa";
  taglist.style.display="flex";
  postlist.style.display="none";
  reelslist.style.display="none";
}

tclick.addEventListener('click',tClick);


for(let i=1; i<=9; i++){
  let post_list = document.querySelector(".post_list")
  let post_list_wrap =document.createElement("div");
  post_list_wrap.className="post_list_wrap"
  post_list_wrap.innerHTML=`
  <img src="./img/explore_img1.jpg" alt="x">
  <ul class="hover">
    <li><img src="img/explore_commet.png" alt="x"><span>0</span></li>
    <li><img src="img/explore_heart.png" alt="x"><span>0</span></li>
   </ul>
  `;
  post_list.appendChild(post_list_wrap);



}
  for(let i=1; i<=8; i++){
    let reels_list =document.querySelector(".reels_list")
    let reels_list_wrap =document.createElement("div");
    reels_list_wrap.className="reels_list_wrap"
    reels_list_wrap.innerHTML=`
    <img src="./img/explore_img1.jpg" alt="x">
    <ul class="hover">
      <li><img src="img/explore_commet.png" alt="x"><span>0</span></li>
      <li><img src="img/explore_heart.png" alt="x"><span>0</span></li>
     </ul>
    `;
    reels_list.appendChild(reels_list_wrap);
  }
 
  for(let i=1; i<=8; i++){
    let tag_list =document.querySelector(".tag_list")
    let tag_list_wrap =document.createElement("div");
    tag_list_wrap.className="tag_list_wrap"
    tag_list_wrap.innerHTML=`
    <img src="./img/explore_img1.jpg" alt="x">
    <ul class="hover">
      <li><img src="img/explore_commet.png" alt="x"><span>0</span></li>
      <li><img src="img/explore_heart.png" alt="x"><span>0</span></li>
     </ul>
    `;
    tag_list.appendChild(tag_list_wrap);
  }

  
