<template>
    <div class="detail">
        <div class="offWorkHeader">
            <nav-bar-com :bar-info="barInfo" @click-left="back"></nav-bar-com>
        </div>
        <log-detail-item :info="datas[0]" @click-item="add"></log-detail-item>
        <log-detail-item :info="datas[1]" @click-item="add"></log-detail-item>
        <div class="detail-footer">
            <van-button round type="info">启用</van-button>
        </div>
    </div>
</template>

<script>
    import LogDetailItem from "../log/logDetailItem"
    import NavBarCom from "../../components/navBarCom"
    export default {
        name: 'offWork',
        components: {NavBarCom, LogDetailItem},
        props: {},
        data() {
            return {
                item: {},
                barInfo: {
                    title: '下班',
                    leftText: '',
                    rightText: ''
                },
                datas: [
                    {
                        title: '如果',
                        button: true,
                        content: [{
                            title:'18:00',
                            text: '定时',
                            icon: require('./../../assets/icons/option_timing.png')
                        }]
                    },
                    {
                        title: '就执行',
                        button: true,
                        content: [{
                            title: '卷起窗帘',
                            text: '电动卷帘',
                            textTip: '大会议室',
                            icon: require('./../../assets/icons/device_curtain.png')
                        }]
                    }
                ]
            }
        },
        mounted() {
            this.item = this.$route.params.item
        },
        methods: {
            back() {
                this.$router.back(-1)
            },
            onRoute(name) {
                this.$router.push({name})
            },
            add() {
                console.log('add')
            },
            handleClick() {
                console.log('handleClick')
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .detail-footer {
        position: fixed;
        bottom: 25px;
        left: 0;
        width: 100%;
        text-align: center;
        .van-button--info {
            width: 300px;
            height: 44px;
        }
    }
    .offWorkHeader {
        background-image: url("../../assets/img/offWork.png");
        height: 225px;
    }
</style>
<style lang="scss">
    .offWorkHeader .van-nav-bar {
        opacity: 0
    }
</style>
