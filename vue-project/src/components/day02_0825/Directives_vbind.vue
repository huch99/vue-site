<template>
    <h1>v-bind 사용하기</h1>
    <!-- img v-bind 사용 -->
    <img v-bind:src="url">

    <!-- v-bind:style 사용 -->
    <div v-bind:style="{ fontSize: size }">
        &lt;div v-bind:style="{ fontSize: size }"&gt;
    </div>

    <div v-bind:style="{ fontSize: size2 + 'px' }">
        &lt;div v-bind:style="{ fontSize: size2 + 'px' }"&gt;
    </div>

    <div v-bind:style="{ 'font-size' : size3 + 'px' }">
        &lt;div v-bind:style="{ 'font-size' : size3 + 'px' }"&gt;
    </div>

    <!--  -->
    <div v-bind:style="{ backgroundColor : isImportant ? 'lightcoral' : 'lightgray' }">
        &lt;div v-bind:style="{ backgroundColor : isImportant ? 'lightcoral' : 'lightgray' }"&gt;
    </div>

    <!-- class 적용 -->
    <div v-bind:class="className">
         &lt;div v-bind:class="className"&gt;
    </div>

    <div v-bind:class="{ myClass : isImportant }">
         &lt;div v-bind:class="{ myClass : isImportant }"&gt;
    </div>

    <div :class="{ myClass : !isImportant }">
         &lt;div :class="{ myClass : !isImportant }"&gt; <br>
         v-bind:의 약어는 ':' 입니다.
    </div>

    <pre>
        &lt;script setup&gt;
        import { ref } from 'vue';
        import beach from '../../assets/img_beach3.jpg';

        const url = beach;
        const size = ref('30px');
        const size2 = ref(40);
        const size3 = ref(15);

        const isImportant = ref(true);

        const className = ref('impClass');
        &lt;/script&gt;
    </pre>
</template>

<script setup>
import { ref } from 'vue';
import beach from '../../assets/img_beach3.jpg';

const url = beach;
const size = ref('30px');
const size2 = ref(40);
const size3 = ref(15);

const isImportant = ref(true);

const className = ref('impClass');
</script>

<style scoped>
pre {
    text-align: left;
    border: 1px solid #000;
    padding: 10px;
}

.impClass {
    background-color: lightblue;
}
.myClass {
    background-color: lightgreen;
}

* {
    text-align: center;
}
</style>