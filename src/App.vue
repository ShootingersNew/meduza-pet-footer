<template>footer</template>

<script lang="ts">
import 'meduza-pet-ui-kit/styles'
import 'meduza-pet-ui-kit/variables'
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const { t } = useI18n()
    const changeLocaleHandler = (lang: { locale: string }) => {
      if (!window.eventBus) return
      const emitter = window.eventBus
      emitter.emit('localeChanged', lang)
    }
    return {
      changeLocaleHandler,
      t,
    }
  },
})
</script>
<style>
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
