<template>
    <ul class="menu">
        <li
            class="item"
            v-for="item in menuItems"
            :key="item"
            @click.self="toggleSubMenuItems($event)"
        >
            {{ item.text }}
            <ul class="submenu">
                <li class="subitem" v-for="el in item.items" :key="el">
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
    setup() {
        const menuItems = service.getMenuItems();
        const currentItem = ref(menuItems[0]);

        const toggleSubMenuItems = (e) => {
            if (e.target.children[0].style.display === "none") {
                e.target.children[0].style.display = "block";
            } else {
                e.target.children[0].style.display = "none";
            }
        };

        return {
            menuItems,
            currentItem,
            toggleSubMenuItems,
        };
    },
};
</script>

<style lang='scss'>
.menu {
    font-size: 22px;

    .submenu {
        margin-left: 24px;
    }
}
</style>
