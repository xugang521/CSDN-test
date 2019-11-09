<template>
  <div id="app">
    <div id="header">
      <my-header></my-header>
    </div>
    <div class="down">
      <div class="child1">
        <left-nav></left-nav>
      </div>
      <div class="child2">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: rgb(245, 245, 245);
}
.down{
  display:flex;
  justify-content: center;
}
.down>.child1{
  width:8%;
}
.down>.child2{
  margin-left:5px;
  width:70%;
}


</style>
