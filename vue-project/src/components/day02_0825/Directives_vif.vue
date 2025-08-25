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

    <button @click="() => view = true"><>코드 보기</button>

    <div v-show="view" class="codeView">
        <pre>
            &lt;template&gt;
                &lt;p v-if='typewritersInStock'&gt; 재고 있음 &lt;/p&gt;
                &lt;p v-else&gt; 재고 없음 &lt;/p&gt;

                &lt;p v-if='typewriterCount &gt; 0'&gt; 재고 있음 &lt;/p&gt;
                &lt;p v-else&gt; 재고 없음 &lt;/p&gt;

                &lt;p v-if='typewriterCount2 &gt; 3'&gt; 재고 있음 &lt;/p&gt;
                &lt;p v-else-if='typewriterCount2 &gt; 0'&gt; 재고 조금 남음 &lt;/p&gt;
                &lt;p v-else-if='typewriterCount2 == 0'&gt;재고 없음 &lt;/p&gt;
                &lt;p v-else&gt; 선불(예약) 있음 &lt;/p&gt;

                &lt;div v-if=&quot;text.includes('피자')&quot;&gt;
                    &lt;p&gt;'피자'글자가 포함되어 있다.&lt;/p&gt;
                    &lt;img src=&quot;/public/img_pizza.svg&quot;/&gt;
                &lt;/div&gt;
                &lt;p v-else&gt;'피자' 글자 없음&lt;/p&gt;
            &lt;/template&gt;

            &lt;script setup&gt;
            import { ref } from 'vue';

            const typewritersInStock = ref(true);
            const typewriterCount = ref(0);
            const typewriterCount2 = ref(2);

            const text = ref('피자');
            const url = pizza;
            &lt;/script&gt;
        </pre>

        <button @click="() => view = false"> X </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const typewritersInStock = ref(true);
const typewriterCount = ref(0);
const typewriterCount2 = ref(2);

const text = ref('피자');
const view = ref(false);
</script>

<style scoped>
p {
    border-bottom: 1px solid #000;
    padding: 10px;
}

img {
    width: 300px;
}
</style>