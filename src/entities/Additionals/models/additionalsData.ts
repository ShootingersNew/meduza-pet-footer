import { type TLink } from "@/shared/config/models/types"
import { useI18n } from 'vue-i18n'
import { ADD_LINKS, CONTACT_LINKS } from '../constants/links'
import { en, ru } from '../i18n'
export const useAdditionalsData = () => {
  const { t } = useI18n({
    useScope: 'global',
    inheritLocale: true,
    messages:{
      en,
      ru,
    }
  })

  const contacts: TLink[] = [
    {
      link: CONTACT_LINKS.podcasts,
      title: t('additionals.contacts.items.podcasts'),
    },
    {
      link: CONTACT_LINKS.service,
      title: t('additionals.contacts.items.service'),
    },
    {
      link: CONTACT_LINKS.payments,
      title: t('additionals.contacts.items.payments'),
    },
    {
      link: CONTACT_LINKS.other,
      title: t('additionals.contacts.items.other'),
    },
  ]

  const adds: TLink[] = [
    {
      link: ADD_LINKS.advertising,
      title: t('additionals.adds.items.advertising'),
    },
    {
      link: ADD_LINKS.requirements,
      title: t('additionals.adds.items.requirements'),
    },
    {
      link: ADD_LINKS.safety,
      title: t('additionals.adds.items.safety'),
    }
  ]

  return { contacts, adds }
}

