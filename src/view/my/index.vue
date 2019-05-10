<template>
    <div class="my">
        <div @click="selectArea" class="top-w">
            <van-row>
                <van-col span="24" class="top">区域</van-col>
            </van-row>
        </div>
        <list-com :listData="dataList"
                  @executeFn="executeFn"></list-com>

        <transition name="slide-fade">
            <select-area v-if="isShowArea" @selectFn="selectFn"></select-area>
        </transition>
    </div>
</template>

<script>
    import selectArea from './selectArea'
    import listCom from './list'

    export default {
        name: 'my',
        components: {
            selectArea,
            listCom
        },
        props: {},
        data() {
            return {
                timeOutEvent: 0, // 长按事件定时器
                isShowArea: false,
                dataList: [
                    {
                        pt100: true,
                        type: 1,
                        name: '手动',
                        data: [
                            {
                                name: '大会议室开关1',
                                time: '',
                                picList: [1, 2]
                            },
                            {
                                name: '大会议室开关2',
                                time: '',
                                picList: [1, 3, 4]
                            },
                            {
                                name: '大会议室开关3',
                                time: '',
                                picList: [1, 2, 3]
                            }
                        ]
                    },{
                        type: 2,
                        name: '定时',
                        data: [
                            {
                                name: '大会议室开关1',
                                time: '12:00:12',
                                picList: [1, 2],
                                checked: false,
                            },
                            {
                                name: '大会议室开关2',
                                time: '',
                                picList: [1, 3, 4],
                                checked: true,
                            },
                            {
                                name: '大会议室开关3',
                                time: '13:22:02',
                                picList: [1, 2, 3],
                                checked: true,
                            }
                        ]
                    },{
                        type: 3,
                        name: '设备联动',
                        data: [
                            {
                                name: '大会议室开关1',
                                time: '',
                                picList: [1, 2],
                                isSelect: 1,
                                checked: true,
                            },
                            {
                                name: '大会议室开关2',
                                time: '',
                                picList: [1, 3, 4],
                                isSelect: 2,
                                checked: true,
                            }
                        ]
                    }
                ]
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
    .top-w {
        position: fixed;
        width: 100%;
        background-color: #F6F6F6;
    }


    .top {
        margin-top: 44px;
        margin-bottom: 10px;
        text-align: center;
        background: #fff;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: #000000;
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
