<template>
    <div class="layoutContainer">
        <ul>
            <li v-for="(x, xIndex) in dates" :key="xIndex" @mouseover="() => showState[x] = true"
                @mouseleave="() => showState[x] = false">
                {{ x }}
                <ul v-show="showState[x]">
                    <li v-for="(y, yIndex) in filteredLinks(x)" :key="yIndex" class="subMenuList">
                        <router-link :to='y.link' class="router-list">
                            {{ y.title }}
                        </router-link>
                    </li>
                </ul>
            </li>

        </ul>
        <div class="routerView">
            <router-view></router-view>
        </div>
    </div>

</template>

<script setup>
import { reactive, ref } from 'vue';

const dates = ['day02 - 0825', 'day03 - 0826','day04 - 0827'];

const links = [
    { link: '/vbind', title: 'v-bind', dateTitle: 'day02 - 0825' },
    { link: '/vif', title: 'v-if', dateTitle: 'day02 - 0825' },
    { link: '/vshow', title: 'v-show', dateTitle: 'day02 - 0825' },
    { link: '/vfor', title: 'v-for', dateTitle: 'day02 - 0825' },

    { link: '/click', title: 'event - click', dateTitle: 'day03 - 0826' },
    { link: '/input', title: 'event - input', dateTitle: 'day03 - 0826' },
    { link: '/mousemove', title: 'event - mousemove', dateTitle: 'day03 - 0826' },
    { link: '/methods', title: 'methods', dateTitle: 'day03 - 0826' },
    { link: '/modifiers', title: 'event - modifiers', dateTitle: 'day03 - 0826' },
    
    { link: '/form', title: 'form', dateTitle: 'day04 - 0827' },
    { link: '/vmodel', title: 'form - vmodel', dateTitle: 'day04 - 0827' },
    { link: '/classbind', title: 'class - bind', dateTitle: 'day04 - 0827' },
    { link: '/computed', title: 'computed', dateTitle: 'day04 - 0827' },
    { link: '/watchers', title: 'watchers', dateTitle: 'day04 - 0827' },

]

const showState = reactive({});

function filteredLinks(date) {
    return links.filter(link => link.dateTitle === date);
}
</script>

<style scoped>
.layoutContainer {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
}

.layoutContainer>ul {
    width: 200px;
    height: 100%;
    list-style-type: none;
    text-align: left;
    padding: 10px;
    background-color: #005;
    color: #fff;
    margin-top: 5px;
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

.routerView {
    padding: 10px;
}

.router-list {
    color: #fff;
    text-decoration: none;
}

.subMenuList {
    width: 100%;
    border-bottom: 1px solid #fff;
}

.router-list:hover {
    font-weight: bold;

}
</style>