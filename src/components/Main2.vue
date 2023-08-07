<template>
    <div>这是Main2
        <h1>{{$store.state.username}}</h1>
        数据状态：{{$store.state.userState}}
        计算数据状态：{{$store.getters.getUserState}}
        <el-button @click="addState">状态+1</el-button>
    </div>
</template>

<script>
    export default {
        name: "Main2",
        methods:{
            addState(){
                this.$store.commit('setUserState', 1)
            }
        }
    }
</script>

<style scoped>
</style>
