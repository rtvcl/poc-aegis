import { headers } from 'next/headers'

const siteLayoutConfig = {
  'site-a': [
    'header',
    'banner',
    'button'
  ],
  'site-b': [
    'banner',
    'button',
    'header'
  ]
}

const componentMapper = (component: string) => {
  switch (component) {
    case 'header':
      return <header className='text-black bg-blue-400'>this is header</header>
    case 'banner':
      return <section className='text-black bg-red-200'>this is banner</section>
    case 'button':
      return <button className='bg-green-700'>this is button</button>
    default:
      return ''
  }
}

export default function Home() {

  const headerInstance = headers()
  const [subdomain, domain] = (headerInstance.get('host') || '').split('.')

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <section className='flex flex-col w-full gap-4 text-center'>
        {/* @ts-ignore */}
        {siteLayoutConfig[subdomain].map((item) => {
          return componentMapper(item)
        })}
      </section>
    </main>
  )
}
