import React, { useEffect, useState } from 'react'
import { Button, Select, Form, Input } from 'antd';
import { v4 as uuid_v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import "./product.css"
export default function AddProduct() {
    const navigate = useNavigate();
    const data = localStorage.getItem("product")
    const dataProduct = JSON.parse(data) ?? []


    const onFinish = (value) => {
        let data_product = []
        const data = {
            id: uuid_v4(),
            shop_name: value.shop_name,
            product_name: value.product_name,
            unit_price: value.unit_price,
            unit_of_measure: value.unit_of_measure,
            product_category: value.product_category,
            product_description: value.product_description
        }
        data_product.push(
            ...dataProduct,
            data
        )
        localStorage.setItem("product", JSON.stringify(data_product))
        alert("บันทึกสินค้าเรียบร้อย")
        navigate("/show-product")
    }

    return (
        <>
            <p className='text-add-product'>สร้างสินค้า</p>

            <div className='container'>

                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    layout="vertical"
                    autoComplete="off"
                >
                    <Form.Item
                        label="ชื่อร้านค้า"
                        name="shop_name"
                        rules={[{ required: true, message: 'กรุณากรอกชื่อร้านค้า!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="ชื่อสินค้า"
                        name="product_name"
                        rules={[{ required: true, message: 'กรุณากรอกชื่อสินค้า!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="ราคาสินค้า"
                        name="unit_price"
                        rules={[{ required: true, message: 'กรุณากรอกราคาสินค้า!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="หน่วยสินค้า"
                        name="unit_of_measure"
                        rules={[{ required: true, message: 'กรุณากรอกหน่วยสินค้า!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="หมวดหมู่สินค้า"
                        name="product_category"
                        rules={[{ required: true, message: 'กรุณากรอกหมวดหมู่สินค้า!' }]}
                    >
                        <Select
                            placeholder="เลือกหมวดหมู่สินค้า"
                            options={[
                                {
                                    value: 'ทั้งหมด',
                                    label: 'ทั้งหมด',
                                },
                                {
                                    value: 'ผัก',
                                    label: 'ผัก',
                                },
                                {
                                    value: 'ผลไม้',
                                    label: 'ผลไม้',
                                },
                                {
                                    value: 'นาฬิกา',
                                    label: 'นาฬิกา',
                                },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item
                        label="รายละเอียดสินค้า"
                        name="product_description"
                        rules={[{ required: true, message: 'กรุณากรอกรายละเอียดสินค้า!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button onClick={() => navigate("/")}>
                            ยกเลิก
                        </Button>
                        <Button type="primary" htmlType="submit">
                            บันทึก
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}
