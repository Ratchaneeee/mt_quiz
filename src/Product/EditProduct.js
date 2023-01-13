import React,{useEffect, useState} from 'react'
import { Button, Select, Form, Input } from 'antd';
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
export default function Edited() {
    const navigate = useNavigate();
    const data = localStorage.getItem("product")
    const dataProduct = JSON.parse(data) ?? []
    const [form] = Form.useForm();
    const [id, setId] = useState()
    const params = useParams();
    
    console.log(params);
    // const [edit, setEdit] = useState(dataProduct === null ? [] : dataProduct)
useEffect(()=>{
    EditProduct()
},[params.id])

    const EditProduct = () =>{
        setId(params.id)
        const data = dataProduct
        for(let i = 0; i<data.length; i++){ 
            if(params.id===data[i].id){
                form.setFieldsValue({
                    id: params.id,
                    shop_name: data[i].shop_name,
                    product_name: data[i].product_name,
                    unit_price: data[i].unit_price,
                    unit_of_measure: data[i].unit_of_measure,
                    product_category: data[i].product_category,
                    product_description: data[i].product_description
                  });
            }
        }
       
    }
    const onFinish = (value, index) => {
        console.log(value);
        let data_item = []
        // if()
        const data_true = {
            id: params.id,
            shop_name: value.shop_name,
            product_name: value.product_name,
            unit_price: value.unit_price,
            unit_of_measure: value.unit_of_measure,
            product_category: value.product_category,
            product_description: value.product_description
        }
        data_item.push(data_true )

        // const item_product = [dataProduct]
        // for(let i = 0; i<item_product.length; i++){
        //     if(params.id===item_product[i].id){
        //         let replacedItem = item_product[i].splice(item_product.indexOf(item_product[i]), 1, data_true)
        //         console.log(replacedItem);
               
        //     }
        // }

        localStorage.setItem("product", JSON.stringify(data_item))
        alert("บันทึกสินค้าเรียบร้อย")
        navigate("/show-product")
      

    }
  return (
    <div>
         <p className='text-add-product'> แก้ไขสินค้า</p>
          <div className='container'>
          <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                layout="vertical"
                form={form}
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
                    <Button onClick={()=>navigate("/show-product")}>
                        ยกเลิก
                    </Button>
                    <Button type="primary" htmlType="submit">
                        บันทึก
                    </Button>
                </Form.Item>
            </Form>
           
           
        </div>
    </div>
  )
}
