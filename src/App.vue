<template>
  <footer-component></footer-component>
</template>

<script lang="ts">
import 'meduza-pet-ui-kit/styles'
import 'meduza-pet-ui-kit/variables'
import { defineComponent } from 'vue'
import { FooterComponent } from './widgets'
export default defineComponent({
  name: 'App',
  components: {
    FooterComponent,
  },
  setup() {},
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
