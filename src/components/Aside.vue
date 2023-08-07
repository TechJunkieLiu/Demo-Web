<template>
    <div style="height: 100%;">
        <el-menu background-color="#545c64" text-color="#ffffff"
                 active-text-color="#ffd04b" class="el-menu-vertical-demo"
                 router>
            <el-menu-item :index="item.path" v-for="item in menu_data" :key="item.name">
                <i :class="item.icon"></i>{{item.name}}
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "Aside",
        data (){
            return {}
        },
        computed:{
            menu_data:{
                get(){
                    return this.$store.state.menu_data
                }
            }
        }
    }
</script>

<style scoped>
    .el-menu-vertical-demo{
        height: 100%;
    }
</style>
