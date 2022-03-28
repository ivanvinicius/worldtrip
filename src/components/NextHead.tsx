import Head from 'next/head'

interface NextHeadProps {
  title: string
}

export function NextHead({ title }: NextHeadProps) {
  return (
    <Head>
      <title>worldtrip | {title}</title>
    </Head>
  )
}
