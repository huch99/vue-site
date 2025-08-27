<template>
    <div class="containerW">

        <div class="headerW">
            <div class="header-logo">대한은행</div>
            <div class="header-mainMenu">
                <ul>
                    <li>개인
                        <ul class="header-subMenu">
                            <li v-for="menu in menuPerson">{{ menu }}</li>
                        </ul>
                    </li>
                    <li>기업
                        <ul class="header-subMenu">
                            <li v-for="menu in menuCompany">{{ menu }}</li>
                        </ul>
                    </li>
                    <li>금융상품
                        <ul class="header-subMenu">
                            <li v-for="menu in menuProduction">{{ menu }}</li>
                        </ul>
                    </li>
                    <li>카드
                        <ul class="header-subMenu">
                            <li v-for="menu in menuCard">{{ menu }}</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <div class="imgSlide">
            <div v-for="img in images"
                :style="{background: 'url('+ img +')'}"
            ></div>
        </div>

        <div class="subContents">
            <div class="subContents-Notice">
                <div class="subContents-Notice-tab">
                    <div @click="noticeOn = true" :class="{ collected: noticeOn }">공지사항</div>
                    <div @click="noticeOn = false" :class="{ collected: !noticeOn }">갤러리</div>
                </div>
                <div class="subContents-Notice-contents">
                    <div v-show="noticeOn">
                        <ul class="subContents-Notice-contents-noticeList">
                            <li @click="activeIndex = index" v-for="(notice, index) in noticeList" :key="index">
                                {{ notice.title }} <span>{{ notice.date }}</span>
                                <div v-show="activeIndex === index" class="noticeBox">
                                    <h3>{{ notice.title }}</h3>
                                    <p>{{ notice.content }}</p>
                                    <button @click.stop="activeIndex = null">닫기</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div v-show="!noticeOn">갤러리 내용</div>
                </div>
            </div>

            <div class="subContents-Banner">배너</div>

            <div class="subContents-Link">바로가기</div>
        </div>

        <div class="footerW">
            <div class="footer-logo">대한은행</div>
            <div class="footer-subContainer">
                <div class="footer-menu">하단 메뉴</div>
                <div class="footer-copyright">Copyright</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted, onBeforeUnmount } from 'vue';
import img1 from '../../../public/img_slide1.jpg';
import img2 from '../../../public/img_slide2.jpg';
import img3 from '../../../public/img_slide3.jpg';

const menuPerson = ['조회', '이체', '공과금', '예금/신탁'];
const menuCompany = ['조회', '이체', '전자결제', '수표어음'];
const menuProduction = ['저축상품', '대출상품', '투자상품'];
const menuCard = ['카드정보', '카드신청', '이용내역조회'];

const noticeOn = ref(true);
const activeIndex = ref(null);

const noticeList = [
    { title: '사이트 긴급 점검 안내', date: '2025-08-01', content: '금일 2025년 08월 01일 15시에 약 1시간의 사이트 긴급 점검이 예정되어 있습니다. 양해 부탁드립니다.' },
    { title: '비대면 서비스 이용 안내', date: '2025-06-12', content: '' },
    { title: '모바일 뱅킹 서비스 오픈 안내', date: '2025-05-01', content: '' },
    { title: '올해의 은행 선정 기념 상품 안내', date: '2024-12-30', content: '' },
]

const images = [
    img1, img2, img3
];

const currentIndex = ref(0);
let timer = null;

// 슬라이드 함수들
const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
};

const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};

const startAutoSlide = () => {
    timer = setInterval(nextSlide, 3000);
};

const stopAutoSlide = () => {
    clearInterval(timer);
};

onMounted(() => {
    startAutoSlide();
});

onBeforeUnmount(() => {
    stopAutoSlide();
});
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

/* 헤더 영역 */
.headerW {
    width: 100%;
    height: 100px;
    background-color: #10106b;
    display: flex;
    flex-direction: row;
}

.header-logo {
    width: 200px;
    height: 100%;
    color: #fff;
    text-align: center;
}

.header-mainMenu {
    width: 100%;
    height: 100%;
    position: relative;
}

.header-mainMenu>ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    text-align: center;
    position: absolute;
    right: 30px;
    top: 25px;
}

.header-mainMenu>ul>li {
    color: #fff;
    padding: 10px 20px;
    width: 125px;
    height: 50px;
    position: relative;
}

.header-mainMenu>ul>li:hover {
    background-color: #22227c;
    cursor: pointer;
    transform: translateY(-1px);
}

.header-mainMenu>ul>li:hover>ul>li {
    transition: transform 0.5s linear;
    transform: translateY(200px);
}

.header-subMenu {
    list-style-type: none;
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    overflow: hidden;
}

.header-subMenu>li {
    text-align: center;
    width: 100%;
    padding: 10px;
    height: 50px;
    background-color: #10106b;
    position: relative;
    top: -200px;
    transition: transform 0.5s linear;
    transform: translateY(0);
}

.header-subMenu>li:hover {
    background-color: #22227c;
    cursor: pointer;
}

/* 헤더 영역 */

/* 이미지 슬라이드 영역 */

.imgSlide {
    width: 100%;
    height: 300px;
}


/* 이미지 슬라이드 영역 */

/* 서브컨텐츠 영역 */
.subContents {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: row;
}

.subContents>div {
    width: 33%;
    height: 100%;
    text-align: center;
}

.subContents-Notice {
    display: flex;
    flex-direction: column;
}

.subContents-Notice-tab {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50px;
}

.subContents-Notice-tab:hover {
    cursor: pointer;
}

.subContents-Notice-tab>div {
    padding: 5px 10px;
    width: 25%;
    height: 100%;
}

.subContents-Notice-contents {
    background-color: #ffd;
    width: 100%;
    height: 100%;
}

.subContents-Notice-contents-noticeList {
    list-style-type: none;
    text-align: left;
    padding: 0 10px;
}

.subContents-Notice-contents-noticeList>li {
    padding: 5px 15px;
    border-bottom: 1px solid #ccc;
    font-size: 14px;
}

.subContents-Notice-contents-noticeList>li:hover {
    cursor: pointer;
}

.subContents-Notice-contents-noticeList>li>span {
    font-size: 10px;
    color: #ccc;
    float: right;
    margin-top: 10px;
}

.noticeBox {
    width: 300px;
    height: 300px;
    position: absolute;
    top: calc(50vh - 150px);
    left: calc(50vw - 150px);
    padding: 20px;
    background-color: #ccc;
}

.noticeBox>button {
    position: absolute;
    bottom: 10px;
}

.noticeBox>h3 {
    margin-bottom: 10px;
}

.collected {
    background-color: #ffd;
}

/* 서브컨텐츠 영역 */

/* 푸터 영역 */
.footerW {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    background-color: #10106b;
}

.footer-logo {
    width: 200px;
    height: 100%;
    color: #fff;
    text-align: center;
}

.footer-subContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.footer-subContainer>div {
    width: 100%;
    height: 50%;
    text-align: center;
    color: #fff;
}

/* 푸터 영역 */
</style>