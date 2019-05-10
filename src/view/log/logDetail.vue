<template>
    <div class="detail">
        <nav-bar-com :bar-info="barInfo" @click-left="back" @click-right="onRoute('logDetailMore')"></nav-bar-com>
        <log-detail-item :info="datas[0]" @click-item="add(1)"></log-detail-item>
        <log-detail-item :info="datas[1]" @click-item="add(2)"></log-detail-item>
        <div class="detail-footer">
            <van-cell title="生效时间段" is-link value="全天" class="detail-footer-cell" @click="handleClick"></van-cell>
        </div>
    </div>
</template>

<script>
    import LogDetailItem from "./logDetailItem"
    import NavBarCom from "../../components/navBarCom"

    export default {
        name: 'logDetail',
        components: {NavBarCom, LogDetailItem},
        props: {},
        data() {
            return {
                item: {},
                barInfo: {
                    title: '标题',
                    leftText: '',
                    rightText: '更多'
                },
                datas: [
                    {
                        title: '如果',
                        content: [{
                            title: '18:00',
                            text: '定时',
                            icon: require('./../../assets/icons/option_timing.png')
                        }],
                        button: true
                    },
                    {
                        title: '就执行',
                        content: [{
                            title: '卷起窗帘',
                            text: '电动卷帘',
                            textTip: '大会议室',
                            icon: require('./../../assets/icons/device_curtain.png')
                        }],
                        button: true
                    }
                ]
            }
        },
        mounted() {
            this.item = this.$route.params.item
            this.barInfo.title = this.item ? this.item.title : ''
        },
        methods: {
            back() {
                this.$router.back(-1)
            },
            onRoute(name) {
                this.$router.push({name})
            },
            add(f) {
                if (f === 1) {
                    this.$router.push({name: 'sceneAddManual'})
                } else if (f === 2) {
                    this.$router.push({name: 'sceneAddDevice'})
                }
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
        bottom: 0;
        left: 0;
        width: 100%;
        .detail-footer-cell {
            padding: 20px 10px;
        }
    }
</style>
