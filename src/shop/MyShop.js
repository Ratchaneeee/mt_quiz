import { Row,Col,Image,Avatar } from 'antd'
import React from 'react'

export default function MyShop() {
    const data = localStorage.getItem("addStore")
    const dataShop = JSON.parse(data) 
    return (
        <div>
            <Row>
                <Col span={4}>
                <Avatar className='avatar-shop' src={<Image src="https://e7.pngegg.com/pngimages/265/778/png-clipart-online-store-the-internet-shopping-thumbnail.png"/>} />
                    
                </Col>
                <Col span={20}>
                    <Row>
                        <Col span={24}>
                            <h5>ชื่อร้านค้า : {dataShop.shop_name}</h5>
                        </Col>
                        <Col span={24}>
                            <h6>รายละเอียดร้านค้า : {dataShop.shop_description}</h6>
                        </Col>
                        <Col span={24}>
                        <h6>หมวดหมู่ร้านค้า : {dataShop.shop_category}</h6>
                        </Col>
                    </Row>
                </Col>

            </Row>
        </div>
    )
}
