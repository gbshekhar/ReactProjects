import React from 'react'
import MainNavigation from '../components/MainNavigation'

export default function Error() {
  return (
   <>
     <MainNavigation/>
     <main>
       <h2>An Error Occured</h2>
       <p>Could not find this page</p>
     </main>
   </>
  )
}
