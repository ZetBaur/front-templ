<template>
    <SideMenu />
    <router-view />
</template>

<script>
import SideMenu from "@/components/side-menu.vue";
export default {
    components: { SideMenu },
};
</script>

<style>
</style>