import React, { useEffect, useState } from 'react'
import styles from './Home.module.css';
import sectionstyles from '../sections/section.module.css';
import HomeImg from '../../assets/HomeImg.svg'
import Map from '../../assets/Map.svg'
import naturopathy from '../../assets/naturopathy.svg'
import bodychakras from '../../assets/3921140.jpg'
import { Button, Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { cities, results } from '../../constants';
import { useSpeechContext } from '@speechly/react-client';
import { nearbysearch } from '../../api/api';

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
    nearbysearch();
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
    <div className={sectionstyles.basic}>
      {/* <img src={HomeImg} className={styles.bgimg}/> */}
        <div className={styles.right}>
            <a className={styles.active} href='/'>Home</a>
            <a href='/hospitals'>Hospitals</a>
            <a>Language</a>
            <a href='/About'>About us</a>
            <Button className={styles.login}>Login</Button>
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
        <div>
        <Input placeholder="Enter city or hospital name" value={search}
          onChange={onHandleSearch} suffix={suffix} />
          {search && (
          <div className="search_result">
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
      <img src={Map}/> 
      <div className={styles.mapright}>
        <p className={styles.heading} style={{color: '#47654d',}}>Do you know</p>
        <p className={sectionstyles.text}>There are approximately 4000 Ayush hospitals across India distributed under different council and hospitals of the government of India.</p>
        <div className={styles.btn}>
          <a href={data.map} className={sectionstyles.fillbutton}>
            <span className={sectionstyles.fillbuttonhover}>		
              <a href='/hospitals' className={sectionstyles.fillbuttontext}>
                Search now
              </a>
            </span>
            </a>
            </div>

      </div>
    </div>

    <div className={styles.ayushmean}>
      <div className={styles.ayushmeanchild}>
        <p className={styles.shloktext}>"Swasthasya Swasthya Rakshanam<br></br>Aturasya Vikara Prashamanam Cha"</p>
        <p className={styles.shlokheading} style={{color: '#f4c23d',}}>स्वस्थस्य स्वास्थ्य रक्षणं <br></br>आतुरस्य विकार प्रशमनं च </p>
        <p className={styles.shloktext}>i.e. to help the healthy person to protect & maintain his swasthya ( wellness)<br></br> To help a diseased person to become healthy & to stay healthy forever.</p>
      </div>
    </div>
    <div className={styles.ayushfull}>
      <span className={styles.heading} style={{color: '#ff9348',}}>A</span><span className={sectionstyles.text}> Ayurveda</span>
      <span className={styles.heading} style={{color: '#86c81c',}}>Y</span><span className={sectionstyles.text}> Yoga and Naturopathy</span>
      <span className={styles.heading} style={{color: '#f2c448',}}>U</span><span className={sectionstyles.text}> Unani</span>
      <span className={styles.heading} style={{color: '#f66785',}}>S</span><span className={sectionstyles.text}> Siddha</span>
      <span className={styles.heading} style={{color: '#01aed8',}}>H</span><span className={sectionstyles.text}> Homeopathy</span>
    </div> 

   
    </>
  )
}
