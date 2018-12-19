import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Helmet from 'react-helmet'
import YVAuthProtectedRoute from '@youversion/tupos-auth/dist/YVAuthProtectedRoute'
import PartnerProtectedRoute from './context/PartnerProtectedRoute'
import SidebarNavMenu from './components/sidebar-nav-menu'
import AdminReview from './containers/admin/review'
import SplashPage from './containers/splash-page'
import UserRegistration from './containers/user-registration'
import UserVerseAssignment from './containers/user-verse-assignment'
import UserProfile from './containers/user-profile'
import SidebarNav from './layouts/sidebar-nav'
import ToastHandler from './components/toast-handler'

function App() {
	return (
		<Router>
			<div className="h-100">

				<Helmet
					title="Image Source: A YouVersion Design Community"
					description="A web application for YouVersion design community to submit verse image art for use in the Bible App."
				/>

				<ToastHandler />

				<Route exact path="/" component={SplashPage} />
				  <YVAuthProtectedRoute redirectTo="/" path="/user-registration" component={UserRegistration} />
				<Route
					path="/user-verse-assignment" render={() => {
						return (
							<SidebarNav menu={<SidebarNavMenu />}>
								<PartnerProtectedRoute redirectTo="/" path="/user-verse-assignment" component={UserVerseAssignment} />
							</SidebarNav>
						)
					}}
				/>
				<Route
					path="/user-profile/:userId?/:imageStatus?" render={() => {
						return (
							<SidebarNav menu={<SidebarNavMenu />}>
								<PartnerProtectedRoute redirectTo="/" path="/user-profile/:userId?/:imageStatus?" component={UserProfile} />
							</SidebarNav>
						)
					}}
				/>
				<Route
					path="/admin/review" exact component={() => {
						return (
							<SidebarNav menu={<SidebarNavMenu isAdmin={true} />}>
								<PartnerProtectedRoute redirectTo="/" path="/admin/review" component={AdminReview} />
							</SidebarNav>
						)
					}}
				/>
				<Route
					path="/admin/review/approved" exact component={() => {
						return (
							<SidebarNav menu={<SidebarNavMenu isAdmin={true} />}>
								<PartnerProtectedRoute redirectTo="/" path="/admin/review/approved" component={() => <AdminReview show="approved" /> } />
							</SidebarNav>
						)
					}}
				/>
				<Route
					path="/admin/review/declined" exact component={() => {
						return (
							<SidebarNav menu={<SidebarNavMenu isAdmin={true} />}>
								<PartnerProtectedRoute redirectTo="/" path="/admin/review/declined" show="declined" component={() => <AdminReview show="declined" /> } />
							</SidebarNav>
						)
					}}
				/>
			</div>
		</Router>
	)
}

export default App
