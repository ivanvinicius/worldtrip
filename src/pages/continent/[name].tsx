import { GetStaticPaths, GetStaticProps } from 'next'

import { NextHead } from '../../components/NextHead'

export function Continent() {
  return (
    <>
      <NextHead title="Europe" />

      <div>
        <h1>Continent</h1>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 24 // 1day
  }
}
