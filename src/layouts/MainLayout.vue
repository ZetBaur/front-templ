<template>
    <div v-if="show" class="menu-backdrop" @click="toggleMenu"></div>
    <SideMenu ref="sideBar" class="menu" @click="toggleMenu" />
    <router-view />
</template>

<script>
import { ref } from "vue";
import SideMenu from "@/components/side-menu.vue";
export default {
    components: { SideMenu },

    setup() {
        const show = ref(true);
        const sideBar = ref(null);

        const toggleMenu = () => {
            sideBar.value.classList.toggle("show-menu");
        };

        return { show, toggleMenu, sideBar };
    },
};
</script>

<style lang='scss'>
.menu-backdrop {
    position: fixed;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.33;
}

.menu {
    position: fixed;
    left: -150px;
    top: 0;
}

.show-menu {
    left: 0;
}
</style>