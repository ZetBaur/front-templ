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
                    @click="linkClick($event, 'second', item)"
                >
                    {{ el.text }}
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
import service from "@/data/app-navigation";

export default {
    setup() {
        const router = useRouter();
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

            if (item.route) {
                router.push(item.route);
            }
        };

        return {
            menuItems,
            currentItem,
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
