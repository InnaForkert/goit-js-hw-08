import Player from '@vimeo/player';

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

player.on("timeupdate", function() {
    player.getCurrentTime().then((seconds) => {
        localStorage.setItem("videoplayer-current-time", seconds);
    })
});

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));

