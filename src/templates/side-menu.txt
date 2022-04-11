<template>
    <DxTreeView
        :items="menuItems"
        :width="250"
        @item-click="selectItem"
        @menuLinkClick="$emit('menuLinkClick', e)"
        class="menu-form"
    />
</template>
<script>
import { ref } from "vue";
import DxTreeView from "devextreme-vue/tree-view";
import service from "@/data/app-navigation";

export default {
    emits: ["menuLinkClick"],
    components: {
        DxTreeView,
    },

    setup(_, { emit }) {
        const menuItems = service.getMenuItems();
        const currentItem = ref(menuItems[0]);

        const selectItem = (e) => {
            currentItem.value = e.itemData;
            console.log(currentItem.value);
            emit("menuLinkClick", e);
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
    width: 100%;
    height: 100%;
    background: var(--color-one);
    padding-top: 16px;
}
</style>
