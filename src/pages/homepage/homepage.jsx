import React from 'react'
import DirectoryMenu from '../../components/directory-menu/directory-menu.component'
import './homepage.styles.scss'
import {withRouter} from 'react-router-dom'

const homepage = (props) => (
    <div className='homepage'>
        <DirectoryMenu />
        <button onClick={ () => {props.history.push('/shop')}}>ABOUT</button>
    </div>
)

export default withRouter(homepage);