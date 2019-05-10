<template>
    <div class="content">
        <nav-bar-com :bar-info="barInfo" @click-left="back"></nav-bar-com>
        <van-picker :columns="columns"/>
    </div>
</template>
<script>
    import NavBarCom from '@/components/navBarCom'
    export default {
        name: 'selectCondition',
        components: {NavBarCom},
        props: {
        },
        data() {
            return {
                barInfo: {
                    title: '高于指定光照值',
                    leftText: '',
                    rightText: '' //没有就传空字符
                },
                columns: ['7000LUX','8000LUX','9000LUX','10000LUX','11000LUX','12000LUX','13000LUX','14000LUX','15000LUX','16000LUX']
            }
        },
        mounted() {
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
    .van-picker {
        margin-top: 360px;
    }
</style>
