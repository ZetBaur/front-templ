<template>
    <div class="main-wrapper">
        <!-- <button @click="toggleMenu">Menu</button> -->

        <div ref="menuBackdrop" class="menu-backdrop" @click="closeMenu"></div>
        <div ref="menuWrapper" class="menu-wrapper" @click="openMenu">
            <SideMenu />
        </div>
        <router-view />
    </div>
</template>

<script>
import { ref } from "vue";
import SideMenu from "@/components/side-menu.vue";
export default {
    components: { SideMenu },

    setup() {
        const showMenu = ref(null);
        const menuWrapper = ref(null);
        const menuBackdrop = ref(null);

        const openMenu = () => {
            menuWrapper.value.classList.add("show-menu");
            menuBackdrop.value.classList.add("show-backdrop");
        };

        const closeMenu = () => {
            showMenu.value = false;
            menuWrapper.value.classList.remove("show-menu");
            menuBackdrop.value.classList.remove("show-backdrop");
        };

        const toggleMenu = () => {
            showMenu.value = !showMenu.value;
            menuWrapper.value.classList.toggle("show-menu");
            menuBackdrop.value.classList.toggle("show-backdrop");
        };

        return {
            showMenu,
            toggleMenu,
            menuWrapper,
            menuBackdrop,
            openMenu,
            closeMenu,
        };
    },
};
</script>

<style lang='scss'>
.main-wrapper {
    // position: relative;
    height: 100%;
    width: 100%;
    padding: 32px 16px 16px 80px;

    .menu-backdrop {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transform: scale(0);
        z-index: 90;
    }

    .show-backdrop {
        transform: scale(1);
    }

    .menu-wrapper {
        background: var(--color-one);
        position: absolute;
        width: 250px;
        height: 100%;
        left: -200px;
        top: 0;
        z-index: 100;
        transition: all 0.5s;
    }

    .show-menu {
        left: 0;
    }
}
</style>