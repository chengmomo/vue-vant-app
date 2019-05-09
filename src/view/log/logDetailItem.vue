<template>
    <div class="item">
        <van-cell class="item-header">
            <img src="../../assets/icons/select_single.png" class="item-header__icon">
            <p class="item-text item-header__title">{{info.title}}</p>
        </van-cell>
        <van-row type="flex" align="center" class="item-content"
                 v-for="(item,index) in info.content" :key="index">
            <van-col :span="12" class="item-text">{{item.title}}</van-col>
            <van-col :span="12" style="text-align: right">
                <div class="item-content__right" v-if="item.textTip">
                    <p class="item-text">{{item.text}}</p>
                    <p class="item-tip">{{item.textTip}}</p>
                </div>
                <span class="item-text item-content__right1" v-else>{{item.text}}</span>
                <img :src="item.icon" class="item-content__icon">
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
        .item-header__icon {
            width: 20px;
            height: 20px;
            float: left;
            margin-right: 5px;
        }
        .item-header__title {
            display: inline-block;
        }
    }

    .item-content {
        padding: 16px 10px;
        background: white;
        border-bottom: 1px solid #ebedf0;
        .item-content__right {
            display: inline-block;
        }
        .item-content__right1 {
            line-height: 48px;
        }
        .item-content__icon {
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
