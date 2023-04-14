<template lang="">
    <div>
        <ul>
            <li v-for='(item, index) in todayHistory' :key='index'>
                {{item.date}}: {{item.title}}
            </li>
        </ul>
        <button @click="getTodayHistory">历史上的今天</button>
    </div>
</template>
<script>
import {ref} from 'vue'
export default {
    name: History,
    setup() {
        let todayHistory = ref([])
        async function getTodayHistory() {
            await fetch("https://api.oick.cn/lishi/api.php")
            .then(res => res.json())
            .then(data => todayHistory.value = data.result)
        }
        return {getTodayHistory, todayHistory}
        
    }
}
</script>
<style scope>
ul{
    text-align: left;
}
</style>