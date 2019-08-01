<template>
    <div>
        <h3>HomeContainer</h3>
        <mt-swipe :auto="4000"> 

            <mt-swipe-item v-for='item in lunbotuList' :key='item.id'>
                <img :src='item.img' alt="">
            </mt-swipe-item>

        </mt-swipe>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'   // 个别不是组件、只是函数的那种，需要在单独在要使用的组件内部再引用一次
export default {
    data(){
        return {
            lunbotuList: []
        }
    },
    methods: {
        getLunbotu(){
            this.$http.get('http://www.liulongbin.top:3005/api/getlunbo')
            .then( result => {
                if( result.body.status === 0){ // 请求成功
                    this.lunbotuList = result.body.message
                }else{   // 请求失败，用 tosat 弹窗
                    Toast({
                        message: '加载轮播图失败',
                        position: 'middle',
                        duration: 2000
                    });
                }
            })
        }
    },
    created(){
        this.getLunbotu()
    }
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height:200px;

    .mint-swipe-item{
        &:nth-child(1){
            background-color: blue;
        }
        &:nth-child(2){
            background-color: green;
        }
        &:nth-child(3){
            background-color: red;
        }
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>
