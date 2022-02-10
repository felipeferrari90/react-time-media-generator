import '../styles/ButtonAddForm.css'
import React from 'react'
import ReactDom from 'react-dom'
import Inputs from './Inputs'

export default (props) => {
    return (
        <div className="button-add" onClick={props.onclick}>&#10010;</div>
    )
}