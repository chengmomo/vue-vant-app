<template>
    <div class="add">
        <nav-bar-com :bar-info="barInfo" @click-left="back" @click-right="submit"></nav-bar-com>
        <log-detail-item :info="datas[0]" @click-item="add"></log-detail-item>
        <log-detail-item :info="datas[1]" @click-item="add"></log-detail-item>
        <div class="detail-footer">
            <van-cell title="生效时间段" is-link value="全天" class="detail-footer-cell" @click="onRoute('chooseTime')"></van-cell>
        </div>
        <van-dialog
                v-model="show"
                title="设置名称"
                show-cancel-button
                className="dialog-wrapper"
                @confirm="clickConfirm"
                @cancel="clickCancel"
        >
            <div class="dialog-content">
                <van-field v-model="value" placeholder="大会议室开关1关" class="dialog-input"></van-field>
                <van-checkbox v-model="checked" class="dialog-checkbox">执行结果通知</van-checkbox>
            </div>
        </van-dialog>
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
                show: false,
                value: '',
                checked: false,
                barInfo: {
                    title: '新建情景',
                    leftText: '',
                    rightText: '确定'
                },
                datas: [
                    {
                        title: '如果',
                        icon: require('@/assets/icons/select_single.png'),
                        content: [{
                            title: '手动执行',
                            text: '',
                            icon: require('./../../../assets/icons/option_manual.png'),
                        }]
                    },
                    {
                        title: '就执行',
                        icon: require('@/assets/icons/title_execute.png'),
                        button: true,
                        content: [
                            {
                                title: '5分钟后',
                                text: '',
                                icon: require('./../../../assets/icons/option_delay.png')
                            },
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
                this.show = true
            },
            clickCancel() {

            },
            clickConfirm() {
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .dialog-wrapper {
        background: rgba(252, 252, 252, 1);
        .dialog-content{
            padding: 20px;
        }
        .dialog-input{
            border: 1px solid #ebedf0;
            margin-bottom: 12px;
        }
        .dialog-checkbox{
            font-size: 13px;
            padding-left: 2px;
        }
    }

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
