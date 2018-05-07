import React from 'react'
import { FormattedMessage } from 'react-intl'
import Card from '../../components/card'
import TextInput from '../../components/text-input'
import TextArea from '../../components/textarea'
import Button from '../../components/button'
import IconButton from '../../components/icon-button'

function UserRegistration() {
	return (
		<div className="pa4">
			<h1 className="ma0 pa0">
				<FormattedMessage id="userRegistration" />
			</h1>
			<Card>
				<div className='pa3 bg-black-10'>
					<h3>Email/Password Style</h3>
					<IconButton icon="http://icons.iconarchive.com/icons/yootheme/social-bookmark/48/social-facebook-box-blue-icon.png" alt="Google">Continue with Google</IconButton>
					<TextInput name="email" type="text" placeholder="EMAIL" className='ma3' />
					<TextInput name="password" type="password" placeholder="PASSWORD" className='ma3' />
				</div>
				<div className='pa3'>
					<h3>First Name/Last Name Style</h3>
					<TextInput name="firstname" type="text" placeholder="FIRST NAME" className='b--moon-gray ma3' />
					<TextInput name="lastname" type="text" placeholder="LAST NAME" className='b--moon-gray ma3' /><br />
				</div>

				Why do you want to be on the volunteering team for YouVersion?<br />
				<TextArea />
				<Button to='/' buttontype='solid'>Submit</Button>
			</Card>
			<Card>
				Another card
			</Card>
		</div>
	)
}

export default UserRegistration
