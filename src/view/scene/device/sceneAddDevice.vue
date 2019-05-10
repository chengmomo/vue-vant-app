<template>
    <div class="add">
        <nav-bar-com :bar-info="barInfo" @click-left="back" @click-right="submit"></nav-bar-com>
        <log-detail-item :info="datas[0]" @click-item="add"></log-detail-item>
        <log-detail-item :info="datas[1]" @click-item="add"></log-detail-item>
    </div>
</template>

<script>
    import NavBarCom from "../../../components/navBarCom"
    import LogDetailItem from "../../log/logDetailItem"

    export default {
        components: {LogDetailItem, NavBarCom},
        props: {},
        data() {
            return {
                barInfo: {
                    title: '新建情景',
                    leftText: '',
                    rightText: '确定'
                },
                datas: [
                    {
                        title: '如果',
                        button: true,
                        content: [{
                            title: '光照值低于10000LUX',
                            text: '环境质量检测',
                            textTip: '大会议室',
                            icon: require('./../../../assets/icons/device_environment.png'),
                        }]
                    },
                    {
                        title: '就执行',
                        button: true,
                        content: [
                            {
                                title: '卷起窗帘',
                                text: '电动卷帘',
                                textTip: '大会议室',
                                icon: require('./../../../assets/icons/device_curtain.png')
                            },
                            {
                                title: '2关',
                                text: '二键开关',
                                textTip: '东经理室',
                                icon: require('./../../../assets/icons/device_switch.png')
                            }
                        ]

                    }
                ]
            }
        },
        mounted() {

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
            submit() {
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
