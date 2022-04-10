<template>
    <div class="menu-form">
        <DxTreeView :items="menuItems" :width="200" @item-click="selectItem" />
    </div>
</template>
<script>
import { ref } from "vue";
import DxTreeView from "devextreme-vue/tree-view";
import service from "@/data/app-navigation";

export default {
    components: {
        DxTreeView,
    },

    setup() {
        const menuItems = service.getMenuItems();
        const currentItem = ref(menuItems[0]);

        const selectItem = (e) => {
            currentItem.value = e.itemData;
            console.log(currentItem.value);
        };

        return {
            menuItems,
            currentItem,
            selectItem,
        };
    },
};
</script>
<style lang='scss'>
.menu-form {
    width: 200px;
    height: 100%;
    background: lightgray;
    padding-top: 16px;
}
.open-menu {
    left: 0;
}
</style>
