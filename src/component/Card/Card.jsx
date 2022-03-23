import styles from './Card.module.css';
import React from 'react'
import { Row, Col, Divider,Card,Rate, Result } from 'antd';
import { GlobalOutlined, GoogleOutlined, PhoneOutlined } from '@ant-design/icons';
const { Meta } = Card;

export default function HospitalCard(props) {
    const {data} = props;
    if(!data || data.length==0) return (<Result
    status="404"
    title="No data available"
  />)
  return (
    <>
    <Row gutter={[16, 24]} style={{padding:"28px",margin:"0px"}}>
        {data.map((item)=> <Col xs={24} sm={12} md={12} lg={8} xl={6} xxl={6} className="gutter-row" span={6}>
          <a href={`/hospital/${item.place_id}`}>
      <Card
    hoverable
    // style={{ width: 260 }}
    cover={<img height={250} alt="example" src={data.image} />}
  > 
    <div className={styles.name}>{item.name}</div>
    <div className={styles.address}>{item.vicinity}</div>
    <Rate disabled defaultValue={item.rating} /> <span className={styles.rate}>({item.user_ratings_total})</span>

    <div className={styles.bottom}>
      {/* <div  className={styles.btn}><GoogleOutlined style={{color:"white"}}/></div>
      <div  className={styles.btn}><GlobalOutlined style={{color:"white"}}/></div> */}
    </div>
  </Card>
  </a>
      </Col>)}
    </Row>
    </>
  )
}
