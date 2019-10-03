<template>
    <div>
        <ul>
        <li v-for="m in message" :key="m.id">
            <router-link :to="`/home/message/detail/${m.id}`">{{m.title}}</router-link>
        </li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data(){
        return {
            message: []
        }
    },
    mounted(){
        // 异步请求
        setTimeout(()=>{
            const messages = [
                {id:1, title:"m1"},
                {id:2, title:"m2"},
                {id:3, title:"m3"},
            ]
            this.message = messages
        }, 1000)
    }
}
</script>