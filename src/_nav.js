import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilPuzzle, cilSpeedometer } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Pages',
  },
  {
    component: CNavGroup,
    name: 'Home Page',
    to: '/homepage',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Promotion',
        to: '/homepage/promotions',
      },
    ],
  },
  {
    component: CNavItem,
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    name: 'Setting Page',
    to: '/settingpage',
  },
]

export default _nav
