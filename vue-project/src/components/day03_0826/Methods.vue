<script setup>
import { ref } from 'vue';

const xPos = ref(0);
const yPos = ref(0);

const mousePos = (e) => {
    xPos.value = e.offsetX;
    yPos.value = e.offsetY;
};

const text = ref('');

const writeText = (e) => {
    text.value = e.target.value;
}

const view = ref(false);
</script>

<template>
    <div>
        <p>마우스를 올려보세요.</p>
        <div @mousemove="mousePos" :style="{
            backgroundColor: 'rgb(' + xPos + ', ' + yPos + ', 0)'
        }" class="posBox">
            <br><span>xPos: {{ xPos }}</span>
            <br><span>yPos: {{ yPos }}</span>
        </div>
        <p>CSS: <br> backgroundColor: 'rgb({{ xPos }}, {{ yPos }}, 0)'</p>
    </div>

    <div :style="{marginTop: '10px'}" class="inputBox">
        <textarea @input="writeText" rows="8" cols="30" placeholder="입력"></textarea>
        <div>
            <span>{{ text }}</span>
        </div>
    </div>

    <button @click="view = true"><>코드 보기</button>

    <div v-show="view" class="codeView">
        <pre>
&lt;template&gt;
    &lt;div&gt;
        &lt;p&gt;마우스를 올려보세요&lt;/p&gt;
        &lt;div @mousemove='mousePos' :style='{
            backgroundColor: 'reb('+xPos+','+yPos+',0)'
        }' class='posBox'&gt;
            &lt;br&gt;&lt;span&gt;xPos: &#123;&#123; xPos &#125;&#125;&lt;/sapn&gt;
            &lt;br&gt;&lt;span&gt;yPos: &#123;&#123; yPos &#125;&#125;&lt;/sapn&gt;
        &lt;/div&gt;
        &lt;p&gt;CSS: &lt;br&gt; backgroundColor: 'rgb(&#123;&#123; xPos &#125;&#125;,&#123;&#123; yPos &#125;&#125;,0)'&lt;/p&gt;
    &lt;/div&gt;

    &lt;div :style='{marginTop: '10px'}' class='inputBox'&gt;
        &lt;textarea @input='writeText' rows='8' cols='30' placeholder='입력'&gt;&lt;/textarea&gt;
        &lt;div&gt;
            &lt;span&gt;&#123;&#123; text &#125;&#125;&lt;/span&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const xPos = ref(0);
const yPos = ref(0);

const mousePos = (e) => {
    xPos.value = e.offsetX;
    yPos.value = e.offsetY;
};

const text = ref('');

const writeText = (e) => {
    text.value = e.target.value;
}
&lt;/script&gt;
        </pre>

        <button @click="view = false"> X </button>
    </div>
</template>

<style scoped>
.posBox {
    width: 255px;
    height: 255px;
    background-color: lightcoral;
}

.posBox > span {
    font-weight: bold;
    margin: 20px;
}

.inputBox {
    width: 300px;
    padding: 20px;
}

.inputBox > div {
    width: 100%;
    position: relative;
    margin-top: 10px;
    aspect-ratio: 1;
    background-image: url('../../assets/img_notebook.jpg');
    background-size: 385%;
    background-position: -345px 0;
    overflow: hidden;
}

.inputBox span {
    width: 80%;
    font-weight: bold;
    line-height: 1.2em;
    transform-origin: 0 0;
    rotate: 33deg;
    position: absolute;
    top: 50px;
    left: 70px;
}

textarea{
    width: 100%;
    box-sizing: border-box;
}
</style>
