import React from 'react'
import { useSelector } from 'react-redux'
import Day from './Day'

export default function Calendar() {
	const calendar = useSelector(state => state.calendar.value)
	return (
		<div className="grid-container">
			{calendar.map(item => <Day key={item.day} {...item} />)}
		</div>
	)
}
