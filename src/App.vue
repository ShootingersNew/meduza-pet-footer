<template>
  <footer-component />
</template>

<script lang="ts">
import 'meduza-pet-ui-kit/styles'
import { defineComponent } from 'vue'
import { FooterComponent } from './widgets'

export default defineComponent({
  name: 'App',
  components: {
    FooterComponent,
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
