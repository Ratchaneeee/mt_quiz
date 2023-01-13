import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Empty, Row, Col,Image } from 'antd';

export default function ShowProduct() {
    const data = localStorage.getItem("product")
    const dataProduct = JSON.parse(data) ?? []
    console.log(dataProduct);
    const navigate = useNavigate();
    const deleteProduct = (id) => {
        const array = dataProduct
        const index = array.indexOf(array[id]);
        console.log(index);
        if (index >= -1) {
            array.splice(index, 1);
        }
        localStorage.setItem("product", JSON.stringify(array))
        alert("ลบสินค้าเรียบร้อย")
        navigate("/show-product")
    }
    return (
        <div className='container'>
            <Button className='mt-3' type='primary' onClick={() =>
                navigate(`/add-product`)
            }>เพิ่มสินค้า</Button>
            <p className='pt-3'>รายการสินค้า</p>
            {dataProduct.length !== 0 ?
                dataProduct.map((data, index) => {
                    return (
                        <>
                            <div>
                                <Row >
                                <Col span={24} >
                                    <div>
                                        <Image className='image-product' src="https://wannasin.s3.ap-southeast-1.amazonaws.com/news/attach/OFCqLWAUDFwPHAFM.jpg"/>
                                    </div>
                                        <div>ชื่อร้านค้า : {data.shop_name}</div>
                                        <div>ชื่อสินค้า :  {data.product_name}</div>
                                        <div>ราคาสินค้า :  {data.unit_price}</div>
                                        <div>หน่วยสินค้า : {data.unit_of_measure}</div>
                                        <div>หมวดหมู่สินค้า :  {data.product_category}</div>
                                        <div>รายละเอียดสินค้า :  {data.product_description}</div>
                                    </Col>
                                    <Col span={24} className="mt-2">
                                        <Row gutter={[14,14]}>
                                        <Col span={10} >
                                        <Button block type='primary' onClick={() =>
                                            navigate(`/edit-product/${data.id}`)
                                        }>แก้ไข</Button>
                                    </Col>
                                    <Col span={10}>
                                        <Button block onClick={() => deleteProduct(data.id)}>ลบสินค้า</Button>
                                    </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                            <br />
                        </>

                    )
                })
                : <Row className='mt-5'>
                    <Col span={24}>
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}
                            description={

                                <div>
                                    ไม่มีสินค้าในร้านค้าของคุณ
                                </div>

                            }
                        />
                    </Col>
                </Row>}
        </div>
    )
}
