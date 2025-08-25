<template>
    <div>
        <h1>hello, world!!</h1>

        <div id="ap">{{ message }}</div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

    const message = ref('hi');
</script>
