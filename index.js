const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);

var proc3;
let streamYT = (YTrtmp) => {
    console.log("streaming to youtube")
      proc3 = new ffmpeg({ source: 'http://acsa.ws:80/r4tSBeEJ/frogtvteste/72040.m3u8', timeout: 0 })
      .addOption('-vcodec', 'libx264')
      .addOption('-acodec', 'aac')
      .addOption('-crf', 26)
      .addOption('-aspect', '1920:1080')
      .addOption('-f', 'flv')
      .withSize('1920x1080')
      .on('start', function(commandLine) {
      console.log('Query : ' + commandLine);
      })
      .on('error', function(err) {
      console.log('Error: ' + err.message);
      })
      .output('rtmp://localhost/live/stream' + YTrtmp, function(stdout, stderr) {
        console.log('Convert complete' +stdout)
      })
      .run()
    }
    streamYT('')

    console.log(proc3)
