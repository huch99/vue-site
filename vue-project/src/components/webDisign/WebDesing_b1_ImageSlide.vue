<template>
    <div class="imgSlide" @mouseenter="pauseSlide" @mouseleave="startSlide">
        <div class="imgSlide-hidden"
            :style="{ transform: `translateX(-${currentIndex * 1200}px)`, transition: isTransition ? 'transform 0.5s ease-in-out' : 'none'}"
            @transitionend="handleTransitionEnd">
            <img v-for="(img, index) in loopImages" :src="img" :key="index">
            
        </div>
        

        <button class="prevBtn" @click="prevSlide">⟨</button>
        <button class="nextBtn" @click="nextSlide">⟩</button>

        
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import img1 from '../../../public/img_slide1.jpg';
import img2 from '../../../public/img_slide2.jpg';
import img3 from '../../../public/img_slide3.jpg';

const images = [
    img1, img2, img3
];
const loopImages = [images[images.length - 1], ...images, images[0]];

const currentIndex = ref(1); // 원본 첫 이미지부터 시작
const isTransition = ref(true);

// 이전 버튼
const prevSlide = () => {
    currentIndex.value--;
    isTransition.value = true;
};

// 다음 버튼
const nextSlide = () => {
    currentIndex.value++;
    isTransition.value = true;
};

// transition 끝났을 때 위치 보정
const handleTransitionEnd = () => {
    if(currentIndex.value === loopImages.length - 1) {
        // 마지막 (복제된 첫 이미지) -> 첫 번째 원본으로 점프
        isTransition.value = false;
        currentIndex.value = 1;
    }
    else if(currentIndex.value === 0) {
        // 처음 (복제된 마지막 이미지) -> 마지막 원본으로 점프
        isTransition.value = false;
        currentIndex.value = images.length;
    }
};

// 자동 슬라이드
let slideInterval = null;

const startSlide = () => {
    if(!slideInterval) {
        slideInterval = setInterval(nextSlide, 3000);
    }
};

const pauseSlide = () => {
    clearInterval(slideInterval);
    slideInterval = null;
};

onMounted(() => {
    startSlide();
});

onUnmounted(() => {
    pauseSlide();
});
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
    width: 6000px;
    height: 100%;
    display: flex;
    flex-direction: row;
    transition: transform 0.5s ease-in-out;
}

.imgSlide-hidden > img {
    width: 1200px;
    height: 300px;
    object-fit: cover;
    position: relative;
}

.imgSlide-hidden > img:hover {
    opacity: 0.3;
}

.imgSlide > button {
    position: absolute;
    top: 80px;
    background-color: rgba(0,0,0,0%);
    border: none;
    color: #fff;
    font-size: 100px;
    cursor: pointer;
    z-index: 10;
}

.prevBtn {
    left: 10px;
}

.nextBtn {
    right: 10px;
}
/* 이미지 슬라이드 영역 */
</style>