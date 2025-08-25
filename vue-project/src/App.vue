<script setup>
import Layout from './Layout.vue';
</script>

<template>
  <div class="container">
        <div class="header">
            <h1>정희찬</h1>
            <h1>Vue</h1>
        </div>
        <div class="section">
            <Layout />         
        </div>

        <div class="footer"></div>
    </div>
  
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  width: 100%;
  height: 100px;
  text-align: left;
  background-color: #005;
}

.header>h1 {
  display: inline-block;
  padding-left: 25px;
  color: #fff;
  line-height: 100px;
}

pre {
    text-align: left;
    border: 1px solid #000;
    padding: 10px;
}
</style>
