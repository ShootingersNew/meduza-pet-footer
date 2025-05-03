<template>
  <div class="footer">
    <nav-lists-component class="footer__nav"></nav-lists-component>
    <additionals-component class="footer__additionals"></additionals-component>
  </div>
</template>

<script lang="ts">
import { AdditionalsComponent, NavListsComponent } from '@/entities'
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'footer-component',
  components: {
    AdditionalsComponent,
    NavListsComponent,
  },
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

<style lang="stylus" scoped>
@import 'meduza-pet-ui-kit/dist/styles/variables.styl'
@import '../../../shared/ui/variables.styl'
.footer
  font-size text-default
  height 433px
  display flex
  flex-flow row wrap
  width 100%
  border-top 1px solid palette-color-border
  &__nav
    flex-grow 1
  &__additionals
    flex-grow 1
</style>
