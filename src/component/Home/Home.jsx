import React, { useState } from 'react'
import styles from './Home.module.css';
import HomeImg from '../../assets/HomeImg.svg'
import Map from '../../assets/Map.svg'
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { cities, results } from '../../constants';
const suffix = (
	<AudioOutlined
	  style={{
		fontSize: 16,
		color: '#1890ff',
	  }}
	/>
  );
export default function Home() {
    const [citiesData, setCitiesData] = useState([]);
    const [data, setData] = useState(results);
    const [search, setSearch] = useState('');
    const [select, setSelect] = useState("Near me");
    const [currIndex, setCurrIndex] = useState();
  
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
  return (
      <>
    <div style={{position:"relative"}}><img style={{width:"100%"}} src={HomeImg}/>
        <div className={styles.left}>E-veda</div>
        <div className={styles.right}>
            <a className={styles.active} href='/'>Home</a>
            <a href='/hospitals'>Hospitals</a>
            <a>Language</a>
            <a href='/aboutus'>About us</a>
        </div>
        <div className={styles.inputsection}>
        <div className={styles.heading}>Search Ayush hospitals</div>
        <div className={styles.subheading}>sknslnlsn lmlnglsfng nfsglnlngsfn lnflgn lsfnglnfglsfgslf
        sgslfgnlsfnglfsng
        sgsfglsfglsfglsfnglsnfglsflgm lmlmsflgmslgmlsngsfglsmfg
        sfglksflglsfmglfsmglmsflgmfdlmgldfm lnrkjn nerannwenknkfnkrnglangknrkgnrs
        al;fnrkngsngna nssnsnglslgnsgnsnglsfnglsfngnsgnskfsfjsngrjtrjioafnani4jrnjganlfnnlnl</div>
        <div
        style={{
          textAlign: "center",
          position: "relative",
          margin: "0 auto",
        }}
      >
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
        </div>
    <div className={styles.map}>
        <div className={styles.title}>Get start search</div>
        <div className={styles.sub}>connect with E-Veda</div>
    <img style={{width:"350px",marginTop:"10px"}} src={Map}/> 
    </div>
   
    </>
  )
}
