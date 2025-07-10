import { type TLink } from "@/shared/config/models/types"
import { ADD_LINKS, CONTACT_LINKS } from '../constants/links'
  const contacts: TLink[] = [
    {
      link: CONTACT_LINKS.podcasts,
      title: 'contacts.items.podcasts',
    },
    {
      link: CONTACT_LINKS.service,
      title: 'contacts.items.service',
    },
    {
      link: CONTACT_LINKS.payments,
      title: 'contacts.items.payments',
    },
    {
      link: CONTACT_LINKS.other,
      title: 'contacts.items.other',
    },
  ]

  const adds: TLink[] = [
    {
      link: ADD_LINKS.advertising,
      title: 'adds.items.advertising',
    },
    {
      link: ADD_LINKS.requirements,
      title: 'adds.items.requirements',
    },
    {
      link: ADD_LINKS.safety,
      title: 'adds.items.safety',
    }
  ]

  export { contacts, adds }


