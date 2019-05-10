<template>
    <div class="list-w">
        <div class="section" :class="{'pt100': v.pt100}" v-for="(v, i) in listData">
            <van-row>
                <van-col span="24" class="tip">
                    <img :src="icons[`title_${v.type}`]">
                    {{v.name}}
                </van-col>
            </van-row>
            <div v-for="data in v.data">
                <van-row class="my-title">
                    <van-col span="18">
                        {{data.name}}
                    </van-col>
                    <van-col span="6" class="my-time" v-if="data.time">
                        <span>13:32:23</span>
                    </van-col>
                </van-row>
                <van-row class="my-row">
                    <van-col span="14">
                    <span class="img-w" v-if="data.isSelect">
                        <img :src="icons[`type${data.picList[0]}`]" class="my-icon">
                        <img :src="icons[`select_${data.isSelect}`]" class="is-select">
                    </span>
                        <img v-else :src="icons[`type${data.picList[0]}`]" class="my-icon">
                        <img :src="icons.link" class="my-icon link-icon">
                        <img v-for="pic in data.picList.slice(1)" :src="icons[`type${pic}`]" class="my-icon">
                    </van-col>

                    <van-col span="10" class="row-right">
                        <van-switch
                                class="my-switch"
                                v-model="data.checked"
                                size="25px"
                                v-if="v.type !== 1"
                        />
                        <span class="btn" @click="executeFn" v-if="v.type !== 3">执行</span>
                    </van-col>
                </van-row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'listCom',
        props: {
            listData: {
                type: Array
            }
        },
        data () {
            return {
                icons: {
                    title_1: require("@/assets/icons/title_manual.png"),
                    title_2: require("@/assets/icons/title_timing.png"),
                    title_3: require("@/assets/icons/title_device.png"),
                    select_2: require("@/assets/icons/select_multi.png"),
                    select_1: require("@/assets/icons/select_single.png"),
                    link: require("@/assets/icons/link.png"),
                    type1: require("@/assets/icons/option_manual.png"),
                    type2: require("@/assets/icons/option_timing.png"),
                    type3: require("@/assets/icons/device_curtain.png"),
                    type4: require("@/assets/icons/device_switch.png"),
                },
            }
        },
        mounted() {

        },
        methods: {
            executeFn() {
                this.$emit('executeFn')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .pt100 {
        padding-top: 100px;
    }
    .section {
        background: #fff;
        margin-top: 10px;
        .my-title {
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
        border-bottom: 0.0625rem solid #F6F6F6;
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
</style>
