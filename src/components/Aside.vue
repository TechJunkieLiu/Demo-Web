<template>
    <div style="height: 100%;">
        <el-menu background-color="#545c64" text-color="#ffffff"
                 active-text-color="#ffd04b" class="el-menu-vertical-demo"
                 router>
            <el-menu-item :index="item.path" v-for="item in menu_data" :key="item.name">
                <i :class="item.icon"></i>{{item.name}}
            </el-menu-item>
            <el-submenu :index="item.path" v-for="item in menu_data" :key="item.name">
                <template slot="title"><i :class="item.icon"></i><span>{{item.name}}</span></template>

                <el-menu-item :index="child.path" v-for="child in item.child" :key="child.name">
                    <i :class="child.icon"></i>{{child.name}}
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "Aside",
        data (){
            return {
                menu_data: [
                    {
                        name: '一级菜单1',
                        icon: 'el-icon-location',
                        path: '/index/menu1',
                        child:[
                            {
                                name:'二级菜单1-1',
                                icon:'el-icon-user',
                                path:'/index/menu11'
                            },
                            {
                                name:'二级菜单1-2',
                                icon:'el-icon-user-solid',
                                path:'/index/menu12'
                            }
                        ]
                    },
                    {
                        name: '一级菜单2',
                        icon: 'el-icon-document',
                        path: '/index/menu2',
                        child:[
                            {
                                name:'二级菜单2-1',
                                icon:'el-icon-star-on',
                                path:'/index/menu21'
                            },
                            {
                                name:'二级菜单2-2',
                                icon:'el-icon-star-off',
                                path:'/index/menu22'
                            }
                        ]
                    },
                    {
                        name: '一级菜单3',
                        icon: 'el-icon-setting',
                        path: '/index/menu3',
                        child:[
                            {
                                name:'二级菜单3-1',
                                icon:'el-icon-s-help',
                                path:'/index/menu31'
                            },
                            {
                                name:'二级菜单3-2',
                                icon:'el-icon-help',
                                path:'/index/menu32'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .el-menu-vertical-demo{
        height: 100%;
    }
</style>
