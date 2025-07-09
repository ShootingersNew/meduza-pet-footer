<template>
  <footer class="footer-block">
    <NavList :data="navData[0]" />
    <NavList :data="navData[1]" />
    <ContactsBlock />
    <AdditionalsBlock />
  </footer>
</template>

<script lang="ts" setup>
import { NavList } from '@/features/NavList'
import { ContactsBlock } from '@/features/Contacts'
import { AdditionalsBlock } from '@/features/Additionals'

const navData = [
  {
    title: 'NavList.meduza.title',
    list: [
      { text: 'NavList.meduza.about', href: '#' },
      { text: 'NavList.meduza.editor', href: '#' },
      { text: 'NavList.meduza.code', href: '#' },
      { text: 'NavList.meduza.blog', href: '#' },
      { text: 'NavList.meduza.care', href: '#' },
      { text: 'NavList.meduza.anonymous', href: '#' },
      { text: 'NavList.meduza.support', href: '#' },
    ],
  },
  {
    title: 'NavList.platforms.title',
    list: [
      { text: 'NavList.platforms.instagram', href: '#' },
      { text: 'NavList.platforms.twitter', href: '#' },
      { text: 'NavList.platforms.facebook', href: '#' },
      { text: 'NavList.platforms.vk', href: '#' },
      { text: 'NavList.platforms.youtube', href: '#' },
      { text: 'NavList.platforms.live', href: '#' },
      { text: 'NavList.platforms.evening', href: '#' },
    ],
  },
]
</script>

<style scoped>
.footer-block {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #fff;
  border-top: 1px solid #eee;
  padding: 0 0 24px 0;
}
.footer-block > * {
  flex: 1 1 220px;
  min-width: 200px;
  box-sizing: border-box;
  border: 1px solid #f00; /* Для визуализации блоков, уберите позже */
  margin: 8px;
  background: #fff;
}
</style>
