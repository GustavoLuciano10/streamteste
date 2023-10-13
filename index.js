const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);

var proc3;
let streamYT = (YTrtmp) => {
    console.log("streaming to youtube")
      proc3 = new ffmpeg({ source: 'http://acsa.ws:80/KmZV4gM2/frogtvteste/72040.m3u8', timeout: 0 })
      .addOption('-vcodec', 'libx264')
      .addOption('-acodec', 'aac')
      .addOption('-crf', 26)
      .addOption('-aspect', '256:144')
      .addOption('-f', 'flv')
      .withSize('256x144')
      .on('start', function(commandLine) {
      console.log('Query : ' + commandLine);
      })
      .on('error', function(err) {
      console.log('Error: ' + err.message);
      })
      .output('rtmps://live-api-s.facebook.com:443/rtmp/' + YTrtmp, function(stdout, stderr) {
        console.log('Convert complete' +stdout)
      })
      .run()
    }
    streamYT('FB-122113708892059021-0-AbwUCJGNxzN69uwD')

    console.log(proc3)
