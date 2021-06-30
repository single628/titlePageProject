import { Router } from "./rotuer.js";


const answer = [1,2,3,0,1];
let score = 0;
let scoreTips='';
let i;
const scoreTipsArr=['你说，是不是把知识都还给小学老师了？','还不错，但还需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','你也太聪明啦，葡萄之家欢迎你！'];
const home = document.getElementsByClassName("home");
const item = document.getElementsByClassName("item");
const items = document.querySelector("#items");
const scores = document.getElementsByClassName("score");
const backimag = document.querySelector("#backimag");
const weekden = document.querySelector(".weekden");
const emit = document.getElementById("emit");

let router = window.Router;
router = new Router();
router.route('/', function () {
  for (let i = 0; i < home.length; i++) {
    scores[i].style.display = "none";
    home[i].style.display = "inline";
    document.getElementById("level").getElementsByTagName("span")[0].innerText = '第一周';
  }
});

router.route('/item', function () {
  for (let i = 0; i < item.length; i++) {
    home[i].style.display = "none";
    item[i].style.display = "inline";
  }
  for(let i = 0; i < scores.length; i++){
    scores[i].style.display = "none";
  }
  document.getElementById("level").getElementsByTagName("span")[0].innerText = "题目1";
  document.getElementById("topic_title").innerText = "题目1";
  items.style.display = "inline";
});

router.route('/score', function () {
  for (let i = 0; i < home.length; i++) {
    home[i].style.display = "none";
  }
  for (let i = 0; i < scores.length; i++) {
    backimag.style.display = "none";
    weekden.style.display = "none";
    emit.style.display = "none";
    scores[i].style.display = "inline";
  }
  answer.forEach((item,index) => {
    if(item == window.answerid[index]){
      score += 20;
      console.log(index);
    }
  });
  i = Math.ceil(score/20)-1;
  scoreTips = scoreTipsArr[i];
  document.getElementById("total-scores").innerHTML = score+"分！";
  document.getElementById("comment").innerHTML = scoreTips;
})

router.init();
export { router }