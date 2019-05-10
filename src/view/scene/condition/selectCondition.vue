<template>
    <div class="content">
        <nav-bar-com :bar-info="barInfo" @click-left="back"></nav-bar-com>
        <p><span v-if="t == '1'">56分后启动</span></p>
        <van-datetime-picker
                v-model="currentDate"
                type="time"
                :max-hour="maxHour"
                :formatter="formatter"
        />
    </div>
</template>
<script>
    import NavBarCom from '@/components/navBarCom'
    export default {
        name: 'selectCondition',
        components: {NavBarCom},
        props: {
        },
        data() {
            return {
                barInfo: {
                    title: '定时',
                    leftText: '',
                    rightText: '' //没有就传空字符
                },
                currentDate: '12:00',
                maxHour: 60
            }
        },
        mounted() {
            if (this.t == '1') {
                this.barInfo.title = '定时'
            } else {
                this.barInfo.title = '延时'
            }
        },
        methods: {
            back () {
                this.$router.go(-1)
            },
            formatter(type, value) {
                if (type === 'hour') {
                    return `${value}分`;
                } else if (type === 'minute') {
                    return `${value}秒`
                }
                return value;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .content p {
        margin-top: 365px;
        font-size: 16px;
        text-align: center;
        margin-bottom: 12px;
        color: #666666;
    }
</style>
