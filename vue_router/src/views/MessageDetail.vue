<template>
    <ul>
        <h2>嘿嘿</h2>
        <li>
            ID: {{$route.params.id}}
            <p>{{this.array.id}}</p>
            <p>{{this.array.msg}}</p>
            <p>{{this.array.content}}</p>
        </li>
    </ul>
</template>
<script>
export default {
    data() {
        return {
            array: []
        }
    },
    mounted() {
        setTimeout(()=>{
            const detailArray = [
                {id: 1, msg: 'aa', content: "bb"},
                {id: 2, msg: 'ak', content: "bb"},
                {id: 3, msg: 'ac', content: "bb"}
            ]
            const id = this.$route.params.id*1
            this.detailArray = detailArray
            this.array = this.detailArray.find(value => value.id === id)
        },1000)
    },
    watch: {
        $route: function(value) {
            const id = value.params.id*1;
            this.array = this.detailArray.find(detail => detail.id === id)
        }
    },
}
</script>