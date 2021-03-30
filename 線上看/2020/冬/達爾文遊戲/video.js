function home() {
    document.getElementById('home').style.display = 'unset';document.getElementById('video').style.display = 'none';
}

function video1() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('videodiv').style.display = 'unset';
    document.getElementById('video').src = 'https://kazeindex.herokuapp.com/IndexB/Video/Anime/2020/01/達爾文遊戲/Stream/達爾文遊戲_1080P_01.mp4';
}