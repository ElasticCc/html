/**
 * Created by user on 2017/8/15.
 */
$(function(){

//陕西馆购物车下拉鼠标浮上去效果
$(".gouwuche").mouseenter(function(){
    $(".gouwuche").animate({"width":"190px"},600)
    $(".img3").animate({"left":"-35px"}, 600);
    $(".img4").animate({"left":"35px"},600)
    $(".img4").attr("src","img/shang.png");
    $(".kong1").css("display","block")
});
    //陕西馆购物车下拉鼠标离开效果
      $(".gouwuche").mouseleave(function(){
        $(".gouwuche").animate({"width":"155px"},600)
        $(".img3").animate({"left":"0px"}, 600);
        $(".img4").animate({"left":"0px"},600)
        $(".img4").attr("src","img/xia.png");
        $(".kong1").css("display","none")
    }
);
    //$(".img2").css("display","block")
    //$(".img2").animate({"height":"78px","width":"140px"},500)
    $(".img2").animate({"left":"0px"},500);


    //轮播图特效
    var index = 0
    function banner(){
        index++
        if(index == 3){
            index = 0
        }
        //图片
        $(".tu img").css("display","none")
        $(".tu img").eq(index).css("display","block")

        //圆点
        $(".dian li").css("background-color","grey")
        $(".dian li").eq(index).css("background-color","#C2191F")



    }//轮播特效结束符
     var t = setInterval(banner,1500)
    //移入图片移除定时器
    $(".banner").mouseover(function(){
        clearInterval(t)
    });
    //移出图片恢复时器器
    $(".banner").mouseout(function(){
        t = setInterval(banner,1500)
    });

    $(".dian li").mouseover(function(){
        var page = $(this).index();
        index = page
        $(".tu img").css("display","none")
        $(".tu img").eq(index).css("display","block")
        //圆点
        $(".dian li").css("background-color","grey")
        $(".dian li").eq(index).css("background-color","#C2191F")
    })

    //按钮
    $(".banner").mouseover(function(){
        $(".right").css("display","block")
        $(".left").css("display","block")
    })

    $(".banner").mouseout(function(){
        $(".right").css("display","none")
        $(".left").css("display","none")
    });
    //左按钮
    $(".left").click(function(){
        $(".tu img").css("display","none")
        $(".dian li").css("background-color","grey")
        index = index-1
        if(index<0){
            index =2
        }
        $(".tu img").eq(index).css("display","block")
        $(".dian li").eq(index).css("background-color","#C2191F")
    });

    //右按钮
    $(".right").click(function(){
        $(".tu img").css("display","none")
        $(".dian li").css("background-color","grey")
        index = index+1
        if(index == 3){
            index =0
        }
        $(".tu img").eq(index).css("display","block")
        $(".dian li").eq(index).css("background-color","#C2191F")
    });








});//函数结束符