import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Human Brand Architect</title>
          <meta
            property="og:title"
            content="test-page - Human Brand Architect"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_1henc8) => (
            <>
              <h1>{context_1henc8?.Name}</h1>
            </>
          )}
          initialData={props.context1henc8Prop}
          persistDataDuringLoading={true}
          key={props?.context1henc8Prop?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const context1henc8Prop = await testPageResource({
      ...context?.params,
    })
    return {
      props: {
        context1henc8Prop: context1henc8Prop?.data?.[0],
      },
    }
  } catch (errro) {
    return {
      notFound: true,
    }
  }
}
