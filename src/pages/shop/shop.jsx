import React, { Component } from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview'
import './shop.styles.scss'
import SHOP_DATA from './shopData'


class Shop extends Component{
    state = {
        SHOP_DATA
    }

    render(){

        const mapShopData = this.state.SHOP_DATA.map((shopData, i) => {
            return <CollectionPreview title={shopData.title} items={shopData.items} key={i} />
        })

        return(
            <div className='shop'>
                {mapShopData}
            </div>
        )
    }
}

export default Shop