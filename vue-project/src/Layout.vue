<template>
    <div class="layoutContainer">
        <ul>
            <li @mouseover="(e) => show = true" @mouseleave="show = false">
                day02 - 0825
                <ul v-show="show">
                    <li><router-link to="/vbind" :style="{ color: '#fff' }">v-bind</router-link></li>
                    <li><router-link to="/vif" :style="{ color: '#fff' }">v-if</router-link></li>
                    <li><router-link to="/vshow" :style="{ color: '#fff' }">v-show</router-link></li>
                </ul>
            </li>

        </ul>
        <div class="routerView">
            <router-view></router-view>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';

const show = ref(false);
</script>

<style scoped>
.layoutContainer {
    display: flex;
    flex-direction: row;
    width: 100%;
}

.layoutContainer>ul {
    width: 200px;
    height: auto;
    list-style-type: none;
    text-align: left;
    padding: 10px;
    background-color: #005;
    color: #fff;
}

.layoutContainer>ul>li {
    padding: 5px 15px;
    cursor: pointer;
}

.layoutContainer>ul>li>ul {
    list-style-type: none;
    color: #fff;
    padding: 10px;
    cursor: pointer;
}

.layoutContainer>.routerView {
    width: calc(100% - 200px);
}
</style>