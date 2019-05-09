<template>
    <div class="log">
        <div v-for="(log,i) in [1,2,3]" :key="i"
             class="log-item">
            <van-row class="log-title" type="flex" align="center">
                <van-col span="16">
                    <span class="log-day">8</span>
                    <span class="log-month">五月</span>
                </van-col>
                <van-col span="8" class="log-week">星期六</van-col>
            </van-row>
            <van-steps direction="vertical" :active="activeIndex" class="log-content">
                <van-step v-for="(item,index) in logItems" :key="index"
                          class="step-item">
                    <div @click="toDetail(item)">
                        <h3 class="step-title">{{item.title}}</h3>
                        <div :class="item.result===1?'step-text':'step-text__fail'">
                            <span class="step-span">{{item.time}}</span>
                            <span class="step-span">{{item.result| filterResult}}</span>
                            <span class="step-span" v-if="item.failReason">{{item.failReason}}</span>
                        </div>
                    </div>
                </van-step>
            </van-steps>
        </div>
        <div class="del-button">
            <img src="../../assets/icons/delete.png" class="del-img" @click="delLog">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'log',
        props: {},
        filters: {
            filterResult: function (val) {
                return val === 0 ? '执行失败' : '执行成功'
            }
        },
        data() {
            return {
                activeIndex: null,
                logItems: [
                    {title: '大会议室窗帘1开', time: '12:40', result: 0, failReason: '设备离线'},
                    {title: '大会议室窗帘2开', time: '12:23', result: 1},
                    {title: '大会议室窗帘3开', time: '12:40', result: 1}
                ]
            }
        },
        methods: {
            delLog() {
                // console.log('delLog')
            },
            toDetail(item) {
                this.$router.push({ name: 'logDetail', params: { item: item }})
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .log {
        border-top: 1px solid #ddd;
        background: white;
    }

    .log-item {
        .log-title {
            height: 60px;
            padding: 0 20px;
            .log-day {
                font-size: 22px;
                margin-right: 6px;
            }
            .log-month {
                font-size: 12px;
                color: #666;
            }
            .log-week {
                font-size: 12px;
                color: #666;
                text-align: right;
            }
        }
    }

    .step-item:first-child {
        border-top: 1px solid #ddd;
    }

    .step-item {
        border-bottom: 1px solid #ddd;
        .step-title {
            color: #333;
            font-size: 16px;
            margin-bottom: 4px;
            font-weight: normal;
        }
        .step-text {
            color: #666;
            font-size: 12px;
        }
        .step-text__fail {
            color: #D93D3D;
            font-size: 12px;
        }
        .step-span {
            margin-right: 12px;
        }
    }

    .van-steps--vertical {
        padding-left: 40px;
    }

    .del-button {
        background: #fff;
        position: fixed;
        bottom: 65px;
        right: 18px;
        .del-img {
            height: 44px;
            width: 44px;
        }
    }
</style>
