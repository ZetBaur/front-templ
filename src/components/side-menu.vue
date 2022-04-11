<template>
    <ul class="menu">
        <li class="item" v-for="item in menuItems" :key="item">
            {{ item.text }}
            <ul class="submenu">
                <li class="sumitem" v-for="el in item.items" :key="el">
                    {{ el.text }}
                </li>
            </ul>
        </li>
    </ul>
</template>
<script>
import { ref } from "vue";
import service from "@/data/app-navigation";

export default {
    emits: ["menuLinkClick"],
    components: {},

    setup() {
        const menuItems = service.getMenuItems();
        const currentItem = ref(menuItems[0]);

        console.log(menuItems);

        return {
            menuItems,
            currentItem,
        };
    },
};
</script>

<style lang='scss'>
.menu {
    & + li {
        color: blue;
    }
}
// .menu-form {
//     width: 100%;
//     height: 100%;
//     background: var(--color-one);
//     padding-top: 16px;
// }
</style>
