<template lang="">
    <h1>功能列表</h1>
    <div>
        <ul class="left">
            <li><router-link to='/demo'>随机一句古诗</router-link></li>
            <li><router-link to='/history'>历史上的今天</router-link></li>
        </ul>
    </div>
</template>
<script >
export default {
    name: 'List'
}
</script>
<style> 
.left{
    list-style-type: none;
}
</style>