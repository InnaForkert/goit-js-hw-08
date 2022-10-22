import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const _ = require('underscore');

player.on(
  'timeupdate',
  _.throttle(function () {
    player.getCurrentTime().then(seconds => {
      localStorage.setItem('videoplayer-current-time', seconds);
    });
  }, 1000)
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
