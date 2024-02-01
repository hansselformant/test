import React from 'react'
import Sidenav from '../components/Sidenav'
import EnhancedTable from '../components/EnhancedTable'

export default function Users() {
  return (
    <>
        <div style={{ display: 'flex'}}>
          <Sidenav />
          <EnhancedTable />
        </div>
    </>
  )
}
