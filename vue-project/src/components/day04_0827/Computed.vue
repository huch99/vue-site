<template>
    <div class='box'>
        <form>
            <button :disabled="!isAble">{{ isAccess }}</button>
            <label>
                <input type="checkbox" v-model="isAble">
                동의                
            </label>
        </form>
    </div>

    <button @click="view = true"><>코드 보기</button>

    <div v-show="view" class="codeView">
        <pre>
&lt; template &gt;
    &lt; div class='box' &gt;
        &lt; form &gt;
            &lt; button :disabled='!isAble' &gt;&#123;&#123; isAccess &#125;&#125;&lt; /button &gt;
            &lt; label &gt;
                &lt; input type='checkbox' v-model='isAble' &gt;
                동의
            &lt; /label &gt;
        &lt; /form &gt;
    &lt; /div &gt;
&lt; /template &gt;

&lt; script setup &gt;
import { computed, ref } from 'vue';

const isAble = ref(false);
const isAccess = <mark>computed(() => {
    return isAble.value ? '활성화' : '비활성화';
})</mark>
&lt; /script &gt;
        </pre>
        <button @click="view = false"> X </button>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const isAble = ref(false);
const isAccess = computed(() => {
    return isAble.value ? '활성화' : '비활성화';
})

const view = ref(false);
</script>

<style scoped>
form > button {
    padding: 10px 20px;
    font-size: 20px;
    background-color: #fff;
    border-radius: 8px;
}
label {
    display: block;
}
</style>