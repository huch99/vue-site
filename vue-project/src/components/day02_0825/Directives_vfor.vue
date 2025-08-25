<template>
    <div>
        <figure v-for="x in imgList">
            <img :src="x.url"></img>
            <figcaption>{{ x.name }}</figcaption>
        </figure>
    </div>

    <button @click="() => view = true"><>코드 보기</button>

    <div v-show="view" class="codeView">
    <pre>
&lt;template&gt;
    &lt;div&gt;
        &lt;figure v-for='x in imgList'&gt; 
        &lt;img :src='x.url'&gt;&lt;/img&gt; 
        &lt;figcaption&gt; &#123;&#123; x.name &#125;&#125; &lt;figcaption&gt; 
        &lt;/figure&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
    const imgList = [
        { url: '/public/img_burrito.svg', name: 'Burrito' },
        { url: '/public/img_salad.svg', name: 'Salad' },
        { url: '/public/img_cake.svg', name: 'Cake' },
        { url: '/public/img_soup.svg', name: 'Soup' },
        { url: '/public/img_fish.svg', name: 'Fish' },
        { url: '/public/img_pizza.svg', name: 'Pizza' },
        { url: '/public/img_rice.svg', name: 'Rice' },
    ]
&lt;/script&gt;
    </pre>

    <button @click="() => view = false"> X </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const imgList = [
    { url: '/public/img_burrito.svg', name: 'Burrito' },
    { url: '/public/img_salad.svg', name: 'Salad' },
    { url: '/public/img_cake.svg', name: 'Cake' },
    { url: '/public/img_soup.svg', name: 'Soup' },
    { url: '/public/img_fish.svg', name: 'Fish' },
    { url: '/public/img_pizza.svg', name: 'Pizza' },
    { url: '/public/img_rice.svg', name: 'Rice' },
]

const view = ref(false);
</script>

<style scoped>
div {
    padding: 10px;
    display: flex;
}

figure {
    width: 80px;
    padding: 10px;
    margin: 10px;
    background-color: lightskyblue;
    border-radius: 5px;
}

figcaption {
    text-align: center;
}

img {
    width: 100%;
}
</style>