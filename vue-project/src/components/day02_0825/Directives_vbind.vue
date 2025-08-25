<template>
    <!-- img v-bind 사용 -->
    <img v-bind:src="url">

    <!-- v-bind:style 사용 -->
    <div v-bind:style="{ fontSize: size }">
        &lt;div v-bind:style="{ fontSize: size }"&gt;
    </div>

    <div v-bind:style="{ fontSize: size2 + 'px' }">
        &lt;div v-bind:style="{ fontSize: size2 + 'px' }"&gt;
    </div>

    <div v-bind:style="{ 'font-size': size3 + 'px' }">
        &lt;div v-bind:style="{ 'font-size' : size3 + 'px' }"&gt;
    </div>

    <!--  -->
    <div v-bind:style="{ backgroundColor: isImportant ? 'lightcoral' : 'lightgray' }">
        &lt;div v-bind:style="{ backgroundColor : isImportant ? 'lightcoral' : 'lightgray' }"&gt;
    </div>

    <!-- class 적용 -->
    <div v-bind:class="className">
        &lt;div v-bind:class="className"&gt;
    </div>

    <div v-bind:class="{ myClass: isImportant }">
        &lt;div v-bind:class="{ myClass : isImportant }"&gt;
    </div>

    <div :class="{ myClass: !isImportant }">
        &lt;div :class="{ myClass : !isImportant }"&gt; <br>
        v-bind:의 약어는 ':' 입니다.
    </div>

    <button @click="() => view = true"><>코드 보기</button>

    <div v-show='view' class="codeView">
        <pre>
            &lt;template&gt;
                &lt;!-- img v-bind 사용 --&gt;
                &lt;img v-bind:src=&quot;url&quot;/&gt;

                &lt;!-- v-bind:style 사용 --&gt;
                &lt;div v-bind:style=&quot;{ fontSize: size }&quot;&gt;
                    &amp;lt;div v-bind:style=&quot;{ fontSize: size }&quot;&gt;
                &lt;/div&gt;

                &lt;div v-bind:style=&quot;{ fontSize: size2 + 'px' }&quot;&gt;
                    &amp;lt;div v-bind:style=&quot;{ fontSize: size2 + 'px' }&quot;&gt;
                &lt;/div&gt;

                &lt;div v-bind:style=&quot;{ 'font-size': size3 + 'px' }&quot;&gt;
                    &amp;lt;div v-bind:style=&quot;{ 'font-size' : size3 + 'px' }&gt;
                &lt;/div&gt;

                &lt;!--  --&gt;
                &lt;div v-bind:style=&quot;{ backgroundColor: isImportant ? 'lightcoral' : 'lightgray' }&quot;&gt;
                    &amp;lt;div v-bind:style=&quot;{ backgroundColor : isImportant ? 'lightcoral' : 'lightgray' }&gt;
                &lt;/div&gt;

                &lt;!-- class 적용 --&gt;
                &lt;div v-bind:class=&quot;className&quot;&gt;
                    &amp;lt;div v-bind:class=&quot;className&quot;&gt;
                &lt;/div&gt;

                &lt;div v-bind:class=&quot;{ myClass: isImportant }&quot;&gt;
                    &amp;lt;div v-bind:class=&quot;{ myClass : isImportant }&gt;
                &lt;/div&gt;

                &lt;div v-bind:class=&quot;{ myClass: !isImportant }&quot;&gt;
                    &amp;lt;div v-bind:class=&quot;{ myClass : !isImportant }&gt; &lt;br&gt;
                    v-bind:의 약어는 ':' 입니다.
                &lt;/div&gt;
            &lt;/template&gt;

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
        <button @click="() => view = false"> X </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import beach from '../../assets/img_beach3.jpg';

const url = beach;
const size = ref('30px');
const size2 = ref(40);
const size3 = ref(15);

const isImportant = ref(true);
const view = ref(false);

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