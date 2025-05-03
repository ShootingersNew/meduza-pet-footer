<template>
  <div class="nav-lists">
    <div class="nav-lists__list" v-for="list in lists" :key="list.header">
      <div class="header">{{ list.header }}</div>
      <ul>
        <li class="nav-lists__list-item" :key="item.link" v-for="item in list.items">
          <LinkComponent
            :link="item.link"
            :theme="ELinkTheme.Black"
            :href="item.link"
            class="nav-lists__link"
          >
            {{ item.title }}
          </LinkComponent>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { LinkComponent } from 'meduza-pet-ui-kit'
import { ELinkTheme } from 'meduza-pet-ui-kit/enums'
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { en, ru } from '../i18n/index'
import { useNavData } from '../models/links'

export default defineComponent({
  name: 'nav-lists-component',
  components: {
    LinkComponent,
  },
  setup() {
    const { t } = useI18n({
      useScope: 'global',
      messages: {
        en,
        ru,
      },
    })
    const lists = useNavData()
    console.log(lists)

    return { t, lists, ELinkTheme }
  },
})
</script>

<style scoped lang="stylus">
@import 'meduza-pet-ui-kit/dist/styles/variables.styl'
@import '../../../shared/ui/variables.styl'
.nav-lists
  display flex
  justify-content space-between
  background-color #f8f9fa
  border-right 1px solid palette-color-border

  &__list:first-child
    border-right 1px solid palette-color-border
  &__list
    flex-grow 1
    padding padding-y padding-x
.header
  font-size title-small
  margin-bottom 2px
  line-height title-line-height
</style>
