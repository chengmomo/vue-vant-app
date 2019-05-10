<template>
    <div class="item">
        <van-cell class="item-header">
            <img :src="info.icon">
            {{info.title}}
        </van-cell>
        <van-row type="flex" align="center" class="item-content"
                 v-for="(item,index) in info.content" :key="index">
            <van-col :span="12" class="item-text">{{item.title}}</van-col>
            <van-col :span="12" style="text-align: right">
                <div v-if="item.textTip" class="item-content__right">
                    <p class="item-text">{{item.text}}</p>
                    <p class="item-tip">{{item.textTip}}</p>
                </div>
                <span v-else class="item-text item-content__right1">{{item.text}}</span>
                <img :src="item.icon">
            </van-col>
        </van-row>
        <van-cell class="item-footer" v-if="info.button">
            <span class="item-footer__button" @click="add">继续添加</span>
        </van-cell>
    </div>
</template>

<script>
    export default {
        name: 'logDetailItem',
        props: ['info'],
        data() {
            return {}
        },
        mounted() {
        },
        methods: {
            add() {
                this.$emit('click-item')
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .item {
        margin-top: 10px;
        .item-text {
            font-size: 16px;
            color: #333;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        .item-tip {
            font-size: 12px;
            color: #666;
        }

    }

    .van-cell:not(:last-child)::after {
        left: 0;
    }

    .van-cell {
        padding: 10px;
    }

    .item-header {
        font-size: 16px;
        color: #333;
        line-height: 20px;
        img {
            width: 20px;
            height: 20px;
            vertical-align: middle;
            margin-right: 5px;
        }
    }

    .item-content {
        padding: 16px 10px;
        background: white;
        border-bottom: 1px solid #ebedf0;
        .item-content__right {
            display: inline-block;
            width: calc(100% - 58px);
            padding-left: 5px;
        }
        .item-content__right1 {
            line-height: 48px;
        }
        img {
            margin-left: 10px;
            float: right;
            width: 48px;
            height: 48px;
        }
    }

    .item-footer__button {
        color: #499EFA;
        font-size: 16px;
    }

</style>
