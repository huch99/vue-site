<template>
    <div v-pre>
    &lt;figure v-for='x in imgList'&gt; <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;img :src='x.url'&gt;&lt;/img&gt; <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;figcaption&gt; &#123;&#123; x.name &#125;&#125; &lt;figcaption&gt; <br>
    &lt;/figure&gt;
    </div>
    <div>
        <figure v-for="x in imgList">
            <img :src="x.url"></img>
            <figcaption>{{ x.name }}</figcaption>
        </figure>
    </div>

    <pre>
        &lt;script setup&gt;
            const imgList = [
                {url: 'img_burrito.svg', name: 'Burrito'},
                {url: 'img_salad.svg', name: 'Salad'},
                {url: 'img_cake.svg', name: 'Cake'},
                {url: 'img_soup.svg', name: 'Soup'},
                {url: 'img_fish.svg', name: 'Fish'},
                {url: 'img_pizza.svg', name: 'Pizza'},
                {url: 'img_rice.svg', name: 'Rice'},
            ]
        &lt;/script&gt;
    </pre>
</template>

<script setup>
const imgList = [
    { url: 'img_burrito.svg', name: 'Burrito' },
    { url: 'img_salad.svg', name: 'Salad' },
    { url: 'img_cake.svg', name: 'Cake' },
    { url: 'img_soup.svg', name: 'Soup' },
    { url: 'img_fish.svg', name: 'Fish' },
    { url: 'img_pizza.svg', name: 'Pizza' },
    { url: 'img_rice.svg', name: 'Rice' },
]
</script>

<style scoped>
div {
    padding: 10px;
    border: 1px solid #000;
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