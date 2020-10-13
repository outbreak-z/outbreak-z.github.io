  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Replaces the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.
  var player;
  function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
        height: '2200px',
        width:'110%',
        videoId: 'akGZ6AQfgw0',
        playerVars: {
          enablejsapi:1,
          origin:document.domain,
          rel:0,
          autoplay: 1,
          loop: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          hl: 'pt-br',
          modestbranding: 1,
          showinfo: 0,
          autohide: 1,
          color: 'white',
          iv_load_policy: 3,
          theme: 'light',
          playsinline:1,
          start:50,
          end:5000
        },
        events: {
          'onReady': onPlayerReady,
          onStateChange: function(e){
            if (e.data === YT.PlayerState.ENDED) {
                player.playVideo(); 
            }
          }
        }

    });
  }

function onPlayerReady(event){
    player.mute();
}
