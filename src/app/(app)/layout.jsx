// import { getEvents } from '@/data'
import { ApplicationLayout } from './application-layout'

export const metadata = {
  title: {
    template: '%s - Catalyst',
    default: 'Catalyst',
  },
  description: '',
}

export default async function CatalystLayout({ children }) {
  // let events = await getEvents()

  return (
      <ApplicationLayout>{children}</ApplicationLayout>
  )
}
