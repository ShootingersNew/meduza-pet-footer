import { useI18n } from 'vue-i18n'
import { en, ru } from '../i18n'

export const useNavData = () => {
  const { t } = useI18n({
    inheritLocale: true,
    messages: {
      en,
      ru,
    },
  })

  const data = [
    {
      header: t('main.header'),
      items: [
        {
          link: '/',
          title: t('main.items.main'),
        },
        {
          link: '/about',
          title: t('main.items.about'),
        },
        {
          link: '/contacts',
          title: t('main.items.contacts'),
        },
        {
          link: '/services',
          title: t('main.items.services'),
        },
        {
          link: '/price',
          title: t('main.items.price'),
        }
      ]
    },
    {
      header: t('platforms.header'),
      items: [
        {
          title: t('platforms.items.instagram'),
          link: 'https://www.instagram.com/',
        },
        {
          title: t('platforms.items.twitter'),
          link: 'https://twitter.com/',
        },
        {
          title: t('platforms.items.facebook'),
          link: 'https://facebook.com/',
        },
        {
          title: t('platforms.items.youtube'),
          link: 'https://youtube.com/',
        },
        {
          title: t('platforms.items.live'),
          link: '/live',
        },
        {
          title: t('platforms.items.vk'),
          link: 'https://vk.com/',
        },
        {
          title: t('platforms.items.eveningMeduza'),
          link: '/evening',
        }
      ]
    }
  ]

  return data
}

