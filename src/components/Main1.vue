<template>
    <div>
        这是Main1
        <el-button @click="getTest">get数据</el-button>
        <el-button @click="postTest">post数据</el-button>
        <el-button @click="postAdd">add数据</el-button>
        <el-button @click="postMod">mod数据</el-button>
        <el-button @click="postDel">del数据</el-button>
        <el-button @click="postQuery">query数据</el-button>
    </div>
</template>

<script>
    export default {
        name: "Main1",
        methods: {
            getTest(){
                this.$axios.get("/getTest").then(res=>{
                    console.log(res.data)
                })
            },
            postTest(){
                this.$axios.post("/post/test", {id:1}).then(res=>{
                    console.log(res.data)
                })
            },
            postAdd(){
                this.$axios.post("/post/add", {id:1, name:'哈哈哈'}).then(res=>{
                    console.log(res.data)
                })
            },
            postMod(){
                this.$axios.post("/post/mod",{name:'哈哈',id:3}).then(res=>{
                    console.log(res.data)
                })
            },
            postDel(){
                this.$axios.post("/post/del",{id:1}).then(res=>{
                    console.log(res.data)
                })
            },
            postQuery(){
                this.$axios.post("/post/query",{id:1}).then(res=>{
                    console.log(res.data)
                })
            }
        }
    }
</script>

<style scoped>
</style>
