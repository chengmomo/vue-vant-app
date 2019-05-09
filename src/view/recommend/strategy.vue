<template>
    <div class="content">
        <nav-bar-com :bar-info="barInfo" @click-left="back"></nav-bar-com>
        <p>开门自动亮灯</p>
        <div class="teachText"><span>寻找开关总是一件很麻烦的事，教你一招轻松解 决烦恼，简单几步实现酷炫的开门自动亮灯场景</span></div>
        <img src="../../assets/img/openDoor.png" alt="">
    </div>
</template>
<script>
import NavBarCom from '@/components/navBarCom'
export default {
    name: 'strategy',
    components: {NavBarCom},
    props: {
    },
    data() {
        return {
            barInfo: {
                title: '攻略',
                leftText: '',
                rightText: '' //没有就传空字符
            }
        }
    },
    methods: {
        back () {
            this.$router.go(-1)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .content {
        background-color: rgba(180,175,167,1);
        padding-bottom: 160px;
    }
    .content p {
        padding-top: 24px;
        color: #fff;
        padding-left: 10px;
        font-size: 20px;
        line-height: 28px;
        padding-bottom: 18px;
        margin: 0 10px 0 10px;
        border-bottom: 1px solid #fff;
    }
    .teachText {
        height: 106px;
        text-align: center;
        color: #fff;
        font-size: 16px;
        padding: 25px 16px 0 19px;
    }
</style>
