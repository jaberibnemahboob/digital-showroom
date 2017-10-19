let homePageIntroVideo = document.querySelector('.introVideoSection video');
let homePageIntroVideo_duration = homePageIntroVideo.duration;
homePageIntroVideo.addEventListener('ended',function(e){
    document.querySelector(".introVideoSection").style.display = "none";
},false);
setTimeout(fadeOutHomePageIntroVideo,300);
function fadeOutHomePageIntroVideo(){
    if(homePageIntroVideo.currentTime > (homePageIntroVideo.duration - 1.2)){
        document.querySelector(".introVideoSection").classList.add("fadeOut");
    }
    setTimeout(fadeOutHomePageIntroVideo,300);
}
