<template>
    <p>{{sentences.from}}</p> 
    <p>{{sentences.name}}</p> 
    <button @click="getSentence">随机一句古诗</button>
    <p>{{person.firstName}}</p>
</template>

<script>
import {reactive, computed} from 'vue'
export default {
    name: 'Demo',

    setup() {
        let person = reactive({
            firstName: 'alan',
            lastName: 'smith',

        })
        person.fullName = computed(()=>{
            return person.firstName + '' + person.lastName
        })
        let sentences = reactive({
            name: '',
            from: ''
        })
        async function getSentence() {
            // const response = 
            await fetch('https://api.apiopen.top/api/sentences')
            .then(res => res.json())
            .then((data) => { 
                sentences.name = data.result.name
                sentences.from = data.result.from

            })
            // const data = await response.json()
            // sentences.name = data.result.name    
            // sentences.from = data.result.from    
            
        }       
        return {
            person,
            getSentence,
            sentences
        }
    }
}
</script>