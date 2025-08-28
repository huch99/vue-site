<template>
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
</template>

<script setup>
import { ref } from 'vue';

const menuPerson = ['조회', '이체', '공과금', '예금/신탁'];
const menuCompany = ['조회', '이체', '전자결제', '수표어음'];
const menuProduction = ['저축상품', '대출상품', '투자상품'];
const menuCard = ['카드정보', '카드신청', '이용내역조회'];

const setScrollOn = ref(true);
</script>

<style scoped>
/* 헤더 영역 */
.headerW {
    width: 100%;
    height: 100px;
    background-color: #10106b;
    display: flex;
    flex-direction: row;
    z-index: 1000;
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

.header-mainMenu > ul > li:hover > .header-subMenu > li {
    transform: translateY(0);
}

.header-subMenu {
    list-style-type: none;
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    overflow: hidden;
    z-index: 2000;
}

.header-subMenu > li {
text-align: center;
width: 100%;
padding: 10px;
height: 50px;
background-color: #10106b;
transform: translateY(-200px); /* 초기 숨김 */
transition: transform 0.5s linear;
will-change: transform; /* 성능 향상에 도움 될 수 있음 */
}

.header-subMenu>li:hover {
    background-color: #22227c;
    cursor: pointer;
}

/* 헤더 영역 */
</style>