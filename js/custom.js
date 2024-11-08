/* 站点运行时间 */
function runtime() {
    window.setTimeout("runtime()", 1000);
    /* 请修把这里的建站时间换为你自己的 */
    let startTime = new Date('05/23/2023 08:00:00');
    let endTime = new Date();
    let usedTime = endTime - startTime;
    let days = Math.floor(usedTime / (24 * 3600 * 1000));
    let leavel = usedTime % (24 * 3600 * 1000);
    let hours = Math.floor(leavel / (3600 * 1000));
    let leavel2 = leavel % (3600 * 1000);
    let minutes = Math.floor(leavel2 / (60 * 1000));
    let leavel3 = leavel2 % (60 * 1000);
    let seconds = Math.floor(leavel3 / (1000));
    let runbox = document.getElementById('run-time');
    runbox.innerHTML = '本站已运行<i class="far fa-clock fa-fw"></i> '
        + ((days < 10) ? '0' : '') + days + ' 天 '
        + ((hours < 10) ? '0' : '') + hours + ' 时 '
        + ((minutes < 10) ? '0' : '') + minutes + ' 分 '
        + ((seconds < 10) ? '0' : '') + seconds + ' 秒 ';
}
runtime();


/* 返回随机颜色 */
function randomColor() {
    return "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")";
}

/* 点击生成字符特效 */
var a_idx = 0;
var a_click = 1;
/* 生成的字符内容 */
var a = new Array("♥","˘ᗜ˘","♬","❤");
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        /* 点击频率，点击几次就换文字 */
        var frequency = 2;
        if (a_click % frequency === 0) {

            var $i = $("<span/>").text(a[a_idx]);
            a_idx = (a_idx + 1) % a.length;
            var x = e.pageX,
                y = e.pageY;
            $i.css({
                "z-index": 9999,
                "top": y - 20,
                "left": x,
                "position": "absolute",
                "font-weight": "bold",
                "color": randomColor(),
                "-webkit-user-select": "none",
                "-moz-user-select": "none",
                "-ms-user-select": "none",
                "user-select": "none"
            });
            $("body").append($i);
            $i.animate({
                    "top": y - 180,
                    "opacity": 0
                },
                1500,
                function() {
                    $i.remove();
                });

        }
        a_click ++;

    });
});

/* 离开当前页面时修改网页标题，回到当前页面时恢复原来标题 */
window.onload = function() {
    var OriginTitile = document.title;
    var titleTime;
    document.addEventListener('visibilitychange', function() {
        if(document.hidden) {
            $('[rel="icon"]').attr('href', "/failure.ico");
            $('[rel="shortcut icon"]').attr('href', "/failure.ico");
            document.title = '(つェ⊂)我藏好了哦~';
            clearTimeout(titleTime);
        } else {
            $('[rel="icon"]').attr('href', "/favicon.ico");
            $('[rel="shortcut icon"]').attr('href', "/favicon.ico");
            document.title = '(⁎˃ᴗ˂⁎)被你发现啦~';
            titleTime = setTimeout(function() {
                document.title = OriginTitile;
            }, 2000);
        }
    });
}

