import React,{useEffect} from 'react'
import { Button, Select, Form, Input } from 'antd';
import FuncAddShop from './FuncAddShop';
import { useNavigate } from "react-router-dom";
import "./shop.css"
export default function EditShop() {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    useEffect(()=>{
        EditShop()
    },[])
const EditShop = () =>{
    const data = localStorage.getItem("addStore")
    const dataShop = JSON.parse(data) 
    form.setFieldsValue({
        id: dataShop.id,
        shop_name: dataShop.shop_name,
        shop_description: dataShop.shop_description,
        shop_category: dataShop.shop_category
      });
}

    const onFinish = (value) => {
        FuncAddShop(value)
        localStorage.setItem("addStore",JSON.stringify(value))
        alert("บันทึกร้านค้าเรียบร้อย")
        navigate("/")
       
    }
    return (
        <>
          <p className='text-add-shop'>สร้างร้านค้า</p>
        <div className='container'>
          
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                layout="vertical"
                form={form}
                //   onFinishFailed={onFinishFailed}
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
                    label="รายละเอียดร้านค้า"
                    name="shop_description"
                    rules={[{ required: true, message: 'กรุณากรอกรายละเอียดร้านค้า!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="หมวดหมู่ร้านค้า"
                    name="shop_category"
                    rules={[{ required: true, message: 'กรุณากรอกหมวดหมู่ร้านค้า!' }]}
                >
                    <Select
                        placeholder="เลือกหมวดหมู่ร้านค้า"
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
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button onClick={()=>navigate("/")}>
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
