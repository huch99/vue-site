<template>
    <div class="imgSlide">
        <div class="imgSlide-hidden">
            <img v-for="img in images" :src="img">
        </div>

        <button class="prevBtn">⟨</button>
        <button class="nextBtn">⟩</button>
    </div>
</template>

<script setup>
import img1 from '../../../public/img_slide1.jpg';
import img2 from '../../../public/img_slide2.jpg';
import img3 from '../../../public/img_slide3.jpg';

const images = [
    img1, img2, img3
];
</script>

<style scoped>
/* 이미지 슬라이드 영역 */

.imgSlide {
    width: 1200px;
    height: 300px;    
    overflow: hidden;
    position: relative;
}

.imgSlide-hidden {
    width: 3600px;
    height: 100%;
    display: flex;
    flex-direction: row;
}

.imgSlide-hidden > img {
    width: 1200px;
    height: 300px;
    object-fit: cover;
    z-index: -10;
}

.imgSlide > button {
    position: absolute;
    top: 80px;
    background-color: rgba(0,0,0,0%);
    border: none;
    color: #fff;
    font-size: 100px;
    cursor: pointer;
}

.prevBtn {
    left: 10px;
}

.nextBtn {
    right: 10px;
}


/* 이미지 슬라이드 영역 */
</style>