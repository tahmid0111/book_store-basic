import React from 'react'
import MongoDB from '../components/programmerbooks/mongodb/MongoDB'
import Javascript from '../components/programmerbooks/javascript/Javascript'
import Layout from '../layout/Layout'

const ProgrammerBooks = () => {
  return (
    <Layout>
      <MongoDB />
      <Javascript />
    </Layout>
  )
}

export default ProgrammerBooks
