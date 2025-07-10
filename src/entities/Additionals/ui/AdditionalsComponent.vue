<template>
  <div class="additionals">
    <div class="additionals__contacts">
      <div class="header">{{ t('contacts.header') }}</div>
      <ul>
        <li class="contact" :key="contact.link" v-for="contact in contacts">
          <div class="contact__title">
            {{ t(contact.title) }}
          </div>
          <div class="contact__link">
            {{ t(contact.link) }}
          </div>
        </li>
      </ul>
    </div>
    <div class="additionals__adds">
      <div class="header">{{ t('adds.header') }}</div>
      <ul>
        <li class="adds__list-item" :key="add.link" v-for="add in adds">
          <LinkComponent
            :link="add.link"
            :theme="ELinkTheme.Black"
            :href="add.link"
            class="add__link"
          >
            {{ t(add.title) }}
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
import { contacts, adds } from '../models/additionalsData'

export default defineComponent({
  name: 'additionals-component',
  components: {
    LinkComponent,
  },
  setup() {
    const { t } = useI18n()
    return {
      ELinkTheme,
      contacts,
      adds,
      t,
    }
  },
})
</script>

<style lang="stylus" scoped>
@import 'meduza-pet-ui-kit/dist/styles/variables.styl'
@import '../../../shared/ui/variables.styl'
.additionals {
  display: flex;
  justify-content: space-between;
  background-color: #f8f9fa;
  &__contacts {
    flex-grow: 1;
    border-right: 1px solid palette-color-border;
  }
  &__adds {
    flex-grow: 1;
  }
  &__contacts, &__adds {
    padding: padding-y padding-x;
  }
}
.header
  font-size title-small
  line-height title-line-height
  margin-bottom 2px
.adds__list-item
  line-height list-line-height
.contact
  line-height 1.45
  margin-bottom 15px
  &__title
    color palette-bg-secondary
</style>
