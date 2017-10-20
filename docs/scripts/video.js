let homePageIntroVideo = document.querySelector('.introVideoSection video');
let homePageMainContent = document.querySelector("main");
let homePageHeaderContent = document.querySelector(".topHeaderSection");
let skipBtnContent = document.querySelector(".skip-btn").parentElement;

homePageMainContent.style.display = "none";
homePageHeaderContent.style.display = "none";


setTimeout(function(){homePageIntroVideo.play();},500);
homePageIntroVideo.addEventListener('click',function(e){
    homePageIntroVideo.play();
});

homePageIntroVideo.addEventListener('ended',function(e){
    document.querySelector(".introVideoSection").style.display = "none";
    homePageMainContent.style.display = "block";
    homePageHeaderContent.style.display = "block";
},false);

skipBtnContent.addEventListener('click',function(e){
    document.querySelector(".introVideoSection").style.display = "none";
    homePageMainContent.style.display = "block";
    homePageHeaderContent.style.display = "block";
},false);


setTimeout(fadeOutHomePageIntroVideo,300);
function fadeOutHomePageIntroVideo(){
    if(homePageIntroVideo.currentTime > (homePageIntroVideo.duration - 1.2)){
        document.querySelector(".introVideoSection").classList.add("fadeOut");
    }
    setTimeout(fadeOutHomePageIntroVideo,300);
}
