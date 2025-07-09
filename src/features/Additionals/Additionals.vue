<template>
  <div class="additionals-block">
    <h3>{{ t('AdditionalsBlock.title') }}</h3>
    <ul>
      <li v-for="item in additionals" :key="item.text">
        <a :href="item.href">{{ t('AdditionalsBlock.' + item.text) }}</a>
      </li>
    </ul>
    <div class="footer-note">
      <p>{{ t('AdditionalsBlock.error') }}</p>
      <p>©Skride 2022</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const additionals = [
  { text: 'ad', href: '#' },
  { text: 'banner', href: '#' },
  { text: 'safe', href: '#' },
]
</script>

<style scoped>
.additionals-block {
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
.footer-note {
  margin-top: 24px;
  color: #888;
  font-size: 13px;
}
</style>
