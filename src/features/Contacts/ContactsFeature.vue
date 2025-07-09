<template>
  <div class="contacts-block">
    <h3>{{ t('ContactsBlock.title') }}</h3>
    <ul>
      <li v-for="item in contacts" :key="item.label">
        <span class="label">{{ t('ContactsBlock.' + item.label) }}</span>
        <span class="value">{{ item.value }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const contacts = [
  { label: 'podcasts', value: 'podcasts@meduza.io' },
  { label: 'service', value: 'service@meduza.io' },
  { label: 'payments', value: 'support@meduza.io' },
  { label: 'other', value: 'reports@meduza.io' },
]
</script>

<style scoped>
.contacts-block {
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
  display: flex;
  flex-direction: column;
}
.label {
  color: #888;
  font-size: 14px;
}
.value {
  font-size: 15px;
}
</style>
