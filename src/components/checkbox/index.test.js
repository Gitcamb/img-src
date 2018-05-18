import React from 'react'
import ReactDOM from 'react-dom'
import CheckBox from './index'

it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<CheckBox />, div)
})

it('checks the checkbox', () => {
	const div = document.createElement('div')
	ReactDOM.render(<CheckBox onChange={() => { return true }} checked={true} />, div)
})