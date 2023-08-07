<template>
    <div>
        module用户a：{{$store.state.a.username}}
        <br>
        module用户b：{{$store.state.b.username}}
    </div>
</template>

<script>
    export default {
        name: "Main3"
    }
</script>

<style scoped>
</style>
