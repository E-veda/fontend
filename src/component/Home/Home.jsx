import React, { useEffect, useState } from 'react'
import styles from './Home.module.css';
import HomeImg from '../../assets/HomeImg.svg'
import Map from '../../assets/Map.svg'
import naturopathy from '../../assets/naturopathy.svg'
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { cities, results } from '../../constants';
import { useSpeechContext } from '@speechly/react-client';

export default function Home() {
  const { speechState, segment, toggleRecording } = useSpeechContext()
    const [citiesData, setCitiesData] = useState([]);
    const [data, setData] = useState(results);
    const [micColor, setMicColor] = useState("red");
    const [search, setSearch] = useState('');
    const [select, setSelect] = useState("Near me");
    const [currIndex, setCurrIndex] = useState();

    
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
          tempData.push(data[index])
        //   setCenter({lat:tempData[0].geometry.location.lat,lng:tempData[0].geometry.location.lng})
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

      
  const suffix = (
    <AudioOutlined
    onClick={()=>{toggleRecording();setMicColor(micColor=="green"?"red":"green")}}
      style={{
        fontSize: 16,
        color: micColor,
      }}
    />
  );

  return (
      <>
    <div className={styles.pdiv}>
      {/* <img src={HomeImg} className={styles.bgimg}/> */}
        <div className={styles.right}>
            <a className={styles.active} href='/'>Home</a>
            <a href='/hospitals'>Hospitals</a>
            <a>Language</a>
            <a href='/About'>About us</a>
          </div>
      {/* <div className="homepage"> */}
        <div className={styles.left}><img src={naturopathy} alt="logo" /></div>

        <div className={styles.inputsection}>
        <div className={styles.marker_animation}>
          <div className={styles.pin}></div>
          <div className={styles.pulse}></div>
        </div>
        <div className={styles.heading}>
          Yield benefits, not side effects
        </div>
        <div className={styles.subheading}>
          Consult at nearest hospital!
        </div>
        <div style={{position:"relative"}}>
        <Input placeholder="Enter city or hospital name" value={search}
          onChange={onHandleSearch} suffix={suffix} />
          {search && (
          <div className="search_result" style={{marginTop:"1px"}}>
            {citiesData.length==0 && data.length==0 && <div className='no_result'>No results found</div>}
            {citiesData.length > 0 && <div className="search_head">Cities</div>}
            <div className="search_name">
              {citiesData.map((item, index) => (
                <a
                  href={`/hospitals/${citiesData[index]}`}
                  onClick={() => onHandleSelect(index, "city")}
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
                  href={`/hospital/${data[index].place_id}`}
                  className="search_item"
                  onClick={() => onHandleSelect(index, "data")}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
        </div>        
        </div>
      {/* </div> */}
    </div>

    <div className={styles.map}>
        <div className={styles.title}>Get start search</div>
        <div className={styles.sub}>connect with E-Veda</div>
    <img style={{width:"350px",marginTop:"10px"}} src={Map}/> 
    </div>
   
    </>
  )
}
