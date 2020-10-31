import React, { Component } from 'react'
import MenuItem from '../menu-items/menu-item.component'
import './directory-menu.styles.scss'

class DirectoryMenu extends Component {
    state = {
        section : [
            {title: 'HATS', imageUrl: 'https://i.ibb.co/cvpntL1/hats.png', linkUrl:'hats'},
            {title: 'SNEAKERS', imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png', linkUrl:'sneakers'},
            {title: 'JACKETS', imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png', linkUrl:'jackets'},
            {title: "MENS' WEAR", imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',  height: '380px', linkUrl:'mens-wear'},
            {title: "WOMENS' WEAR", imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png', height: '380px', linkUrl:'womens-wear'}
        ]
    }

    render(){

        const mapSection = this.state.section.map(({...otherSectionProps}, i) => {
            return( <MenuItem key={i} {...otherSectionProps} /> )
        })

        return(
            <div className='directory-menu'>
                {mapSection}
            </div>
        )
    }
}

export default DirectoryMenu