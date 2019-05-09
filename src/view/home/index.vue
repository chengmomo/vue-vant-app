<template>
    <div class="home">
        <div class="menu">
            <van-tabs @click="menuClick" class="menu-tab" v-model="active">
                <van-tab title="推荐"></van-tab>
                <van-tab title="我的"></van-tab>
                <van-tab title="日志"></van-tab>
            </van-tabs>
            <img :src="addImg" class="add" @click="addClick">
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'recommend',
        data() {
            return {
                addImg: require("@/assets/icons/add.png"),
                active: 0
            }
        },
        watch: {
            $route(to, from) {

            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                if (to.name === 'recommend') {
                    vm.active = 0
                } else if (to.name === 'myPage') {
                    vm.active = 1
                } else if (to.name === 'log') {
                    vm.active = 2
                }
            });
        },
        methods: {
            menuClick(index, title) {
                if (index === 0) {
                    this.$router.push(`/home/recommend`)
                } else if (index === 1) {
                    this.$router.push(`/home/my-page`)
                } else if (index === 2) {
                    this.$router.push(`/home/log`)
                }
            },
            addClick() {
                this.$router.push({name: 'sceneAddManual'})
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .menu {
        .van-tab {
            color: #000;
        }
        .van-tabs__line {
            background-color: rgba(73, 158, 250, 1);
        }
        .van-tab--active {
            color: rgba(73, 158, 250, 1);
        }
    }

</style>
<style scoped lang="scss">
    .menu {
        background: #fff;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1;
        .add {
            position: absolute;
            top: 50%;
            margin-top: -9px;
            width: 16px;
            height: auto;
            right: 10px;
        }
    }

    .menu-tab {
        width: 70%;
        margin: 0 auto;
    }

</style>
