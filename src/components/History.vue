<template lang="">
    <div>
        <p v-html=history></p>
        <button @click="getHistory">历史上的今天</button>
    </div>
</template>
<script>
import {ref} from 'vue'
export default {
    name: History,
    setup() {
        let history = ref('111')
        async function getHistory() {
            let result = ''
            let temp = ''
            await fetch("https://api.oick.cn/lishi/api.php")
            .then(res => res.json())
            .then(data => temp = data)
            temp.result.map(e=>result += e.date + '-' + e.title + '<br>')
            console.log(temp.result);
            console.log(result);
            history.value = result
        }
        return {history, getHistory}
    }
}
</script>
<style lang="">
    
</style>