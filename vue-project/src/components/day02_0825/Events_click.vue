<template>
    <div class="lightContainer">
        <div class="lightDiv">
            <div v-show="lightOn"></div>
            <img src="/img_lightBulb.svg">
        </div>

        <button class="lightBtn" @click="lightOn = !lightOn">Switch Light</button>
    </div>

    <div class="imgContainer">
        <img :src="imgUrl">
        <ul>
            <li v-for="food in imgList" @click = 'imgUrl = food.url'>
                {{ food.name }}
            </li>
        </ul>
    </div>
    <button @click="view = true">
        <>코드 보기
    </button>

    <div v-show="view" class="codeView">
        <pre>
&lt;template&gt;
    &lt;div class='lightContainer'&gt;
        &lt;div class='lightDiv'&gt;
            &lt;div v-show='lightOn'&gt;&lt;/div&gt;
            &lt;img src='/img_lightBulb.svg'&gt;
        &lt;/div&gt;

        &lt;button class='lightBtn' @click='lightOn = !lightOn'&gt;Switch Light&lt;/button&gt;
    &lt;/div&gt;

    &lt;div class='imgContainer'&gt;
        &lt;img :src='{imgUrl}'&gt;
        &lt;ul&gt;
            &lt;li v-for='food in imgList' @click='imgUrl = food.url'&gt;
                &#123;&#123; food.name &#125;&#125;
            &lt;/li&gt;
        &lt;/ul&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const imgList = [
    { name: 'Burrito', url: 'img_burrito.svg' },
    { name: 'Salad', url: 'img_salad.svg' },
    { name: 'Cake', url: 'img_cake.svg' },
    { name: 'Soup', url: 'img_soup.svg' },
    { name: 'Fish', url: 'img_fish.svg' },
    { name: 'Pizza', url: 'img_pizza.svg' },
    { name: 'Rice', url: 'img_rice.svg' }
];

const imgUrl = ref('img_pizza.svg');

const lightOn = ref(false);
&lt;/script&gt;
        </pre>

        <button @click="view = false"> X </button>
    </div>

</template>

<script setup>
import { ref } from 'vue';

const imgList = [
    { name: 'Burrito', url: 'img_burrito.svg' },
    { name: 'Salad', url: 'img_salad.svg' },
    { name: 'Cake', url: 'img_cake.svg' },
    { name: 'Soup', url: 'img_soup.svg' },
    { name: 'Fish', url: 'img_fish.svg' },
    { name: 'Pizza', url: 'img_pizza.svg' },
    { name: 'Rice', url: 'img_rice.svg' }
];

const imgUrl = ref('img_pizza.svg');

const lightOn = ref(false);
const view = ref(false);
</script>

<style scoped>
.lightContainer {
    width: 200px;
    height: 200px;
    margin: 0 auto;
}

.lightDiv {
    position: relative;
    width: 150px;
    height: 150px;
    margin: 0 auto;
}

.lightDiv>img {
    position: relative;
    width: 100%;
    height: 100%;
}

.lightDiv>div {
    position: absolute;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    background-color: yellow;
}

.lightBtn {
    padding: 10px;
    display: block;
    margin: 0 auto;
}

.imgContainer {
    width: 300px;
    margin: 10px auto;
    border-top: 1px solid #000;
    padding-top: 10px;
}

.imgContainer img {
    float: right;
    width: 150px;
}

.imgContainer li:hover {
    cursor: pointer;
    background-color: #ddd;
}

.imgContainer ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.imgContainer li {
    padding-left: 6px;
    border-radius: 5px;
    width: 70px;
}
</style>