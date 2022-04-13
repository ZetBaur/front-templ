<template>
    <ul class="menu">
        <li
            class="item"
            v-for="item in menuItems"
            :key="item"
            @click.self="linkClick($event, 'first', item)"
        >
            {{ item.text }}
            <ul class="submenu">
                <li
                    class="subitem"
                    v-for="el in item.items"
                    :key="el"
                    @click="linkClick($event, 'second')"
                >
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

        const linkClick = (e, name, item) => {
            console.log(item);
            console.log(name);
            console.log(e);
            if (name === "first") {
                if (e.target.children[0].style.display === "none") {
                    e.target.children[0].style.display = "block";
                } else {
                    e.target.children[0].style.display = "none";
                }
            }
        };

        // const toggleSubMenuItems = (e, t) => {
        //     console.log(e.target.children);
        //     console.log(t);
        //     if (e.target.children[0].style.display === "none") {
        //         e.target.children[0].style.display = "block";
        //     } else {
        //         e.target.children[0].style.display = "none";
        //     }
        // };

        return {
            menuItems,
            currentItem,
            // toggleSubMenuItems,
            linkClick,
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
