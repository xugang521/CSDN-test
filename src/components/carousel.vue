<template>
    <div>
        <div class="block">
        <el-carousel>
            <el-carousel-item v-for="(item,index) in lists" :key="index">
            <img height="100%" width="100%" :src="item.imgurl" alt="我的图呢？">
            </el-carousel-item>
        </el-carousel>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        lists:[
          {imgurl:require("../assets/1.png")},
          {imgurl:require("../assets/2.png")},
          {imgurl:require("../assets/3.png")},
          {imgurl:require("../assets/4.png")}
          // {imgurl:"../assets/4.png"}
        ]
      };
    }
  }
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>