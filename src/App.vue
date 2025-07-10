<template>
  <footer-component />
</template>

<script lang="ts" setup>
import 'meduza-pet-ui-kit/styles'
import { FooterComponent } from './widgets'
import I18nService from 'host/I18nService'
import { en, ru } from '@/shared/config/i18n'

defineOptions({
  name: 'App',
  components: {
    FooterComponent,
  },
})
I18nService.addLocales({
  en,
  ru,
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
