# 腾讯云直播前端




# 腾讯云直播前端

腾讯云直播推流器TXLivePusher ：https://webrtc-demo.myqcloud.com/push-sdk/v2/docs/TXLivePusher.html

这里是：直播和点播播放的 [Web 播放器（ TCPlayer ）](https://cloud.tencent.com/document/product/881/30818)的相关参数以及 API

##### 1.直播推流

直播推流需要第三方库

```js
<script src="https://video.sdk.qcloudecdn.com/web/TXLivePusher-2.0.3.min.js" charset="utf-8"></script>
```

直播推流代码

```js
 var livePusher = new TXLivePusher();
        console.log(livePusher);
        livePusher.setRenderView('id_local_video');
        // 设置视频质量
        livePusher.setVideoQuality('720p');
        // 设置音频质量
        livePusher.setAudioQuality('standard');
        // 自定义设置帧率
        livePusher.setProperty('setVideoFPS', 25);
        // 采集完摄像头和麦克风之后自动推流
        Promise.all([livePusher.startScreenCapture(), livePusher.startMicrophone()])
            .then(function () {
            //传入的是一个推流地址，后端返回的，把后端返回的一个地址前边的rtmp换成webrtc就可以了
                livePusher.startPush(推流地址)
                    .then(() => {
                        console.log('pushing');
                        if (livePusher.isPushing()) {
                            console.log('pushing');
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err);
            })

```

##### 2.直播拉流

直播拉流所需第三方库

```js
<link href="https://web.sdk.qcloud.com/player/tcplayer/release/v4.7.2/tcplayer.min.css" rel="stylesheet" />
    <!--如果需要在 Chrome 和 Firefox 等现代浏览器中通过 H5 播放 Webrtc 视频，需要在 tcplayer.vx.x.x.min.js 之前引入 TXLivePlayer-x.x.x.min.js。-->
    <!--有些浏览器环境不支持 Webrtc，播放器会将 Webrtc 流地址自动转换为 HLS 格式地址，因此快直播场景同样需要引入hls.min.x.xx.xm.js。-->
    <script src="https://web.sdk.qcloud.com/player/tcplayer/release/v4.7.2/libs/TXLivePlayer-1.2.3.min.js"></script>
    <!--如果需要在 Chrome 和 Firefox 等现代浏览器中通过 H5 播放 HLS 协议的视频，需要在 tcplayer.vx.x.x.min.js 之前引入 hls.min.x.xx.xm.js。-->
    <script src="https://web.sdk.qcloud.com/player/tcplayer/release/v4.7.2/libs/hls.min.1.1.6.js"></script>
    <!--如果需要在 Chrome 和 Firefox 等现代浏览器中通过 H5 播放 FLV 格式的视频，需要在 tcplayer.vx.x.x.min.js 之前引入 flv.min.x.x.x.js。-->
    <script src="https://web.sdk.qcloud.com/player/tcplayer/release/v4.7.2/libs/flv.min.1.6.3.js"></script>
    <!--如果需要在 Chrome 和 Firefox 等现代浏览器中通过 H5 播放 DASH 视频，需要在 tcplayer.vx.x.x.min.js 之前引入 dash.min.x.x.x.js。-->
    <script src="https://web.sdk.qcloud.com/player/tcplayer/release/v4.7.2/libs/dash.all.min.4.5.2.js"></script>
    <!--播放器脚本文件-->
    <script src="https://web.sdk.qcloud.com/player/tcplayer/release/v4.7.2/tcplayer.v4.7.2.min.js"></script>

```

播放容器

```html
<video id="player-container-id" preload="auto" playsinline webkit-playsinline></video>
```

拉流js

```js
var player = TCPlayer('player-container-id', {}); // player-container-id 为播放器容器 ID，必须与 html 中一致
        player.src(url); // url 播放地址
```

> [!TIP]
>
> #### 直播视频全屏canvas元素无法在最上层
>
> 直播弹幕无法在最上层，将z-index设置为最大也没效果，那是因为第三方库用了一个toplayer的东西将播放视频的元素放到最顶层了，用css设置的东西没效果，解决方案就是设置个延时器，等到第三方库把元素放置到页面之后dom操作canvas元素，将其放置到设置toplayer的盒子里边，这样就可以了
>


