import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  InfoBox,
  MarkerClusterer,
  Marker,
  TrafficLayer,
} from "@react-google-maps/api";
import { nearbysearch } from "./api/api";
import MapPoint from "../src/assets/MapPoint.svg";
import Navbar from "./component/Navbar/Navbar";
import { Button, Input, Space, Spin } from "antd";
import { AudioOutlined, CloseCircleOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./App.css";
import Card from "./component/Card/Card";
import { useVoice } from "../src/utils/useVoice";
import { Select } from "antd";
import { useLocation } from "react-router-dom";
import { cities, results } from "./constants";
import { sortArray } from "./utils/utils";
import { useSpeechContext } from "@speechly/react-client";
import { renderIntoDocument } from "react-dom/test-utils";
const { Option } = Select;

const containerStyle = {
  height: "400px",
  position: "relative",
  margin: "0px auto",
  borderRadius: "6px",
  width: "94%",
};




function Root(props) {
  const { speechState, segment, toggleRecording } = useSpeechContext()
  const location = useLocation();
  const options = { closeBoxURL: "", enableEventPropagation: true };
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  // const { text, isListening, listen, voiceSupported } = useVoice();
  const [citiesData, setCitiesData] = useState([]);
  const [data, setData] = useState(results);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState(null);
  const [micColor, setMicColor] = useState("red");
  const [currIndex, setCurrIndex] = useState();
  const [text, setText] = useState('');
  const [isListening, setIsListening] = useState(false);
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  },[]);

  const searchItem = (item) => {
    item=item.toLowerCase().trim();
    let tempCity = [];
    cities.map((city)=>{
      if(city.toLowerCase().indexOf(item)>0 || item.indexOf(city.toLowerCase())>0){
        tempCity.push(city);
      }
    })

    let tempData = [];
    results.map((ele)=>{
      if(ele.name.toLowerCase().indexOf(item)>0 || item.indexOf(ele.name.toLowerCase())>0 || ele.vicinity.toLowerCase().indexOf(item)>0){
        tempData.push(ele);
      }
    })

    setData(tempData);
    setCitiesData(tempCity)

  }
  useEffect(() => {
     if(segment){
      let res = "";
      segment.words.map((item)=>{
        searchItem(item.value);
        res=res+""+item.value+" ";
      })
      setSearch(res);
      if(segment.isFinal) {toggleRecording()
      setMicColor("red")};
     }
  },[segment]);

  useEffect(() => {
    const path = location.pathname.substring(
      location.pathname.lastIndexOf("/") + 1
    );
    setCitiesData([]);
    let tempData = [];
    results.map((item) => {
      if (item.vicinity.toLowerCase().indexOf(path.toLowerCase()) >= 0) {
        tempData.push(item);
      }
    });
    tempData.sort();
    setSearch("");
    if (path == "hospitals" || path=="") {
      setSelect("Near me");
      const newData = sortArray(data,center)
      console.log(newData);
      setData(newData);
    } else {
      setData(tempData);
      setSelect(path);
    }
  }, [location.pathname]);

  const handleSelectChange = (value) => {
    console.log(value);
    let tempData = data;
    if (value == "stars") {
      tempData.sort((a, b) => {
        return b.rating - a.rating;
      });
    }
    setData(tempData);
  };


  

  const suffix = (
    <AudioOutlined
    onClick={()=>{toggleRecording();setMicColor(micColor=="green"?"red":"green")}}
      style={{
        fontSize: 16,
        color: micColor,
      }}
    />
  );


  const onHandleSelect = (index, type) => {
    if (type == "city") {
      setCitiesData([]);
      let tempData = [];
      results.map((item) => {
        if (
          item.vicinity
            .toLowerCase()
            .indexOf(citiesData[index].toLowerCase()) >= 0
        ) {
          tempData.push(item);
        }
      });
      tempData.sort();
      setData(tempData);
      setSearch("");
      setSelect(citiesData[index]);
    } else {
      setCitiesData([]);
      setSearch("");
      let tempData = [];
      tempData.push(data[index]);
      setCenter({
        lat: tempData[0].geometry.location.lat,
        lng: tempData[0].geometry.location.lng,
      });
      setData(tempData);
      setSelect(data[index].name);
    }
  };

  const onHandleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    let tempCity = [];
    cities.map((item) => {
      if (item.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
        tempCity.push(item);
      }
    });
    tempCity.sort();
    setCitiesData(tempCity);

    let tempData = [];
    results.map((item) => {
      if (item.name.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
        tempData.push(item);
      }
    });
    tempData.sort();
    setData(tempData);
  };

  const onLoad = (streetViewService) => {
    streetViewService.getPanorama(
      {
        location: center,
        radius: 50,
      },
      (data, status) =>
        console.log("StreetViewService results", { data, status })
    );
  };

  function createKey(location) {
    return location.lat + location.lng;
  }

  const handleNearBy = () => {
    const newData = sortArray(data,center)
    setData(newData);
  }
  const onSearch = (value) => console.log(value);
  // AIzaSyCcin2QQdbU-Uqj5H1V_WSg6DhooXCKUuo

  return (
    <>
      <Navbar current="hospital" />
      <div
        style={{
          textAlign: "center",
          position: "relative",
          width: "96%",
          margin: "0 auto",
          padding: "24px 0",
        }}
      >
        <Input
          placeholder="Enter city or hospital name"
          value={search}
          onChange={onHandleSearch}
          suffix={suffix}
        />
        {search && (
          <div className="search_result">
            {citiesData.length == 0 && data.length == 0 && (
              <div className="no_result">No results found</div>
            )}
            {citiesData.length > 0 && <div className="search_head">Cities</div>}
            <div className="search_name">
              {citiesData.map((item, index) => (
                <a
                  href={`/hospitals/${citiesData[index]}`}
                  // onClick={() => onHandleSelect(index, "city")}
                  className="search_item"
                >
                  {item}
                </a>
              ))}
            </div>
            {data.length > 0 && (
              <div className="search_head">Hospital Name</div>
            )}
            <div className="search_name">
              {data.map((item, index) => (
                <a
                  className="search_item"
                  href={`/hospital/${data[index].place_id}`}
                  // onClick={() => onHandleSelect(index, "data")}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="chip">
        {/* <Select initialValue="default" style={{ width: 230,marginRight:"16px" }} onChange={handleSelectChange}>
	  <Option value="default">Default</Option>
      <Option value="stars">Most Stars</Option>
      <Option value="reviews">Most Reviews</Option>
	  <Option value="near">Near By</Option>
    </Select> */}
        {select && (
          <div className="chipin">
            {select}
            {/* <CloseCircleOutlined
            style={{ marginLeft: "24px", fontSize: "16px", cursor: "pointer" }}
          /> */}
          </div>
        )}
        {select!="Near me" && <Button onClick={handleNearBy} className='nearme'><a href="/hospitals">Search hospitals Near me</a></Button>}
      </div>


      <LoadScript
        googleMapsApiKey="AIzaSyBUgh5-VA_1Wpwbr0ThzoPKlNx2f857GwU"
        loadingElement={
          <Spin
            style={{ margin: "0 auto", width: "100%", padding: "8rem" }}
            tip="Google map is loading..."
          ></Spin>
        }
      >
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          <TrafficLayer />
          {currIndex && (
            <InfoBox
              options={options}
              position={results[currIndex].geometry.location}
              onCloseClick={() => setCurrIndex(null)}
            >
              <div
                style={{ backgroundColor: "white", opacity: 0.75, padding: 12 }}
              >
                <h2 style={{ color: "#6e6e6e" }}>{results[currIndex].name}</h2>
                <h3 style={{ color: "#9e9e9e" }}>
                  {results[currIndex].vicinity}
                </h3>
                <h3 style={{ color: "green" }}>
                  {results[currIndex].opening_hours.open_now
                    ? "opened"
                    : "closed"}
                </h3>
              </div>
            </InfoBox>
          )}
          <Marker
            //   icon={MapPoint}
            key={createKey(center)}
            position={center}
          />
          <MarkerClusterer options={options}>
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
          </MarkerClusterer>
        </GoogleMap>
      </LoadScript>
      <Card data={data} />
    </>
  );
}

export default React.memo(Root);

