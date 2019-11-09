<template>
    <div class="fa">
        <!-- 左侧 -->
        <div class="child1">
            <img src="../../public/img/news1.png" alt="">
            <div class="adall">
                <!-- 轮播图 -->
                <div class='swiper'>
                    <carousel></carousel>
                    <!-- <img src="../../public/img/swiper.jpg" alt=""> -->
                </div>
                <!-- 轮播图右侧静态图片 -->
                <div class="scale">
                    <div>
                        <img  height="100%" width="100%" src="../../public/img/scale.png" alt="">
                    </div>
                    <div>
                        <img height="100%" width="100%" src="../../public/img/news1.png" alt="">
                    </div>

                </div>
                
            </div>
            <button @click="getcontent()">您有新的推荐内容，点击查看 X </button>
            <!-- 左侧新闻 -->
            <div class="down-news" v-for="(item,index) in news" :key="index">
                <div class="title"><a href="javascript;">{{item.title}}</a></div>
                <div class="content"><p>{{item.content}}</p></div>
                <div class="user">
                    <img :src="require(`../../public/img/headicon/${item.imgurl}.jpg`)" alt="我的图呢？"><span>{{item.author}}{{item.imgurl}}</span>
                </div>
            </div>
            <!-- axios请求数据返回的news -->
            <hr>
            <p>axios请求得到的数据：</p>
            <p>news:{{news}}</p>
        </div>
        <!-- 右侧 -->
        <div class="child2">
            <!-- 静态图片广告 -->
            <img src="../../public/img/news-right1.jpg" alt="">
            <!-- 轮播图广告 静态暂代 -->
            <img src="../../public/img/news-right2.jpg" alt="">
            <div>
                <h3>今日推荐</h3>
                <div class="today-recommend">
                    <a href="javascript"><img src="../../public/img/today-recommend1.png" alt=""></a>
                    <a href="javascript"><span>嵌入式只能国际大会399元</span></a>
                </div>
                <div class="today-recommend">
                    <a href="javascript"><img src="../../public/img/today-recommend1.png" alt=""></a>
                    <a href="javascript"><span>嵌入式只能国际大会399元</span></a>
                </div>
                <div class="today-recommend">
                    <a href="javascript"><img src="../../public/img/today-recommend1.png" alt=""></a>
                    <a href="javascript"><span>嵌入式只能国际大会399元</span></a>
                </div>
                <div class="today-recommend">
                    <a href="javascript"><img src="../../public/img/today-recommend1.png" alt=""></a>
                    <a href="javascript"><span>嵌入式只能国际大会399元</span></a>
                </div>
                <div class="today-recommend">
                    <a href="javascript"><img src="../../public/img/today-recommend1.png" alt=""></a>
                    <a href="javascript"><span>嵌入式只能国际大会399元</span></a>
                </div>
                <div class="today-recommend">
                    <a href="javascript"><img src="../../public/img/today-recommend1.png" alt=""></a>
                    <a href="javascript"><span>嵌入式只能国际大会399元</span></a>
                </div>
                <div class="today-recommend">
                    <a href="javascript"><img src="../../public/img/today-recommend1.png" alt=""></a>
                    <a href="javascript"><span>嵌入式只能国际大会399元</span></a>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import carousel from './carousel.vue'
import axios from 'axios';
axios.defaults.baseURL="http://localhost:3000";
export default {
    data(){
        return{
            news:[],
        }
    },
    methods:{
        getcontent(){
            console.log("我想获得更多数据")
        },
        loadMore(){
            axios.get('news')
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                console.log(res.data.imgurl);
                // console.log(res.datas);
                this.news=res.data
            })
        }
    },
    created(){
        this.loadMore()
    },
    components:{
        carousel,
    }
}
    
</script>
<style scoped>
    h2{
        background:red;
    }
    .fa{
        display:flex;
        justify-content: center;
        background:#ccc;
    }
    .fa>.child1{
        width:80%;
        background:#fff;
    }
    .child1>img{
        width:100%;
    }
    .adall{
        display:flex;
        width:100%;
        border:1px solid red; 
    }
    .swiper{
        width:60%;
        /* height:270px; */
        /* border:1px solid red;  */
    }
    .scale{
        width:40%;
    }
    .scale>div{
        /* border:1px solid red; */
        height:50%;
        overflow:hidden;
    }
    .scale>div>img{
        height:100%;
        transition:1s
   
    }
    .scale>div>img:hover{
        transition: 1s;
        transform:scale(1.1)
    }

   
    .user{
        line-height: 1
    }
    .user>img{
        vertical-align: middle;
    }

    /* 左侧中间按钮 */
    .child1>button{
        width:100%;
        height:30px;
        background:#f44444;
        border:0;
    }
    /* 红色按钮下的新闻 */
    .down-news{
        padding:20px;
    }
    .down-news:hover{
        background:rgb(238, 238, 238)
    }
    .title{
        font-size:18px;
    }
    .title>a{
        font-weight: bolder;
        color:black;
        text-decoration: none;
    }
    .title>a:hover{
        color:#d44444
    }
    .content{
        font-size:13px;
    }
    .user{
        vertical-align: top;
    }
    .user>img{
        width:20px;
        height:20px;
        border-radius:50%
    }
    .user>span{
        font-size:15px;
    }

    /* 右侧 */
    .fa>.child2{
        width:25%;
        padding:5px;
        background-color:rgba(255, 255, 255, 0.723)
    }
    .child2>img{
        width:100%;
    }
    /* 今日推荐 */
    .today-recommend{
        width:100%;
        display:flex;
        margin-top:10px;
        /* background-color:#fff */
    }
    .today-recommend>a{
        text-decoration: none;
        color:black
    }

</style>