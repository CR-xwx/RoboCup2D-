 //获取音频对象
var music = document.getElementById("audio");
//获取音量调节进度条
var volume = document.getElementById("volume ");
//获取音乐“播放器/暂停”按钮
var toggleBtn = document.getElementById("toggleBtn");
//获取当前播放的音乐标题
var title = document.getElementById("title");
//音乐路径列表
var list = new Array("images/MyMusicVideo/music/Waka Waka (This Time For Africa).mp3", "images/MyMusicVideo/music/Love Story-Taylor Swift.mp3", "images/MyMusicVideo/music/心墙DJ版.mp3");
//音乐标题列表
var titleList = new Array("Waka Waka (This Time For Africa)", "Love Story-Taylor Swift","心墙DJ版");
var i = 0;
//定义当前是第几首曲目
//音乐播放与暂停切换方法
function toggleMusic() {
    if (music.paused) {
        music.play();
        //播放音乐
        toggleBtn.innerHTML = '<img src="images/MyMusicVideo/pause.png" width="50" height="50"/>';
    } else {
        music.pause();
        //暂停音乐
        toggleBtn.innerHTML = '<img src="images/MyMusicVideo/play.png" width="50" height="50"/>';
    }
}
//设置音量大小
function setVolume() {
    music.volume = volume.value;
}
//切换下一首歌曲
function nextMusic() {
    if (i == list.length - 1)
        i = 0;
    else
        i++;
        music.pause();
        music.src = list[i];
        title.innerHTML = titleList[i];
        music.play();
}
//切换上一首歌曲
function lastMusic() {
   if (i == 0)
        i = list.length - 1;
   else
        i--;
        music.pause();
        music.src = list[i];
        title.innerHTML = titleList[i];
        music.play();
}
//视频//获取video对象
var screen = document.getElementById("screen");
//跳转播放时间
function playCourse(time) {
    //重置当前播放时间
   creen.currentTime = time;
    //继续播放视频
    screen.play();
}