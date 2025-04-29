<template>
  <div>footer lel</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'footer-component',
  setup() {
    const { t } = useI18n({
      useScope: 'global',
      messages: {
        // en,
        // ru,
      },
    })
    return {
      t,
    }
  },
})
</script>

<style lang="scss" scoped></style>
