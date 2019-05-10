<template>
    <div class="content">
        <nav-bar-com :bar-info="barInfo" @click-left="back"></nav-bar-com>
        <van-list>
            <van-cell
                    v-for="item in list"
                    :key="item"
                    :title="item"
                    @click="onRoute('selectCondition')"
            />
        </van-list>
    </div>
</template>
<script>
    import NavBarCom from '@/components/navBarCom'
    export default {
        name: 'monitorList',
        components: {NavBarCom},
        props: {
        },
        data() {
            return {
                barInfo: {
                    title: '环境质量监测面板',
                    leftText: '',
                    rightText: '' //没有就传空字符
                },
                list: ['高于指定PM2.5值','低于指定PM2.5值','高于指定二氧化碳值','低于指定二氧化碳值','高于指定甲醛值','低于指定甲醛值','高于指定光照值','低于指定光照值']
            }
        },
        mounted() {
        },
        methods: {
            back () {
                this.$router.go(-1)
            },
            onRoute(name) {
                this.$router.push({name})
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .van-cell {
        font-size: 16px;
        line-height: 40px;
    }
</style>
