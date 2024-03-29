import { ArrowLeftOutlined } from "@ant-design/icons";
import {
  GoogleMap,
  LoadScript,
  Marker,
  TrafficLayer,
} from "@react-google-maps/api";
import { Button, Col, Divider, Rate, Row, Spin, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import styles from "./HospitalPage.module.css";
import sectionstyles from '../sections/section.module.css';
import { results } from "../../constants";
import { useLocation } from "react-router-dom";
import ReviewCard from "../ReviewCard/ReviewCard";
const { TabPane } = Tabs;
const containerStyle = {
  height: "92vh",
  position: "relative",
  margin: "0px auto",
  borderRadius: "6px",
};
export default function HospitalPage() {
  const [data, setData] = useState();
  const location = useLocation();
  useEffect(() => {
    const placeId = location.pathname.substring(
      location.pathname.lastIndexOf("/") + 1
    );
    results.map((item) => {
      if (item.place_id == placeId) {
        setData(item);
      }
    });
  }, []);
  if (!data) {
    return <Spin />;
  }
  return (
    <>
      <Row gutter={[16, 24]} style={{ padding: "28px", margin: "0px" }}>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={14}
          xl={14}
          xxl={14}
          className="gutter-row"
          span={6}
        >

          {/* <Divider style={{margin:"12px 0"}}/>  */}
          <div className={styles.upper}>
            <div className={styles.left}>
              <img
                  className={styles.img}
                  alt="example"
                  src={data.image}
                />
              </div>
              <div className={styles.right}>
              <div className={styles.name}>
                {data.name}
              </div>
              <div className={styles.add}>
                {data.vicinity}
                {/* <br />
                {data.opens} */}
              </div>
                
              <div className={styles.about} style={{color:'#3ba998'}}>
                  Contact -{" "}
                  <a className={styles.answer}>{data.contact}</a>{" "}
                </div>
                <div className={styles.about} style={{color:'#3ba998'}}>
                  Opens - <span className={styles.answer}>{data.opens}</span>
              </div>

              <div className={styles.btn}>
                <a href={data.map} className={sectionstyles.fillbutton}>
                <span className={sectionstyles.fillbuttonhover}>		
    <span className={sectionstyles.fillbuttontext}>Get Direction </span>
  </span>
                </a>
                <a href={data.website} className={sectionstyles.fillbutton}>
                <span className={sectionstyles.fillbuttonhover}>		
    <span className={sectionstyles.fillbuttontext}>Website </span>
  </span>                
  </a>
              </div>

            </div>
          </div>

          
          <div className={styles.bottom}>
            <Tabs defaultActiveKey="1">
              <TabPane tab="About" key="1">
                <div className={styles.about}>
                  {data.about ? data.about : ""}
                </div>
                <div className={styles.stars}>
                <Rate allowHalf disabled defaultValue={data.rating} />
              </div>
                <br />
                {/* <div className={styles.about}>
                  Address -{" "}
                  <span className={styles.answer}>{data.vicinity}</span>{" "}
                </div> */}
              </TabPane>
              <TabPane tab="Services" key="2">
                <ol>{data.services ? data.services.split(',').map((item)=><li className={styles.services}>{item}</li>) : ""}</ol>
              </TabPane>
              <TabPane tab="Reviews" key="3">
                {data.reviews ? data.reviews.map((item,index)=><ReviewCard index={index} data={item}/>) : ""}
              </TabPane>
            </Tabs>
          </div>
          <div className={styles.head}>
            <a href="/hospitals">
              {" "}
              <ArrowLeftOutlined
                style={{ color: "white", fontSize: "15px", cursor: "pointer" }}
              />
            </a>{" "}
            <div className={styles.title}>E-Veda</div>
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={10}
          xl={10}
          xxl={10}
          className="gutter-row"
          span={6}
        >
          <LoadScript
            googleMapsApiKey="AIzaSyBUgh5-VA_1Wpwbr0ThzoPKlNx2f857GwU"
            loadingElement={
              <Spin
                style={{ margin: "0 auto", width: "100%", padding: "8rem" }}
                tip="Google map is loading..."
              ></Spin>
            }
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={data.geometry.location}
              zoom={12}
            >
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
  );
}
