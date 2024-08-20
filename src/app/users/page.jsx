import Link from 'next/link'
import React from 'react'

const HomeDisplay = () => {
  return (
    <div>
        <h1 style={{fontSize: '30px', margin: '20px'}}>Latihan Next JS</h1>
        <li style={{fontWeight: 'bold'}}><Link href="/users/real-time-state">Testing Real Time State</Link></li>
        <li style={{fontWeight: 'bold'}}><Link href="/users/list-data">Testing Detail Data With Axios</Link></li>
    </div>
  )
}

export default HomeDisplay