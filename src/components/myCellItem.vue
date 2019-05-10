<template>
    <div class="my-cell">
        <van-cell :is-link="isLink" @click="handleClick"
                  :style="{borderBottom:(border===true?'1px solid #ebedf0':'0')}">
            <template slot="title">
                <div v-if="label===''" class="cell-item">
                    <img :src="icon" class="cell-icon" v-if="icon">
                    <div class="cell-title">{{title}}</div>
                </div>
                <div v-else class="cell-item1">
                    <img :src="icon" class="cell-icon" v-if="icon">
                    <div style="display: inline-block">
                        <p class="cell-title">{{title}}</p>
                        <p class="cell-label">{{label}}</p>
                    </div>
                </div>
                <!--<van-tag type="danger">标签</van-tag>-->
            </template>
        </van-cell>
    </div>
</template>

<script>
    export default {
        name: 'myCellItem',
        props: {
            title: {
                type: String,
                default: '标题'
            },
            label: {
                type: String,
                default: ''
            },
            border: {
                type: Boolean,
                default: false
            },
            isLink: {
                type: Boolean,
                default: true
            },
            icon: {
                type: String
            }
        },
        data() {
            return {}
        },
        mounted() {


        },
        methods: {
            handleClick() {
                this.$emit("click")
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .cell-icon {
        width: 34px;
        height: 34px;
        margin-right: 10px;
    }

    .cell-title {
        font-size: 16px;
    }

    .cell-item {
        line-height: 34px;
        .cell-icon {
            float: left;
        }
        .cell-title {
            display: inline-block;
        }
    }

    .cell-item1 {
        display: inline-block;
        .cell-label {
            color: #666666;
            font-size: 12px;
        }
    }

    .van-cell__right-icon {
        line-height: 34px;
    }
</style>
