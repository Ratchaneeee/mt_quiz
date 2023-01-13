import React,{useState} from 'react'
import { Button, Col ,Row,Drawer ,Empty} from 'antd';
import { useNavigate } from "react-router-dom";
import {MenuOutlined } from '@ant-design/icons';
import "./shop.css"
import MyShop from './MyShop';

export default function HomePage() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const data = localStorage.getItem("addStore")
    const dataShop = JSON.parse(data) 
    console.log(dataShop);

    const showDrawer = () => {
      setOpen(true);
    };
  
    const onClose = () => {
      setOpen(false);
    };
  return (
    <div className='container'>
      <Button className='mt-3'  icon={<MenuOutlined className='menu-icon'/>} type="primary" onClick={showDrawer}> </Button>
      <Drawer title={dataShop === null ? "ยังไม่มีชื่อร้านค้า" : dataShop.shop_name} placement="right" onClose={onClose} open={open}>
        {dataShop === null  ?  <p  onClick={()=>navigate("/add-shop")}>สร้างร้านค้า</p> :   <p  onClick={()=>navigate("/edit-shop")}>แก้ไขร้าน</p>}
        <p  onClick={()=>navigate("/add-product")}>สร้างสินค้า</p>
        <p  onClick={()=>navigate("/show-product")}>จัดการสินค้า</p>
      </Drawer>
      {dataShop === null ?
      <Row className='mt-5'>
        <Col span={24}>
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} 
         description={
            <div>
            <div>
              คุณยังไม่ได้สร้างร้านค้าของคุณ 
            </div>
            <Button className='mt-3' type='primary' onClick={()=>navigate("/add-shop")}>สร้างร้านค้า</Button>
            </div>
          }
        />
        </Col>
      </Row> :
      <Row className='mt-5 row-my-shop'>
        <Col span={24}>
        <MyShop/>
        </Col>
      </Row>
      }
      
    </div>
  )
}
