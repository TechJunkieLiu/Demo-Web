// 引入mockjs
import Mock from 'mockjs'

// 使用mockjs模拟数据-get
Mock.mock('/getTest', {
    "res":0,
    "data":{
        "datatime": "@datetime",    //随机生成日期时间
        "weekday|1-7": 7,   //随机生成1-7的数字
        "name": "@cname",   //随机生成中文名字
    }
});
// 使用mockjs模拟数据-post
Mock.mock('/post/test', 'post', function (param) {
    console.log('传入的参数为：', param.body)
    return {
        res: 1,
        msg: "success"
    }
});
// 使用mockjs模拟数据-增
Mock.mock('/post/add', 'post', function (param) {
    let body = JSON.parse(param.body);   // 获取请求参数
    let id = parseInt(body.id);
    let flag = true;
    let userList = [];
    for (let item of userList){
        if (item.id === id) flag = false // 判断id是否已经存在
    }
    if (flag){
        userList.push(
            {
                name: body.name,
                id
            }
        );
        return {
            userList,
            res: 0,
            msg: '添加成功'
        }
    }else {
        return {
            userList,
            res: 1,
            msg: '添加失败'
        }
    }
});
// 使用mockjs模拟数据-改
Mock.mock('/post/mod','post',function(param){
    let body = JSON.parse(param.body);  // 获取请求参数
    let id = parseInt(body.id);
    let flag = false, index = 0;
    let userList = [];
    for (let i in userList) {
        if (userList[i].id === id) {
            flag = true;    // 判断id是否已经存在，存在返回true
            index = i;   //对应数组的下标
        }
    }
    // 如果id存在则修改
    if (flag) {
        userList[index] = body
        return {
            userList,
            res: 0,
            msg: '修改成功'
        }
    } else{
        return {
            userList,
            res: 1,
            msg: '修改失败'
        }
    }
});
// 使用mockjs模拟数据-删
Mock.mock('/post/del','post',function(param){
    let body = JSON.parse(param.body);  // 获取请求参数
    let id = parseInt(body.id);
    let flag = false, index = 0;
    let userList = [];
    for (let i in userList) {
        if (userList[i].id === id) {
            flag = true;    // 判断id是否已经存在，存在返回true
            index = i;  //对应数组的下标
        }
    }
    // 如果id存在则删除
    if (flag) {
        userList.splice(index,1);
        return {
            userList,
            res: 0,
            msg: '删除成功'
        }
    } else{
        return {
            userList,
            res: 1,
            msg: '删除失败'
        }
    }
});
// 使用mockjs模拟数据-查
Mock.mock('/post/query','post',function(param){
    let body = JSON.parse(param.body);  // 获取请求参数
    let id = parseInt(body.id);
    let userList = [];
    if(!id){    //如果id不存在，则直接返回全部
        return {
            userList,
            res: 0,
            msg: '查询成功'
        }
    }
    //id
    for (let item of userList) {
        if (item.id === id) {
            return {
                userList: [item],
                res: 0,
                msg: '查询成功'
            }
        }
    }
    // 如果id不存在则返回失败
    return {
        userList:[],
        res: 1,
        msg: '查询失败'
    }
});

Mock.mock('/post/menuList','get',function(){
    const menu_data = [
        {
            name:'一级菜单1',
            icon:'el-icon-location',
            path:'/index/menu1',
            component:'Main1'
        },
        {
            name:'一级菜单2',
            icon:'el-icon-document',
            path:'/index/menu2',
            component:'Main2'
        }
    ];

    return{
        menu_data
    }
});

