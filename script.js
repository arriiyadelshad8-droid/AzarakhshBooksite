// تابع برای شروع ویدیو و حذف عکس
function startVideo() {
    const overlay = document.getElementById('imageOverlay');
    const video = document.getElementById('myVideo');

    // محو کردن عکس
    overlay.style.opacity = '0';
    
    // پخش ویدیو بعد از اتمام انیمیشن محو شدن
    setTimeout(() => {
        overlay.style.display = 'none';
        video.play();
    }, 800);
}

// تابع فول اسکرین کردن قاب
function toggleFullScreen() {
    const elem = document.getElementById("mainContainer");
    if (!document.fullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
// تابع پخش ویدیو
function playVid() {
    const video = document.getElementById('myVideo');
    video.play();
}

// تابع توقف ویدیو
function pauseVid() {
    const video = document.getElementById('myVideo');
    video.pause();
}

