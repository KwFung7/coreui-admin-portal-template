import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const HomePagePromotions = React.lazy(() => import('./views/homepage/promotions/Promotions'))
const SettingPage = React.lazy(() => import('./views/settingpage/index'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/homepage', name: 'Home Page', component: HomePagePromotions, exact: true },
  { path: '/homepage/promotions', name: 'Promotions', component: HomePagePromotions },
  { path: '/settingpage', name: 'Setting Page', component: SettingPage },
]

export default routes
