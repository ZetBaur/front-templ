<template>
    <form class="login-form dx-card" @submit.prevent="onSubmit">
        <DxLoadIndicator
            v-if="loading"
            width="44px"
            height="44px"
            :visible="true"
        />

        <DxTextBox v-model="formData.login" placeholder="Имя">
            <DxValidator>
                <DxRequiredRule message="Обязательное поле" />
            </DxValidator>
        </DxTextBox>

        <DxTextBox
            v-model="formData.password"
            mode="password"
            placeholder="Пароль"
        >
            <DxValidator>
                <DxRequiredRule message="Обязательное поле" />
            </DxValidator>
        </DxTextBox>

        <DxButton
            id="button"
            :use-submit-behavior="true"
            text="Войти"
            width="100%"
            :disabled="activeBtn"
        />
    </form>
</template>

<script>
import { useStore } from "vuex";
import DxLoadIndicator from "devextreme-vue/load-indicator";
import DxTextBox from "devextreme-vue/text-box";
import DxButton from "devextreme-vue/button";

import notify from "devextreme/ui/notify";
import { DxValidator, DxRequiredRule } from "devextreme-vue/validator";
import { computed, reactive } from "vue";
import { ref } from "vue";

export default {
    name: "login-form",
    components: {
        DxTextBox,
        DxButton,
        DxValidator,
        DxRequiredRule,
        DxLoadIndicator,
    },

    setup() {
        const store = useStore();
        const loading = ref(false);
        const formData = reactive({
            login: "",
            password: "",
        });
        const activeBtn = computed(() => {
            if (formData.login && formData.password) {
                return false;
            }
            return true;
        });

        const onSubmit = async () => {
            loading.value = true;
            await store.dispatch("auth/login", formData);
            loading.value = false;
            notify("Вы авторизованы", "success", 2000);
        };

        return { loading, formData, activeBtn, onSubmit };
    },
};
</script>

<style lang="scss">
.login-form {
    max-width: 300px;
    margin: auto;
    padding: 16px;
    margin-top: 100px;

    .dx-texteditor {
        background: #00000012;
        margin-bottom: 24px;
        padding: 14px;
        border-radius: 4px;
    }
    .dx-button {
        background: #ff5722;
        .dx-button-text {
            color: white;
        }
    }
}
</style>