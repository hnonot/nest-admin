<template>
  <ConfigProvider v-bind="$props" :locale="getAntdLocale" :theme="theme">
    <slot />
  </ConfigProvider>
</template>

<script setup lang="ts">
import { useLocale } from "@/locales/useLocale";
import { useLayoutSettingStore } from "@/store/modules/layoutSetting";
import { ConfigProvider } from "ant-design-vue";
import { configProviderProps } from "ant-design-vue/es/config-provider/context";
import { merge } from "lodash-es";
import { computed } from "vue";

defineOptions({
  name: "ProConfigProvider",
});

const props = defineProps(configProviderProps());

const layoutSetting = useLayoutSettingStore();
const { getAntdLocale } = useLocale();

const theme = computed(() => {
  return merge({}, layoutSetting.themeConfig, props.theme);
});
</script>
