<template>
    <div class="formContainer">
        <div class="result1">
            <h3>양방향 바인딩</h3>
            <form>
                <input type="text" v-model="inpText">

                <p>{{ inpText }}</p>
            </form>
        </div>

        <div class="result2">
            <h3>동적 체크박스</h3>
            <form>
                <label>
                    <input type="checkbox" v-model="important">
                    {{ important }}
                </label>
            </form>
        </div>

        <div class="result3">
            <h3>쇼핑목록 만들기</h3>
            <form @submit.prevent="addItem">
                <p>
                    사야할 것 :
                    <input type="text" required placeholder="쇼핑 목록" v-model="itemName">
                </p>
                <p>
                    개수 :
                    <input type="number" v-model="itemNumber">
                </p>
                <p>
                    중요한가 ?
                    <label>
                        <input type="checkbox" v-model="important2">
                        {{ important2 }}
                    </label>
                </p>
                <button type="submit">목록 추가</button>
            </form>

            <div class="list">
                <p>쇼핑 목록</p>
                <ul>
                    <li v-for="item in shoppingList"
                        :style="{ backgroundColor: item.itemImpotant ? 'lightpink' : 'lightgreen' }">
                        {{ item.name }} - {{ item.number }}
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <button @click="view = true"><>코드 보기</button>
    <div v-show="view" class="codeView">
        <pre>
&lt; template &gt;
    &lt; div class='result1' &gt;
        &lt; h3 &gt;양방향 바인딩&lt; /h3 &gt;
        &lt; form &gt;
            &lt; input type='text' v-model='inpText' &gt;
            &lt; p &gt;&#123;&#123; inpText &#125;&#125;&lt; /p &gt;
        &lt; /form &gt;
    &lt; /div &gt;

    &lt; div class='result2' &gt;
        &lt; h3 &gt;동적 체크박스&lt; /h3 &gt;
        &lt; form &gt;
            &lt; label &gt;
                &lt; input type='checkbox' v-model='important' &gt;
                &#123;&#123; important &#125;&#125;
            &lt; /label &gt;
        &lt; /form &gt;
    &lt; /div &gt;

    &lt; div class='result3' &gt;
        &lt; h3 &gt;쇼핑목록 만들기&lt; /h3 &gt;
        &lt; form @submit.prevent='addItem' &gt;
            &lt; p &gt; 사야할 것 :
                &lt; input type='text' v-model='itemName' required placeholder='쇼핑 목록' &gt;
            &lt; /p &gt;
            &lt; p &gt; 개수 :
                &lt; input type='number' v-model='itemNumber' &gt;
            &lt; /p &gt;
            &lt; p &gt; 중요한가 ?
                &lt; label &gt;
                    &lt; input type='checkbox' v-model='important2' &gt;
                    &#123;&#123; important2 &#125;&#125;
                &lt; /label &gt;
            &lt; /p &gt;
            &lt; button type='submit' &gt;목록 추가&lt; /button &gt;
        &lt; /form &gt;

        &lt; div class='list' &gt;
            &lt; ul &gt;
                &lt; li v-for='item in shoppingList'
                    :style='{ backgroundColor: item.itemImpotant ? 'lightpink' : 'lightgreen' }' &gt;
                    &#123;&#123; item.name &#125;&#125; - &#123;&#123; item.number &#125;&#125;
                &lt; /li &gt;
            &lt; /ul &gt;
        &lt; /div &gt;
    &lt; /div &gt;
&lt; /template &gt;

&lt; script setup &gt;
import { ref } from 'vue';

const inpText = ref('');
const important = ref(false);
const important2 = ref(false);

const itemName = ref('');
const itemNumber = ref(0);
const shoppingList = ref([]);
const addItem = () => {
    let item = {
        name: itemName.value,
        number: itemNumber.value,
        itemImpotant: important2.value
    }

    shoppingList.value.push(item);
    itemName.value = '';
    itemNumber.value = 0;
}
&lt; /script &gt;
        </pre>
        <button @click="view = false"> X </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const inpText = ref('');
const important = ref(false);
const important2 = ref(false);

const itemName = ref('');
const itemNumber = ref(0);
const shoppingList = ref([]);
const addItem = () => {
    let item = {
        name: itemName.value,
        number: itemNumber.value,
        itemImpotant: important2.value
    }

    shoppingList.value.push(item);
    itemName.value = '';
    itemNumber.value = 0;
}

const view = ref(false);
</script>

<style scoped>
.formContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
}

.result1 {
    grid-column: 1/2;
    grid-row: 1/2;
}

.result1 >form> input,p {
    padding: 5px 10px;
    margin-top: 10px;
    width: 200px;
    height: 50px;
    box-sizing: border-box;
}

.result1 p {
    background-color: lightblue;    
}

.result2 {
    grid-column: 1/2;
    grid-row: 2/3;
}

.result3 {
    grid-column: 2/3;
    grid-row: 1/3;
}

.list {
    width: 300px;
}

.list li {
    padding: 3px 5px;
}
</style>