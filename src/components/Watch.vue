<template lang="">
    <h1>{{sum}}</h1>
    <button @click="sum++">++++++</button>
    <hr>
    <button @click="person.age += 1">person</button>
</template>
<script>
import {watch, ref, reactive,} from 'vue'
export default {
    name: 'Watch',
    setup() {
        let sum = ref(0)
        let person = reactive({
            name: 'zhang',
            age: 13
        })
        watch(sum,(newValue, oldValue) => {
            console.log(newValue,oldValue)
        })
        watch(person,(newValue, oldValue) => {
            console.log(newValue,oldValue);
        })
        return {
            sum,
            person
        }        
    }
}
</script>
<style lang="">
    
</style>