<template>
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
</template>

<script setup>
import { ref } from 'vue';

const noticeOn = ref(true);
const activeIndex = ref(null);

const noticeList = [
    { title: '사이트 긴급 점검 안내', date: '2025-08-01', content: '금일 2025년 08월 01일 15시에 약 1시간의 사이트 긴급 점검이 예정되어 있습니다. 양해 부탁드립니다.' },
    { title: '비대면 서비스 이용 안내', date: '2025-06-12', content: '' },
    { title: '모바일 뱅킹 서비스 오픈 안내', date: '2025-05-01', content: '' },
    { title: '올해의 은행 선정 기념 상품 안내', date: '2024-12-30', content: '' },
]
</script>

<style scoped>
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
</style>