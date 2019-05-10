<template>
    <div class="more">
        <nav-bar-com :bar-info="barInfo" @click-left="back"></nav-bar-com>
        <van-cell title="重命名" is-link value="日落时通知" @click="handleClick"></van-cell>
        <van-cell title="执行结果通知" is-link value="关闭" @click="handleClick"></van-cell>
        <van-cell title="执行方式" is-link value="云端" @click="handleClick"></van-cell>
        <div class="more-footer">
            <van-button round type="default" class="button-delete" @click="del">删除情景</van-button>
        </div>
    </div>
</template>

<script>

    import NavBarCom from "../../components/navBarCom"

    export default {
        name: 'logDetailMore',
        components: {NavBarCom},
        props: {},
        data() {
            return {
                barInfo: {
                    title: '更多',
                    leftText: '',
                    rightText: ''
                },
            }
        },
        mounted() {
        },
        methods: {
            back() {
                this.$router.back(-1)
            },
            handleClick() {

            },
            del() {
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .more-footer {
        width: 100%;
        text-align: center;
        padding: 0 30px;
        margin-top: 40px;
    }

    .button-delete {
        width: 100%;
    }
</style>
