<template>
    <div class="select-area-w">
        <div class="select-area">
            <span>筛选区域</span>
            <ul v-for="(v, i) in dataList">
                <li @click="selectList(v)">{{v.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'selectArea',
        components: {},
        props: [
            'selectData'
        ],
        data() {
            return {
                dataList: [
                    {id: 1, name: '全部区域'},
                    {id: 2, name: '大会议室'},
                    {id: 3, name: '经理室'},
                ]
            }
        },
        methods: {
            selectList(v) {
                this.$emit("selectFn", v)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .select-area-w {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .3);
        text-align: center;
        z-index: 10;
        .select-area {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: #fff;
            border-top-right-radius: 20px;
            border-top-left-radius: 20px;
            padding-left: 10px;
            padding-right: 10px;
            color: #666666;
            span {
                display: inline-block;
                padding-top: 10px;
                padding-bottom: 10px;
            }
            li {
                border-top: 1px solid #DADADA;
                color: #000000;
                line-height: 60px;
                &:active {
                    color: #499EFA;
                }
            }
        }

    }
</style>
