<template>
    <div class="box">
        <div :class="{ bgColor: bgOn, borderLine: borderOn }"></div>
        <form>
            <label><input type="checkbox" v-model="bgOn">배경색</label>
            <label><input type="checkbox" v-model="borderOn">테두리</label>
        </form>
    </div>

    <button @click="view = true">
        <>코드보기
    </button>

    <div v-show="view" class="codeView">
        <pre>
&lt; template &gt;
    &lt; div class='box' &gt;
        &lt; div <mark>:class='{ bgColor: bgOn, borderLine: borderOn }'</mark> &gt;&lt; /div &gt;
        &lt; form &gt;
            &lt; label &gt;&lt; input type='checkbox' v-model='bgOn' &gt;&lt; /label &gt;
            &lt; label &gt;&lt; input type='checkbox' v-model='borderOn' &gt;&lt; /label &gt;
        &lt; /form &gt;
    &lt; /div &gt;
&lt; /template &gt;

&lt; script setup &gt;
import { ref } from 'vue';

const bgOn = ref(false);
const borderOn = ref(true);
&lt; /script &gt;
        </pre>
        <button @click="view = false"> X </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const bgOn = ref(false);
const borderOn = ref(true);

const view = ref(false);
</script>

<style scoped>
.box > div {
    width: 300px;
    height: 200px;
}
label{
    display: block;
}
.bgColor {
    background-color: lightskyblue;
}

.borderLine {
    border: 5px solid #000;
}
</style>