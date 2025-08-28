<template>
    <div class="containerW">

        <WebDesign_b1_header />

        <WebDesign_b1_ImageSlide />

        <WebDesign_b1_subContents />

        <WebDesign_b1_footer />
    </div>
</template>

<script setup>
import WebDesign_b1_header from './WebDesign_b1_header.vue';
import WebDesign_b1_ImageSlide from './WebDesing_b1_ImageSlide.vue';
import WebDesign_b1_subContents from './WebDesign_b1_subContents.vue';
import WebDesign_b1_footer from './WebDesign_b1_footer.vue';
</script>

<style scoped>
/* 컨테이너 */
.containerW>* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.containerW {
    width: 1200px;
    height: 700px;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
}
/* 컨테이너 */
</style>