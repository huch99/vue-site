<template>
    <p v-if='typewritersInStock'> 재고 있음 </p>
    <p v-else> 재고 없음 </p>

    <p v-if='typewriterCount > 0'> 재고 있음 </p>
    <p v-else> 재고 없음 </p>

    <p v-if='typewriterCount2 > 3'> 재고 있음 </p>
    <p v-else-if='typewriterCount2 > 0'> 재고 조금 남음 </p>
    <p v-else-if='typewriterCount2 == 0'>재고 없음 </p>
    <p v-else> 선불(예약) 있음 </p>

    <div v-if="text.includes('피자')">
        <p>'피자'글자가 포함되어 있다.</p>
        <img src="/public/img_pizza.svg">
    </div>
    <p v-else>'피자' 글자 없음</p>

    <pre>
        import { ref } from 'vue';
        import pizza from '../../assets/img_pizza.svg';

        const typewritersInStock = ref(true);
        const typewriterCount = ref(0);
        const typewriterCount2 = ref(2);

        const text = ref('피자');
        const url = pizza;
    </pre>
</template>

<script setup>
import { ref } from 'vue';


const typewritersInStock = ref(true);
const typewriterCount = ref(0);
const typewriterCount2 = ref(2);

const text = ref('피자');
</script>

<style scoped>
p {
    border-bottom: 1px solid #000;
    padding: 10px;
}
</style>