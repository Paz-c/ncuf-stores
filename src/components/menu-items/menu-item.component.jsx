import React from 'react'
import './menu-item.styles.scss'
import {withRouter} from 'react-router-dom'

const menuItem = ({title, imageUrl, height, linkUrl, history}) => (
    <div style={{ height: height}} className='menu-item' onClick={() => history.push(linkUrl)}>
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})`}} />
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(menuItem)