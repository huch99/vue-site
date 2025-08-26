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
import burrito from '../../assets/img_burrito.svg';
import salad from '../../assets/img_salad.svg';
import cake from '../../assets/img_cake.svg';
import soup from '../../assets/img_soup.svg';
import fish from '../../assets/img_fish.svg';
import pizza from '../../assets/img_pizza.svg';
import rice from '../../assets/img_rice.svg';

const imgList = [
    { url: burrito, name: 'Burrito' },
    { url: salad, name: 'Salad' },
    { url: cake, name: 'Cake' },
    { url: soup, name: 'Soup' },
    { url: fish, name: 'Fish' },
    { url: pizza, name: 'Pizza' },
    { url: rice, name: 'Rice' },
]
&lt;/script&gt;
    </pre>

    <button @click="() => view = false"> X </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import burrito from '../../assets/img_burrito.svg';
import salad from '../../assets/img_salad.svg';
import cake from '../../assets/img_cake.svg';
import soup from '../../assets/img_soup.svg';
import fish from '../../assets/img_fish.svg';
import pizza from '../../assets/img_pizza.svg';
import rice from '../../assets/img_rice.svg';

const imgList = [
    { url: burrito, name: 'Burrito' },
    { url: salad, name: 'Salad' },
    { url: cake, name: 'Cake' },
    { url: soup, name: 'Soup' },
    { url: fish, name: 'Fish' },
    { url: pizza, name: 'Pizza' },
    { url: rice, name: 'Rice' },
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