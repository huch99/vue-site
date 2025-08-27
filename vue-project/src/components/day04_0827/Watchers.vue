<template>
    <div class="box">
        <div class="result1">
            <h3>값 제한</h3>
            <input type="range" v-model="rangeVal" min="0" max="100" step="1">
            <p>{{ rangeVal }}</p>
        </div>

        <div class="result2">
            <h3>마우스 포인터 위치 변경</h3>
            <div @click="updatePos"></div>
            <p>{{ xDiff }}</p>
        </div>

        <div class="result3">
            <h3>이메일 확인하기</h3>
            <label>
                이메일 :
                <input type="email" v-model="inpAddress">
                <p :class="myClass">{{ feedbackText }}</p>
            </label>
        </div>

    </div>

    <button @click="view = true"><>코드 보기</button>

    <div v-show="view" class="codeView">
        <pre>
&lt; template &gt;
    &lt; div class='result1' &gt;
        &lt; h3 &gt;값 제한&lt; /h3 &gt;
        &lt; input type='range' v-model='rangeVal' min='0' max='100' step='1' &gt;
        &lt; p &gt;&#123;&#123; rangeVal &#125;&#125;&lt; /p &gt;
    &lt; /div &gt;   
    
    &lt; div class='result2' &gt;
        &lt; h3 &gt;마우스 포인터 위치 변경&lt; /h3 &gt;
        &lt; div @click='updatePos' &gt;&lt; /div &gt;
        &lt; p &gt;&#123;&#123; xDiff &#125;&#125;&lt; /p &gt;
    &lt; /div &gt;

    &lt; div class='result3' &gt;
        &lt; h3 &gt;이메일 확인하기&lt; /h3 &gt;
        &lt; label &gt; 이메일 :
            &lt; input type='email' v-model='inpAddress' &gt;
            &lt; p :class='{myClass}' &gt;&#123;&#123; feedbackText &#125;&#125;&lt; /p &gt;
        &lt; /label &gt;
    &lt; /div &gt;
&lt; /template &gt;

&lt; script setup &gt;
import { ref, watch } from 'vue';

const rangeVal = ref(0);
const xDiff = ref(0);
const xPos = ref(0);
const inpAddress = ref('');
const feedbackText = ref('');
const myClass = ref('invalid');

<mark>watch(rangeVal,(val) => {
    if(val > 20 && val < 60) {
        if(val < 40) {
            rangeVal.value = 20;
        }
        else {
            rangeVal.value = 60;
        }
    }
})</mark>


const updatePos = (e) => {
    xPos.value = e.offsetX;
}

<mark>watch(xPos, (newVal, oldVal) => {
    xDiff.value = newVal - oldVal;
})

watch(inpAddress,(newVal, oldVal) => {
    if(!newVal.includes('@')) {
        feedbackText.value = '이메일 주소의 형식으로 작성해 주세요.';
        myClass.value = 'invalid';
    }
    else if (!oldVal.includes('@') && newVal.includes('@')) {
        feedbackText.value = '사용할 수 있는 이메일입니다.';
        myClass.value = 'valid';
    }
    else {
        feedbackText.value = '테스트';
    }
})</mark>
&lt; /script &gt;
        </pre>
        <button @click="view = false"> X </button>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const rangeVal = ref(0);
const xDiff = ref(0);
const xPos = ref(0);
const inpAddress = ref('');
const feedbackText = ref('');
const myClass = ref('invalid');

watch(rangeVal,(val) => {
    if(val > 20 && val < 60) {
        if(val < 40) {
            rangeVal.value = 20;
        }
        else {
            rangeVal.value = 60;
        }
    }
})


const updatePos = (e) => {
    xPos.value = e.offsetX;
}

watch(xPos, (newVal, oldVal) => {
    xDiff.value = newVal - oldVal;
})

watch(inpAddress,(newVal, oldVal) => {
    if(!newVal.includes('@')) {
        feedbackText.value = '이메일 주소의 형식으로 작성해 주세요.';
        myClass.value = 'invalid';
    }
    else if (!oldVal.includes('@') && newVal.includes('@')) {
        feedbackText.value = '사용할 수 있는 이메일입니다.';
        myClass.value = 'valid';
    }
    else {
        feedbackText.value = '테스트';
    }
})

const view = ref(false);

</script>

<style scoped>
.box {
    display: flex;
    flex-direction: row;
}

.box > div {
    width: 33%;
}
.result2 > div {
    background-color: lightblue;
    width: 200px;
    height: 100px;
}

.valid {
    color: green;
}
.invalid {
    color: red;
}
</style>