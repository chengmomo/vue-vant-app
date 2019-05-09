<template>
    <div class="my">
        <div @click="selectArea">
            <van-row>
                <van-col span="24" class="top">区域</van-col>
            </van-row>
        </div>

        <div class="section">
            <van-row>
                <van-col span="24" class="tip">
                    <img :src="icons.tipImg">
                    手动
                </van-col>
            </van-row>
            <van-row class="my-title">
                <van-col span="24">
                    大会议室开关1关
                </van-col>
            </van-row>
            <van-row class="my-row">
                <van-col span="18">
                    <img :src="icons.option_manual" class="my-icon ml0">
                    <img :src="icons.link" class="my-icon link-icon">
                    <img :src="icons.device_switch" class="my-icon">
                </van-col>
                <van-col span="6" class="row-right"><span class="btn" @click="executeFn">执行</span></van-col>
            </van-row>
            <van-row class="my-title n-border">
                <van-col span="24">
                    大会议室开关1关
                </van-col>
            </van-row>
            <van-row class="my-row">
                <van-col span="18">
                    <img :src="icons.option_manual" class="my-icon ml0">
                    <img :src="icons.link" class="my-icon link-icon">
                    <img :src="icons.device_switch" class="my-icon">
                    <img :src="icons.device_curtain" class="my-icon">
                </van-col>
                <van-col span="6" class="row-right"><span class="btn">执行</span></van-col>
            </van-row>
            <van-row class="my-title n-border">
                <van-col span="18">
                    大会议室开关1关
                </van-col>
                <van-col span="6" class="my-time">
                    <span>13:32:23</span>
                </van-col>
            </van-row>
            <van-row class="my-row">
                <van-col span="18">
                    <img :src="icons.option_manual" class="my-icon ml0">
                    <img :src="icons.link" class="my-icon link-icon">
                    <img :src="icons.device_switch" class="my-icon">
                    <img :src="icons.device_curtain" class="my-icon">
                </van-col>
                <van-col span="6" class="row-right"><span class="btn">执行</span></van-col>
            </van-row>
        </div>
        <div class="section">
            <van-row>
                <van-col span="24" class="tip">
                    <img :src="icons.tipImg">
                    定时
                </van-col>
            </van-row>
            <van-row class="my-title">
                <van-col span="18">
                    大会议室开关1关
                </van-col>
                <van-col span="6" class="my-time">
                    <span>13:32:23</span>
                </van-col>
            </van-row>
            <van-row class="my-row">
                <van-col span="14">
                    <img :src="icons.option_timing" class="my-icon ml0">
                    <img :src="icons.link" class="my-icon link-icon">
                    <img :src="icons.device_switch" class="my-icon">
                </van-col>
                <van-col span="10" class="row-right">
                    <van-switch
                            class="my-switch"
                            v-model="checked"
                            size="25px"
                    />
                    <span class="btn">执行</span>
                </van-col>
            </van-row>
            <van-row class="my-title n-border">
                <van-col span="18">
                    大会议室开关1关
                </van-col>
                <van-col span="6" class="my-time">
                    <span>13:32:23</span>
                </van-col>
            </van-row>
            <van-row class="my-row">
                <van-col span="14">
                    <img :src="icons.option_timing" class="my-icon ml0">
                    <img :src="icons.link" class="my-icon link-icon">
                    <img :src="icons.device_switch" class="my-icon">
                </van-col>
                <van-col span="10" class="row-right">
                    <van-switch
                            class="my-switch"
                            v-model="checked"
                            size="25px"
                    />
                    <span class="btn">执行</span>
                </van-col>
            </van-row>
        </div>
        <div class="section">
            <van-row>
                <van-col span="24" class="tip">
                    <img :src="icons.tipImg">
                    设备联动
                </van-col>
            </van-row>
            <van-row class="my-title">
                <van-col span="24">
                    大会议室开关1关
                </van-col>
            </van-row>
            <van-row class="my-row">
                <van-col span="18">
              <span class="img-w">
                  <img :src="icons.option_timing" class="my-icon ml0">
                  <img :src="icons.select_multi" class="is-select">
              </span>
                    <img :src="icons.link" class="my-icon link-icon">
                    <img :src="icons.device_switch" class="my-icon">
                </van-col>
                <van-col span="6" class="row-right">
                    <van-switch
                            class="my-switch"
                            v-model="checked"
                            size="25px"
                    />
                </van-col>
            </van-row>
            <van-row class="my-title n-border">
                <van-col span="24">
                    大会议室开关1关
                </van-col>
            </van-row>
            <van-row class="my-row">
                <van-col span="18">
              <span class="img-w">
                  <img :src="icons.option_timing" class="my-icon ml0">
                  <img :src="icons.select_single" class="is-select">
              </span>
                    <img :src="icons.link" class="my-icon link-icon">
                    <img :src="icons.device_switch" class="my-icon">
                </van-col>
                <van-col span="6" class="row-right">
                    <van-switch
                            class="my-switch"
                            v-model="checked"
                            size="25px"
                    />
                </van-col>
            </van-row>
        </div>
        <transition name="slide-fade">
            <select-area v-if="isShowArea" @selectFn="selectFn"></select-area>
        </transition>

    </div>
</template>

<script>
    import selectArea from './selectArea'

    export default {
        name: 'my',
        components: {
            selectArea
        },
        props: {},
        data() {
            return {
                isShowArea: false,
                icons: {
                    tipImg: require("@/assets/icons/title_manual.png"),
                    option_manual: require("@/assets/icons/option_manual.png"),
                    device_switch: require("@/assets/icons/device_switch.png"),
                    device_curtain: require("@/assets/icons/device_curtain.png"),
                    option_timing: require("@/assets/icons/option_timing.png"),
                    select_multi: require("@/assets/icons/select_multi.png"),
                    select_single: require("@/assets/icons/select_single.png"),
                    link: require("@/assets/icons/link.png")
                },
                checked: true,
                dataList: []
            }
        },
        methods: {
            executeFn() {
                this.$router.push({name: 'logDetail'})
            },
            selectArea() {
                this.isShowArea = true;
            },
            selectFn(data) {
                this.isShowArea = false;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .top {
        margin-top: 54px;
        text-align: center;
        background: #fff;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: #000000;
    }

    .section {
        background: #fff;
        margin-top: 10px;
        .my-title {
            border-top: 1px solid #F6F6F6;
            color: #000;
            font-size: 14px;
            margin-top: 1px;
            font-style: normal;
            font-weight: normal;
            padding-left: 10px;
            padding-top: 7px;
            padding-right: 10px;
        }
        .n-border {
            border-top: none;
        }
        .my-icon {
            width: 48px;
            height: auto;
            display: inline-block;
            margin-left: 10px;
            vertical-align: middle;
        }
        .link-icon {
            height: 7px;
            width: auto;
        }
        .ml0 {
            margin-left: 0px;
        }
        .my-row {
            background: #fff;
            padding-top: 10px;
            padding-bottom: 10px;
            margin-right: 10px;
            margin-left: 10px;
            border-bottom: 1px solid #F6F6F6;
            .row-right {
                text-align: right;
                padding-top: 10px;
            }
            .btn {
                color: #499EFA;
                border-radius: 50px;
                border: 1px solid #499EFA;
                display: inline-block;
                padding-left: 16px;
                padding-right: 16px;
                padding-top: 3px;
                padding-bottom: 3px;
                font-size: 14px;
            }
        }
    }

    .my-switch {
        vertical-align: middle;
        margin-right: 10px;
    }

    .my-time {
        text-align: right;
        span {
            color: #499EFA;
            font-size: 14px;
            background-color: #F6F6F6;
            padding-left: 9px;
            padding-right: 9px;
            display: inline-block;
            border-radius: 20px;
            text-align: center;
        }

    }

    .tip {
        background: #fff;
        padding-left: 10px;
        color: #666666;
        font-size: 14px;
        padding-top: 10px;
        padding-bottom: 10px;
        img {
            width: 20px;
            height: auto;
            vertical-align: middle;
            margin-right: 2px;
        }
    }

    .img-w {
        position: relative;
    }

    .is-select {
        position: absolute;
        bottom: -22px;
        right: 0;
        width: 22px;
        height: auto;
    }

    .slide-fade-enter-active {
        transition: all .4s ease;
    }

    .slide-fade-leave-active {
        transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateY(500px);
        opacity: 0;
    }
</style>
