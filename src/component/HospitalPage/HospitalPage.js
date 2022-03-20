import { ArrowLeftOutlined } from '@ant-design/icons';
import { GoogleMap, LoadScript, Marker, TrafficLayer } from '@react-google-maps/api';
import { Button, Col, Divider, Rate, Row, Spin, Tabs } from 'antd'
import React, { useEffect, useState } from 'react'
import styles from './HospitalPage.module.css'
import { results } from '../../constants';
import { useLocation } from 'react-router-dom';
const { TabPane } = Tabs;
const containerStyle = {
    height: "92vh",
    position: "relative",
    margin: "0px auto",
    borderRadius: "6px",
  };
export default function HospitalPage() {
    const [data, setData] = useState()
    const location = useLocation();
    useEffect(() => {
      const placeId = location.pathname.substring(
        location.pathname.lastIndexOf("/") + 1
      );
      results.map((item)=>{
          if(item.place_id==placeId){
              setData(item);
          }
      })
      
    }, [])
    if(!data){
        return <Spin/>
    }
  return (
    <>
    
      <Row gutter={[16, 24]} style={{padding:"28px",margin:"0px"}}>
         <Col xs={24} sm={24} md={24} lg={14} xl={14} xxl={14} className="gutter-row" span={6}>
             <div className={styles.head}>
                <a href="/hospitals"> <ArrowLeftOutlined style={{color:"white",fontSize:"20px",cursor:"pointer"}}/></a> <div className={styles.title}>E-Veda</div>
             </div>
             {/* <Divider style={{margin:"12px 0"}}/>  */}
             <div className={styles.upper}>
             <div className={styles.left}>
                 <img className={styles.img} height={250} alt="example" src={"data:image/jpeg;base64,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"} />
             </div>
             <div className={styles.right}>
             <div className={styles.name}>
                 {data.name}
             </div>
             <div className={styles.add}>
                {data.vicinity}
             </div>
             <div className={styles.stars}>
             <Rate disabled defaultValue={data.rating} />
             </div>
             <div className={styles.btn}>
             <Button className={styles.direction}>Direction</Button>
             <Button className={styles.web}>Website</Button>
             </div>
             </div>
            
             </div>
             <div className={styles.bottom}>
             <Tabs defaultActiveKey="1" >
    <TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
             </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={10} className="gutter-row" span={6}>
            <LoadScript
        googleMapsApiKey="AIzaSyBUgh5-VA_1Wpwbr0ThzoPKlNx2f857GwU"
        loadingElement={
          <Spin
            style={{ margin: "0 auto", width: "100%", padding: "8rem" }}
            tip="Google map is loading..."
          ></Spin>
        }
      >
            <GoogleMap mapContainerStyle={containerStyle} center={data.geometry.location} zoom={12}>
          <TrafficLayer />
         
          <Marker
            //   icon={MapPoint}
            // key={createKey(data.geometry.location)}
            position={data.geometry.location}
          />
          {/* <MarkerClusterer options={options}>
            {(clusterer) =>
              data.map((curr, index) => (
                <Marker
                  icon={MapPoint}
                  key={createKey(curr.geometry.location)}
                  position={curr.geometry.location}
                  clusterer={clusterer}
                />
              ))
            }
          </MarkerClusterer> */}
        </GoogleMap>
      </LoadScript>
            </Col>
            </Row>
    </>
  )
}
