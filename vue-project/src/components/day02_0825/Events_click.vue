<template>
    <div class="lightContainer">
        <div class="lightDiv">
            <div v-show="lightOn"></div>
            <img src="/img_lightBulb.svg">
        </div>

        <button class="lightBtn" @click="lightOn = !lightOn">Switch Light</button>

        
    </div>
    <button @click="view = true"><>코드 보기</button>

    <div v-show="view" class="codeView">
        <pre>
            &lt;template&gt;
            &lt;div class='lightContainer'&gt;
                &lt;div class='lightDiv'&gt;
                    &lt;div v-show='lightOn'&gt;&lt;/div&gt;
                    &lt;img src='/img_lightBulb.svg'&gt;
                &lt;/div&gt;

                &lt;button class='lightBtn' @click='lightOn = !lightOn'&gt;Switch Light&lt;/button&gt;
            &lt;/div&gt;
            &lt;/template&gt;

            &lt;script setup&gt;
            import { ref } from 'vue';

            const lightOn = ref(false);
            &lt;/script&gt;
        </pre>

        <button @click="view = false"> X </button>
    </div>

</template>

<script setup>
import { ref } from 'vue';

const lightOn = ref(false);
const view = ref(false);
</script>

<style scoped>
.lightContainer{
    width: 200px;
    height: 200px;
    margin: 0 auto;
}
.lightDiv {
    position: relative;
    width: 150px;
    height: 150px;
    margin: 0 auto;
}

.lightDiv>img {
    position: relative;
    width: 100%;
    height: 100%;
}

.lightDiv>div {
    position: absolute;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    background-color: yellow;
}

.lightBtn {
    padding: 10px;
    display: block;
    margin: 0 auto;
}
</style>