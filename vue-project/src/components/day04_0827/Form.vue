<template>
    <div>
        <form @submit.prevent="addItem">
            <p>
                사야할 것 :
                <input type="text" required placeholder="쇼핑 목록" v-model="itemName">
            </p>
            <p>
                개수 : 
                <input type="number" v-model="itemNumber">
            </p>
            <button type="submit">목록 추가</button>
        </form>

        <div class="list">
            <p>쇼핑 목록</p>
            <ul>
                <li v-for="item in shoppingList">
                    {{ item.name }} - {{ item.number }}
                </li>
            </ul>
        </div>
    </div>
    
    <button @click="view = true"><>코드 보기</button>

    <div v-show="view" class="codeView">
        <pre>
&lt; template &gt;
    &lt; div &gt;
        &lt; form @submit.prevent='addItem' &gt;
            &lt; p &gt;
                &lt; input type='text' required placeholder='쇼핑 목록' <mark>v-model='itemName'</mark> &gt;
            &lt; /p &gt;
            &lt; p &gt;
                &lt; input type='number' <mark>v-model='itemNumber'</mark> &gt;
            &lt; /p &gt;
            &lt; button type='submit' &gt;목록 추가&lt; /butotn &gt;
        &lt; /form &gt;
    &lt; /div &gt;

    &lt; div class='list' &gt;
        &lt; ul &gt;
            &lt; li v-for='item in shoppingList' &gt;
                &#123;&#123; itme.name &#125;&#125; - &#123;&#123; item.number &#125;&#125;
            &lt; /li &gt;
        &lt; /ul &gt;
    &lt; /div &gt;
&lt; /template &gt;

&lt; script setup &gt;
import { ref } from 'vue';

const itemName = ref('');
const itemNumber = ref(0);

const shoppingList = ref([]);

const addItem = () => {
    let item = {
        name : itemName.value,
        number : itemNumber.value
    };

    shoppingList.value.push(item);
    itemName.value = '';
    itemNumber.value = 0;
};
&lt; /setup &gt;
        </pre>
        <button @click="view = false"> X </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const itemName = ref('');
const itemNumber = ref(0);

const shoppingList = ref([]);

const addItem = () => {
    let item = {
        name : itemName.value,
        number : itemNumber.value
    };

    shoppingList.value.push(item);
    itemName.value = '';
    itemNumber.value = 0;
};

const view = ref(false);
</script>

<style scoped>
p > input {
    display: block;
    padding: 3px 10px;
}

form > button {
    padding: 5px 10px;
    margin-top: 10px;

}
.list {
    width: 300px;
    height: 400px;
    border: 1px solid #000;
    margin-top: 10px;
    padding: 5px 20px;
}
.list > p {
    text-align: center;
    border-bottom: 1px solid #000;
    width: 100px;
    margin: 0 auto;
}

.list > ul {
    list-style-type: circle;
}

.list > ul > li {
    border-bottom: 1px solid #000;
}
</style>