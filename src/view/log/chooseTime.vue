<template>
    <div class="more">
        <nav-bar-com :bar-info="barInfo" @click-left="back" @click-right="submit"></nav-bar-com>
        <van-cell-group>
            <van-cell title="重复" is-link value="每天" @click="handleClick(true)"></van-cell>
        </van-cell-group>
        <van-cell-group style="margin-top: 10px">
            <van-switch-cell v-model="checked" title="全天" class="cell-switch"></van-switch-cell>
            <van-cell title="开始" value="00:00"></van-cell>
            <van-cell title="结束" value="00:00"></van-cell>
        </van-cell-group>
        <van-popup v-model="show" position="bottom" overlay>
            <div>
                <van-checkbox-group v-model="result">
                    <van-cell-group>
                        <van-cell
                                v-for="(item, index) in list"
                                clickable
                                :key="index"
                                :title="item"
                                @click="toggle(index)"
                        >
                            <van-checkbox :name="item" ref="checkboxes"></van-checkbox>
                        </van-cell>
                    </van-cell-group>
                </van-checkbox-group>
                <div class="footer-wrapper">
                    <div class="footer-item" @click="handleClick(false)">取消</div>
                    <div class="footer-item footer-confirm">确定</div>
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>

    import NavBarCom from "../../components/navBarCom"

    export default {
        name: 'logDetailMore',
        components: {NavBarCom},
        props: {},
        data() {
            return {
                checked: true,
                show: false,
                result: [],
                barInfo: {
                    title: '生效时间段',
                    leftText: '',
                    rightText: '确定'
                },
                list: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
            }
        },
        mounted() {
        },
        methods: {
            back() {
                this.$router.back(-1)
            },
            submit() {

            },
            handleClick(type) {
                this.show = type
            },
            toggle(index) {
                this.$refs.checkboxes[index].toggle();
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .cell-switch {
        border-bottom: 1px solid #ebedf0;
    }

    .footer-wrapper {
        .footer-item {
            width: 50%;
            height: 50px;
            line-height: 50px;
            float: left;
            text-align: center;
            font-size: 16px;
        }
    }

    .footer-confirm {
        color: #499EFA;
        border-left: 1px solid #ebedf0;
    }
</style>
