<template>
    <div class="add">
        <nav-bar-com :bar-info="barInfo" @click-left="back"></nav-bar-com>
        <van-cell class="header-section">
            <p class="header-title">如果条件满足时就做什么</p>
            <p class="header-tip">比如：打开会议室窗帘</p>
        </van-cell>
        <my-cell-item title="延时" :icon="icon" @click="onRoute('timing')"></my-cell-item>
        <van-cell-group class="device-section">
            <van-cell class="device-header">
                <div class="device-header__title">智能设备</div>
                <div class="device-header__button">区域</div>
            </van-cell>
            <my-cell-item title="环境质量检测面板" :icon="icon2" border label="大会议室"></my-cell-item>
            <my-cell-item title="电动卷帘" :icon="icon3" label="大会议室"></my-cell-item>
        </van-cell-group>
    </div>
</template>

<script>
    import NavBarCom from "../../../components/navBarCom"
    import MyCellItem from "../../../components/myCellItem"

    export default {
        components: {MyCellItem, NavBarCom},
        props: {},
        data() {
            return {
                item: {},
                barInfo: {
                    title: '选择执行结果',
                    leftText: '',
                    rightText: ''
                },
                icon: require('../../../assets/icons/option_delay.png'),
                icon1: require('../../../assets/icons/option_timing.png'),
                icon2: require('../../../assets/icons/device_environment.png'),
                icon3: require('../../../assets/icons/device_curtain.png'),
            }
        },
        mounted() {

        },
        methods: {
            back() {
                this.$router.back(-1)
            },
            onRoute(name) {
                this.$router.push({name, query: {t : '2'}})
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
    .header-section {
        padding: 20px 0;
        margin-bottom: 10px;
        .header-title {
            text-align: center;
            font-size: 22px;
        }
        .header-tip {
            text-align: center;
            font-size: 12px;
            color: #999999;
        }
    }

    .device-section {
        margin-top: 10px;
        .device-header {
            font-size: 14px;
            .device-header__title {
                width: 50%;
                float: left;

            }
            .device-header__button {
                width: 50%;
                float: left;
                text-align: right;
                color: #499EFA;
            }
        }
    }

    .device-header {
        border-bottom: 1px solid #ebedf0;
    }

</style>
