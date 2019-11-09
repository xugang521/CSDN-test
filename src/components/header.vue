<template>
<div id="yeye">
        <div class="fa">
            <a href="https://www.csdn.net/"><img src="../../public/img/csdn-logo_.png" alt=""></a>
            <div class="child1">
                <a href="">首页</a>
                <a href="">博客</a>
                <a href="">学院</a>
                <a href="">下载</a>
                <a href="">论坛</a>
                <a href="">图文课</a>
                <a href="">问答</a>
                <a href="">商城</a>
                <a href="">活动</a>
                <a href="">专题</a>
                <a href="">招聘</a>
                <a href="">ITeye</a>
                <a href="">GitChat</a>
                <a href="">APP</a>
                <a href="">VIP会员</a>
            </div>
            <input type="text">
            <a href="" class="weibo">写博客</a>
            <div class="child2">
                <a href=""><img src="../../public/img/messageIcon.png" alt=""></a>
                <a href=""><img src="../../public/img/2_xugang1421.jpg" alt=""></a>
            </div>
        </div>
        </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

    /* 设置父元素弹性 */
    .fa{
        display:flex;
        justify-content: center;
    }
    /* CSDN图片 */
    .fa>a>img{
      height: 50px;
    }
    /* 首页a标签->VIP会员的父div*/
    .fa>.child1{
        margin-top:10px;
    }
    /* 首页a标签->vip会员样式 */
    .child1>a{
        text-decoration:none;
        font-size: 20px;
        padding-left: 10px;
        
    }
    /* 输入框 */
    .fa>input{
        height:24px;
        margin-top:10px;
    }
    
    /* child2样式（输入框右侧的div） */
    .child2{
        font-size:20px;
        margin-top:10px;
    }
    .fa>.weibo{
        margin-top:10px;
    }
    .child2>a>img{
        height:30px;
        border-radius: 50%;
    }
    .fa>a{
        text-decoration:none;
        color:brown;
        font-size:20px;
    }
</style>>
