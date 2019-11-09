<template>
    <div class="middle">
        <div class="fa">
            <router-link to="/news">推荐</router-link>
            <router-link to="/focus">关注</router-link>
            <router-link to="/about">程序人生</router-link>
            <router-link to="">Python</router-link>
            <router-link to="">Java</router-link>
            <router-link to="">前端</router-link>
            <router-link to="">架构</router-link>
            <router-link to="">区块链</router-link>
            <router-link to="">数据库</router-link>
            <router-link to="">游戏开发</router-link>
            <router-link to="">移动开发</router-link>
            <router-link to="">运维</router-link>
            <router-link to="">人工智能</router-link>
            <router-link to="">安全</router-link>
            <router-link to="">云计算/大数据</router-link>
            <router-link to="">研发管理</router-link>
            <router-link to="">物联网</router-link>
            <router-link to="">计算机基础</router-link>
            <router-link to="">音频开发</router-link>
            <router-link to="">其他</router-link>
        </div>
    </div>
</template>
<script>
import news from "@/components/news.vue"
import focus from "@/components/focus.vue"
export default {
    components:{
        news,
        focus
    }
}
</script>

<style scoped>
    .middle{
        display:flex;
        justify-content: center;
    }
    .fa{
        display:flex;
        flex-direction: column;
        margin-left:10%;
        background:#fff;
        width:100%;
    }
    .mo{
        margin-left:1%;
        width:70%;
        background:#fff;
    }
    .fa>a{
        display:block;
        height:40px;
        text-align:center;
        line-height:40px;
        text-decoration:none;
        color:rgb(53, 43, 43);
    }
    .fa>a:hover{
        background:#f44444;
        color:#fff;
    }
</style>