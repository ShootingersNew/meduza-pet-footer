<template>
  <div class="navlist">
    <h3>{{ t(props.data.title) }}</h3>
    <ul>
      <li v-for="item in props.data.list" :key="item.text">
        <a :href="item.href">{{ t(item.text) }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const props = defineProps<{ data: { title: string; list: { text: string; href: string }[] } }>()

const { t } = useI18n()
</script>

<style scoped>
.navlist {
  padding: 24px 16px;
}
h3 {
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: 500;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  margin-bottom: 8px;
}
a {
  color: inherit;
  text-decoration: none;
}
</style>
