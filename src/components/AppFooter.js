import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://www.cafedecoralfastfood.com/" target="_blank" rel="noopener noreferrer">
          Cafe De Coral
        </a>
        <span className="ms-1">&copy; 2022</span>
      </div>
      <div className="ms-auto">
        {/*<span className="me-1">Powered by</span>*/}
        {/*<a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">*/}
        {/*  CoreUI for React*/}
        {/*</a>*/}
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
