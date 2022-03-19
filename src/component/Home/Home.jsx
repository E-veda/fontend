import React, { useState } from 'react'
import styles from './Home.module.css';
import HomeImg from '../../assets/HomeImg.svg'
import Map from '../../assets/Map.svg'
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
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
            <a href='/hospital'>Hospitals</a>
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
                  href={`/hospital/${citiesData[index]}`}
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
const cities = [
    "Indore",
    "Bhopal",
    "Mumbai",
    "Banglore",
    "Delhi",
    "Pune",
    "Gwalior",
  ];
  const results = [
    {
      business_status: "OPERATIONAL",
      geometry: {
        location: {
          lat: 22.754501,
          lng: 75.9035451,
        },
        viewport: {
          northeast: {
            lat: 22.75558897989272,
            lng: 75.90503957989273,
          },
          southwest: {
            lat: 22.75288932010728,
            lng: 75.90233992010728,
          },
        },
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/hospital-71.png",
      icon_background_color: "#F88181",
      icon_mask_base_uri:
        "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hospital-H_pinlet",
      name: "Bombay Hospital",
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 4608,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/111979323970530010017">111979323970530010017</a>',
          ],
          photo_reference:
            "Aap_uEB8shxgRVoMRT33Re26pI97JzyyosFZV8RdKkNffS8wfffWCAPL8fZ86_jGohtLMZ1f5-suLtpJ95G0Ru2oncsl1uewRWdho3fwgmOIQl9wlhOttxragacZh1SrSMjbmJ-Wg0E2U2Iv9epeeJ9A4Qc_4dG7LPzMIbK8qNTTcFgvG1Y7",
          width: 3456,
        },
      ],
      place_id: "ChIJ0yE_UFQdYzkRhDWxeZZiFME",
      plus_code: {
        compound_code: "QW33+RC Indore, Madhya Pradesh",
        global_code: "7JJQQW33+RC",
      },
      rating: 3.1,
      reference: "ChIJ0yE_UFQdYzkRhDWxeZZiFME",
      scope: "GOOGLE",
      types: ["hospital", "health", "point_of_interest", "establishment"],
      user_ratings_total: 828,
      vicinity:
        "No.94, IDA Scheme, 95, Eastern Ring Rd, Tulsi Nagar, Vijay Nagar, Indore",
    },
    {
      business_status: "OPERATIONAL",
      geometry: {
        location: {
          lat: 22.7134701,
          lng: 75.8803582,
        },
        viewport: {
          northeast: {
            lat: 22.71460937989272,
            lng: 75.88162472989272,
          },
          southwest: {
            lat: 22.71190972010728,
            lng: 75.87892507010727,
          },
        },
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/hospital-71.png",
      icon_background_color: "#F88181",
      icon_mask_base_uri:
        "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hospital-H_pinlet",
      name: "Maharaja Yeshwantrao Hospital",
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 3000,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/107601551268221601535">Diwaqar Sah</a>',
          ],
          photo_reference:
            "Aap_uEDI9CowkcogPrnMACd5ffjCgXYA_uaAYsq9rzIAGMM7D_aJJcmaMQ4Q11kqsdQR3bjFJDKt0HbwfksW593g8-bCUGLPPTJh6lQBUir1cPhAaJyw__6SBv-MbOIY8iDr9eRess-1t26YEfplndGuPyfjuqz-yyNGUGaHkuISgAFv3yi1",
          width: 4000,
        },
      ],
      place_id: "ChIJEZRiXG39YjkROWMWP9E7IgQ",
      plus_code: {
        compound_code: "PV7J+94 Indore, Madhya Pradesh",
        global_code: "7JJQPV7J+94",
      },
      rating: 3.3,
      reference: "ChIJEZRiXG39YjkROWMWP9E7IgQ",
      scope: "GOOGLE",
      types: ["hospital", "health", "point_of_interest", "establishment"],
      user_ratings_total: 360,
      vicinity: "MY Hospital Rd, CRP Line, Indore",
    },
    {
      business_status: "OPERATIONAL",
      geometry: {
        location: {
          lat: 22.7023993,
          lng: 75.8619983,
        },
        viewport: {
          northeast: {
            lat: 22.70377942989272,
            lng: 75.86341272989272,
          },
          southwest: {
            lat: 22.70107977010728,
            lng: 75.86071307010727,
          },
        },
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/hospital-71.png",
      icon_background_color: "#F88181",
      icon_mask_base_uri:
        "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hospital-H_pinlet",
      name: "Vedant Hospital",
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 3120,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/104887276737308404682">Pratik Bhardwaj</a>',
          ],
          photo_reference:
            "Aap_uEDTdWAk_-OJRnBaGVkMjKFBHGxSWx6ABXjdBjc3oD8O5F7XoJLdj9TzzK-VikLqgNlVQcObT1-53Rf-RCzXzgPDg1P8my5mwKE9b6aepOBqX87AGil3niBpIpoCg4vX2-eM908tLGOHxxe0HoQr8kyAIc2uN3-ivBRB6vbPH3WTsB1c",
          width: 4160,
        },
      ],
      place_id: "ChIJ9b0fjbACYzkRtjuicVRWU_U",
      plus_code: {
        compound_code: "PV26+XQ Indore, Madhya Pradesh",
        global_code: "7JJQPV26+XQ",
      },
      rating: 3.1,
      reference: "ChIJ9b0fjbACYzkRtjuicVRWU_U",
      scope: "GOOGLE",
      types: ["hospital", "health", "point_of_interest", "establishment"],
      user_ratings_total: 56,
      vicinity: "1, Bhawarkua Main Rd, Sindhu Nagar, Khatiwala Tank, Indore",
    },
    {
      business_status: "OPERATIONAL",
      geometry: {
        location: {
          lat: 22.6726029,
          lng: 75.9152175,
        },
        viewport: {
          northeast: {
            lat: 22.67391667989272,
            lng: 75.91670537989272,
          },
          southwest: {
            lat: 22.67121702010728,
            lng: 75.91400572010727,
          },
        },
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/hospital-71.png",
      icon_background_color: "#F88181",
      icon_mask_base_uri:
        "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hospital-H_pinlet",
      name: "St Francis Hospital and Research Center",
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 3184,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/106908519447163953645">A Google User</a>',
          ],
          photo_reference:
            "Aap_uEAs97ePBkJBVy2mbHMi8xjZnwD1VETa1E1m_RJV2aUx5BFNhXzDlYUtWqo_LiNSO1XZtQAwgfgYP9E3P6dt7TspjsgpxJ5mjNiZboriSdO-lNPkqNoM24aTJxdNSKuGV1pHsouv_Ff6TPevDQyxdA7JBARqtxsDmn2UXgtVFlUC-BDq",
          width: 5011,
        },
      ],
      place_id: "ChIJf41A8ETjYjkRe8qa0AM3yo0",
      plus_code: {
        compound_code: "MWF8+23 Indore, Madhya Pradesh",
        global_code: "7JJQMWF8+23",
      },
      rating: 3.7,
      reference: "ChIJf41A8ETjYjkRe8qa0AM3yo0",
      scope: "GOOGLE",
      types: ["hospital", "health", "point_of_interest", "establishment"],
      user_ratings_total: 62,
      vicinity: "Near, Municipal area on By-pass Road, Dev Guradia Rd, Indore",
    },
    {
      business_status: "OPERATIONAL",
      geometry: {
        location: {
          lat: 22.730631,
          lng: 75.88300699999999,
        },
        viewport: {
          northeast: {
            lat: 22.73200987989273,
            lng: 75.88431292989272,
          },
          southwest: {
            lat: 22.72931022010728,
            lng: 75.88161327010728,
          },
        },
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/hospital-71.png",
      icon_background_color: "#F88181",
      icon_mask_base_uri:
        "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hospital-H_pinlet",
      name: "Laxmi Memorial Hospital",
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 1920,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/102638027425326520451">Hitesh Narsinghani</a>',
          ],
          photo_reference:
            "Aap_uECctOyJ4VYBBChlslgTYHFPbhRxBvN5oWIxgxigKxxpB-phUuLWfc01mkqvMidH794oW42e6KPYfh7Gj1z1tt_aLZH49v82vf9RG3hpvJP13CMdeZHlkHW1uvLQaEZnA1Gt0MSoBfL6158lUfJzAZS2i41ScNH6-9Rm0rk3TDmxSb8i",
          width: 1080,
        },
      ],
      place_id: "ChIJEZRiXG39YjkRJbf0MQjnhzA",
      plus_code: {
        compound_code: "PVJM+76 Indore, Madhya Pradesh",
        global_code: "7JJQPVJM+76",
      },
      rating: 3.5,
      reference: "ChIJEZRiXG39YjkRJbf0MQjnhzA",
      scope: "GOOGLE",
      types: ["hospital", "health", "point_of_interest", "establishment"],
      user_ratings_total: 30,
      vicinity: "117, New Palasia, Indore",
    },
    {
      business_status: "OPERATIONAL",
      geometry: {
        location: {
          lat: 22.6951583,
          lng: 75.8271924,
        },
        viewport: {
          northeast: {
            lat: 22.69652647989271,
            lng: 75.8287408798927,
          },
          southwest: {
            lat: 22.69382682010727,
            lng: 75.82604122010727,
          },
        },
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/hospital-71.png",
      icon_background_color: "#F88181",
      icon_mask_base_uri:
        "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hospital-H_pinlet",
      name: "Mahaveer Hospital",
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 4608,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/100468875548479628376">Akhilesh Mehta</a>',
          ],
          photo_reference:
            "Aap_uEBWFabiveopa4xZQ_MS9CM0H4ycfovp3FBRSWQDuBr4MIzLKVYYcU-L8NwACqE8UAR62J5PAzWibdxuyquvEYU_xiyAeCwUz7ouBFexKTDyfVfmmJIi6PPGH3bsgPjUSX3KcGJ0aKEku-Eu-HRz7kG_MMP8YfJd2l1dkNq3hhhwa8WM",
          width: 3456,
        },
      ],
      place_id: "ChIJoc7rAjX8YjkRIz6LxXj8NYk",
      rating: 3,
      reference: "ChIJoc7rAjX8YjkRIz6LxXj8NYk",
      scope: "GOOGLE",
      types: ["hospital", "health", "point_of_interest", "establishment"],
      user_ratings_total: 38,
      vicinity: "MRWG+3V8, Dwarkapuri, Indore",
    },
    {
      business_status: "OPERATIONAL",
      geometry: {
        location: {
          lat: 22.7137987,
          lng: 75.8840006,
        },
        viewport: {
          northeast: {
            lat: 22.71517492989272,
            lng: 75.88516587989272,
          },
          southwest: {
            lat: 22.71247527010728,
            lng: 75.88246622010728,
          },
        },
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/hospital-71.png",
      icon_background_color: "#F88181",
      icon_mask_base_uri:
        "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hospital-H_pinlet",
      name: "Suyash Hospital",
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 6000,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/101606397128687626226">Rameshwar Chouhan</a>',
          ],
          photo_reference:
            "Aap_uEDaL76UiWDg66u4GhfdVWUnCqImCrTcnJM6NtTduv8NIKogzPOqDqu5sL8Nl4D7SH1T5XmOgZUYEuCSwaPCN5I_JJpiJtE3X641Pw8FE6slaCz9Er8iVf-mZjUb11GPGSO4WedYIVsAirCtsU12CIFdlzl-KMIwZN8-Ws3Z2nXDJaVT",
          width: 8000,
        },
      ],
      place_id: "ChIJM_9NyST9YjkROKhp7MUckgE",
      plus_code: {
        compound_code: "PV7M+GJ Indore, Madhya Pradesh",
        global_code: "7JJQPV7M+GJ",
      },
      rating: 3.7,
      reference: "ChIJM_9NyST9YjkROKhp7MUckgE",
      scope: "GOOGLE",
      types: ["hospital", "health", "point_of_interest", "establishment"],
      user_ratings_total: 262,
      vicinity:
        "5, 1, AB Rd, opposite MGM Medical College, South Tukoganj, Indore",
    },
    {
      business_status: "OPERATIONAL",
      geometry: {
        location: {
          lat: 22.6942243,
          lng: 75.8813301,
        },
        viewport: {
          northeast: {
            lat: 22.69549707989272,
            lng: 75.88253957989272,
          },
          southwest: {
            lat: 22.69279742010728,
            lng: 75.87983992010729,
          },
        },
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/hospital-71.png",
      icon_background_color: "#F88181",
      icon_mask_base_uri:
        "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hospital-H_pinlet",
      name: "Shukla Hospital",
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 425,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/104937401602668314701">A Google User</a>',
          ],
          photo_reference:
            "Aap_uEBofLeJIbg6vZQxcJyR83J6c14CXep4msrP-dGrLnAyns8oBxqPi7AhfCTz3MQ_rekRBmT5_dLSdaYqE_i53b2y3-s_lleRVV-doSTQ5CH6TAd2iNiRlCKG1v1AEXj0t9z_ZWFN2kRy-CyCpzL6JedfOyOWovVC-Cfd_6-mJIKNzx4N",
          width: 634,
        },
      ],
      place_id: "ChIJCZjMQ9z8YjkRB9ELTEOf7lI",
      plus_code: {
        compound_code: "MVVJ+MG Indore, Madhya Pradesh",
        global_code: "7JJQMVVJ+MG",
      },
      rating: 3.7,
      reference: "ChIJCZjMQ9z8YjkRB9ELTEOf7lI",
      scope: "GOOGLE",
      types: ["hospital", "health", "point_of_interest", "establishment"],
      user_ratings_total: 42,
      vicinity: "1-A, Nemawar Road, Navlakha Rd, chourha, Sajan Nagar, Indore",
    },
    {
      business_status: "OPERATIONAL",
      geometry: {
        location: {
          lat: 22.7356713,
          lng: 75.92081519999999,
        },
        viewport: {
          northeast: {
            lat: 22.73709242989272,
            lng: 75.92215777989273,
          },
          southwest: {
            lat: 22.73439277010728,
            lng: 75.91945812010728,
          },
        },
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/hospital-71.png",
      icon_background_color: "#F88181",
      icon_mask_base_uri:
        "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hospital-H_pinlet",
      name: "Patel multispeciality hospital indore",
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 3600,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/112173280780541658943">A Google User</a>',
          ],
          photo_reference:
            "Aap_uEB2UCCiIMzlX9cfnewLBabCik8624PkkDarEyQbiAEAj2OPfcvfRTUB5Cmh1LXsysuFIaglU0ueP_iVV6AJTQZg4DB0J6pc3T5thlyHF3O3977zgFkPAWVgVxyVsJ4q4L8CfHcTmIRDEDFMhjsH3Q-m61syGWF-yDRsDm7GgZhU-FlJ",
          width: 5400,
        },
      ],
      place_id: "ChIJS78lJrDjYjkRtZVke40ipKo",
      plus_code: {
        compound_code: "PWPC+78 Indore, Madhya Pradesh",
        global_code: "7JJQPWPC+78",
      },
      rating: 4.6,
      reference: "ChIJS78lJrDjYjkRtZVke40ipKo",
      scope: "GOOGLE",
      types: ["hospital", "health", "point_of_interest", "establishment"],
      user_ratings_total: 87,
      vicinity: "328/2/4/1, dargah bypass link road, Pragati Vihar, Indore",
    },
    {
      business_status: "OPERATIONAL",
      geometry: {
        location: {
          lat: 22.6901244,
          lng: 75.88151959999999,
        },
        viewport: {
          northeast: {
            lat: 22.69138512989272,
            lng: 75.88284387989272,
          },
          southwest: {
            lat: 22.68868547010728,
            lng: 75.88014422010727,
          },
        },
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/hospital-71.png",
      icon_background_color: "#F88181",
      icon_mask_base_uri:
        "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hospital-H_pinlet",
      name: "Medipearl Hospital",
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 3000,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/113177120154170424661">Anil Mourya</a>',
          ],
          photo_reference:
            "Aap_uECSJJ8atQE5S5CeR8xVdLp3OFSY1BYk76zUaJBEx5cPcaOWVinpA8vDUcLf_gR-BLcmMX0wizYsJ0GK5eRalE4OsT_58wDGW9wOHYlReK3D5HnkCTn5lDsX8QZ6lXpG4XRunWduNwvhqw9jDRJ0QA1ii34Cq68909uNWl2R0UTGygf0",
          width: 4000,
        },
      ],
      place_id: "ChIJk9tXTsP8YjkRYVTCI0tbX2g",
      plus_code: {
        compound_code: "MVRJ+2J Indore, Madhya Pradesh",
        global_code: "7JJQMVRJ+2J",
      },
      rating: 3.8,
      reference: "ChIJk9tXTsP8YjkRYVTCI0tbX2g",
      scope: "GOOGLE",
      types: ["hospital", "health", "point_of_interest", "establishment"],
      user_ratings_total: 25,
      vicinity: "No. 1, Anand Nagar, Chitawad Rd, Navlakha, Indore",
    },
    {
      business_status: "OPERATIONAL",
      geometry: {
        location: {
          lat: 22.7292038,
          lng: 75.8791,
        },
        viewport: {
          northeast: {
            lat: 22.73060312989272,
            lng: 75.88054717989272,
          },
          southwest: {
            lat: 22.72790347010728,
            lng: 75.87784752010728,
          },
        },
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/hospital-71.png",
      icon_background_color: "#F88181",
      icon_mask_base_uri:
        "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hospital-H_pinlet",
      name: "Shalby Hospital, Indore",
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 6000,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/101460120914606487993">A Google User</a>',
          ],
          photo_reference:
            "Aap_uECOz2dWyPLNNwPQ-7BGTeYkJNeXFYVJQqvFJmBuecJvNSBKlrCrQRt8anmuW-P5vUXn6K8lYlEtbboHf8GJq-IRyqasKtONB58fg8XCeej25YLuLU0RKzLHGZ2JE8HOddr7lfxnzm9vSjVcbiGtbZbLshV2mychkFsok9Tq_7I4rzWF",
          width: 8000,
        },
      ],
      place_id: "ChIJKU0apUH9YjkRyxCUmkWyOg0",
      plus_code: {
        compound_code: "PVHH+MJ Indore, Madhya Pradesh",
        global_code: "7JJQPVHH+MJ",
      },
      rating: 4.5,
      reference: "ChIJKU0apUH9YjkRyxCUmkWyOg0",
      scope: "GOOGLE",
      types: ["hospital", "health", "point_of_interest", "establishment"],
      user_ratings_total: 2992,
      vicinity: "Part 5 & 6 R S bhandari Marg, Janjeerwala Square, Indore",
    },
    {
      business_status: "OPERATIONAL",
      geometry: {
        location: {
          lat: 22.7401065,
          lng: 75.9740904,
        },
        viewport: {
          northeast: {
            lat: 22.74154382989272,
            lng: 75.97530517989273,
          },
          southwest: {
            lat: 22.73884417010728,
            lng: 75.97260552010728,
          },
        },
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/hospital-71.png",
      icon_background_color: "#F88181",
      icon_mask_base_uri:
        "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hospital-H_pinlet",
      name: "Sewa Kunj Hospital",
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 3120,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/111649461509504430351">Roshan Chouhan</a>',
          ],
          photo_reference:
            "Aap_uEAqvdihy41KImc03GSpwT9abqMkMgUA9-c2kSvMONsKho8L8DGA5MYVVWqbghJ0fG-KkRCvSZXNaFY061rsI2ZuVbIIEUFcve1cpn7vQKKzhWXZ9u7XbjKuCHYrq0fHkr-4X6Z2HlCk-r-Jyp9idodx8UURB60kDxAJo75tgUYij-51",
          width: 4160,
        },
      ],
      place_id: "ChIJB9CC8xPiYjkRKR6muuFB4Ck",
      rating: 3.3,
      reference: "ChIJB9CC8xPiYjkRKR6muuFB4Ck",
      scope: "GOOGLE",
      types: ["hospital", "health", "point_of_interest", "establishment"],
      user_ratings_total: 39,
      vicinity: "PXRF+2JW, Kanadiya",
    },
    {
      business_status: "OPERATIONAL",
      geometry: {
        location: {
          lat: 22.6968969,
          lng: 75.8812001,
        },
        viewport: {
          northeast: {
            lat: 22.69821587989272,
            lng: 75.88253607989273,
          },
          southwest: {
            lat: 22.69551622010728,
            lng: 75.87983642010728,
          },
        },
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/hospital-71.png",
      icon_background_color: "#F88181",
      icon_mask_base_uri:
        "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hospital-H_pinlet",
      name: "Arogyam Hospital",
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 3120,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/100675769138661329328">Chetan Singh Thakur</a>',
          ],
          photo_reference:
            "Aap_uECfCu0M54CGY2pJJEQLfbbNfhqnx_bBrsqjW_5RttTPnmoHOJqK-A3LqODOkKVtZtlQAbqN_cMguFduji1pNvZ9iNIKFoo5RJwNn5VDk66lAX7AGeI3q8h1DOytXxSKhd6oqIeK6NsOv3nRjBc0BJZSHcEROZoc-ISdhffr4edGKGEN",
          width: 4160,
        },
      ],
      place_id: "ChIJ2dZDm978YjkRQb2OKmNMjkg",
      plus_code: {
        compound_code: "MVWJ+QF Indore, Madhya Pradesh",
        global_code: "7JJQMVWJ+QF",
      },
      rating: 3.9,
      reference: "ChIJ2dZDm978YjkRQb2OKmNMjkg",
      scope: "GOOGLE",
      types: ["hospital", "health", "point_of_interest", "establishment"],
      user_ratings_total: 29,
      vicinity: "118, Navlakha Rd, Prakash Nagar, Indore",
    },
    {
      business_status: "OPERATIONAL",
      geometry: {
        location: {
          lat: 22.70458,
          lng: 75.8606863,
        },
        viewport: {
          northeast: {
            lat: 22.70592507989273,
            lng: 75.86203887989272,
          },
          southwest: {
            lat: 22.70322542010728,
            lng: 75.85933922010727,
          },
        },
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/hospital-71.png",
      icon_background_color: "#F88181",
      icon_mask_base_uri:
        "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hospital-H_pinlet",
      name: "Suyog Hospital",
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 4160,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/107934071345109969086">Jagannath Hammad</a>',
          ],
          photo_reference:
            "Aap_uECMny0GlhjYOZ-0qDVo8xXpJuCERkMfsLp_g1UG03rtMJ0wNhCr4dLcFoUFdwcKCfzMnnJwdLXCFI56KUQCr1qbY-qody_bSx-DjguFocpOm2whCuDApy8OQfIKIl249-Vuudisn1WWOTN8WPmN9EwH0qXu_rJ34NlNfS6rFdG4rnno",
          width: 3120,
        },
      ],
      place_id: "ChIJVVVVafv8YjkRsKaedftw9rE",
      plus_code: {
        compound_code: "PV36+R7 Indore, Madhya Pradesh",
        global_code: "7JJQPV36+R7",
      },
      rating: 3.3,
      reference: "ChIJVVVVafv8YjkRsKaedftw9rE",
      scope: "GOOGLE",
      types: ["hospital", "health", "point_of_interest", "establishment"],
      user_ratings_total: 31,
      vicinity:
        "195, Bhanwar Kunwa Road, Near Railway Cross, Mechanic Nagar, Mechanic Nagar, Indore",
    },
    {
      business_status: "OPERATIONAL",
      geometry: {
        location: {
          lat: 22.6844144,
          lng: 75.86410289999999,
        },
        viewport: {
          northeast: {
            lat: 22.68576092989272,
            lng: 75.86540002989271,
          },
          southwest: {
            lat: 22.68306127010728,
            lng: 75.86270037010728,
          },
        },
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/hospital-71.png",
      icon_background_color: "#F88181",
      icon_mask_base_uri:
        "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hospital-H_pinlet",
      name: "Dashmesh Hospital",
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 351,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/105912991493837422389">A Google User</a>',
          ],
          photo_reference:
            "Aap_uEDiCtXF6_td7cTC-FxefGmfTtc85UYgK9gdSZhHm-Z36FVjm3-11Sb6U6TnYo9ClTwcZrXJinIdQpz6OtA1J53V2fN5_fIIlKNs48zWU1IYoEBdvCD3RyHINJwwa4Ufe-IzBktfR5jFDrhyh0h1LpMWEPt5m7AppbAH4_SGmOddBCJB",
          width: 627,
        },
      ],
      place_id: "ChIJhbEsOgv9YjkRR5aamwEhSaM",
      plus_code: {
        compound_code: "MVM7+QJ Indore, Madhya Pradesh",
        global_code: "7JJQMVM7+QJ",
      },
      rating: 3.8,
      reference: "ChIJhbEsOgv9YjkRR5aamwEhSaM",
      scope: "GOOGLE",
      types: ["hospital", "health", "point_of_interest", "establishment"],
      user_ratings_total: 20,
      vicinity:
        "36, 6, 1, Bholaram Ustad Marg, Bhawarkua, Brahmapuri Colony, Shivampuri Colony, Indore",
    },
    {
      business_status: "OPERATIONAL",
      geometry: {
        location: {
          lat: 22.7285204,
          lng: 75.8730322,
        },
        viewport: {
          northeast: {
            lat: 22.72986797989272,
            lng: 75.87443142989272,
          },
          southwest: {
            lat: 22.72716832010727,
            lng: 75.87173177010729,
          },
        },
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/hospital-71.png",
      icon_background_color: "#F88181",
      icon_mask_base_uri:
        "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hospital-H_pinlet",
      name: "Charak Hospital",
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 3120,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/105648443996754652635">NITIN DIXIT</a>',
          ],
          photo_reference:
            "Aap_uED54IEEl8fQGoAWzLbEKFyYJ2NrdyYUBO_brprdo1J3JroodTc_Tp8I6JfzraQ2W-Mr23_gRfMOpVWWFwVibfMwrdzqDDqzbz5rJMTVtHOfMA5VXb4nkQ_zQXmeeq3jYM82aZrSdjHUWFxOS2bx80TyI0ZPqAg6pEQvS47-iQNwe8yy",
          width: 4160,
        },
      ],
      place_id: "ChIJHVRdLmr9YjkRAzftM-DjdME",
      plus_code: {
        compound_code: "PVHF+C6 Indore, Madhya Pradesh",
        global_code: "7JJQPVHF+C6",
      },
      rating: 3.9,
      reference: "ChIJHVRdLmr9YjkRAzftM-DjdME",
      scope: "GOOGLE",
      types: ["hospital", "health", "point_of_interest", "establishment"],
      user_ratings_total: 57,
      vicinity: "7 FILM BHawan, Yeshwant Niwas Rd, Indore",
    },
    {
      business_status: "OPERATIONAL",
      geometry: {
        location: {
          lat: 22.6975282,
          lng: 75.8545171,
        },
        viewport: {
          northeast: {
            lat: 22.69887782989272,
            lng: 75.85597247989271,
          },
          southwest: {
            lat: 22.69617817010728,
            lng: 75.85327282010728,
          },
        },
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/hospital-71.png",
      icon_background_color: "#F88181",
      icon_mask_base_uri:
        "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hospital-H_pinlet",
      name: "H.J.MEMORIAl HOSPITAL",
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 2304,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/100326012527575501483">Bilal Khan</a>',
          ],
          photo_reference:
            "Aap_uEBA9fG84godlxQtorJ59Ymp2UVVwtRA02YJY5IVW9h5Sr1qH_YecbgccMG-uAviRkqIFzh_wPxClFcvtHb85oLUxth4zLOWOs64P2FdXLLh9bvxrJbeVdSzT1CV4r6zfodKFXTY46fU5-mIT1lhRLSDVFb_0gdbytONDpfxQxQ5dRY9",
          width: 4096,
        },
      ],
      place_id: "ChIJQVGEmf_8YjkRExGLtjlrY3Q",
      plus_code: {
        compound_code: "MVX3+2R Indore, Madhya Pradesh",
        global_code: "7JJQMVX3+2R",
      },
      rating: 5,
      reference: "ChIJQVGEmf_8YjkRExGLtjlrY3Q",
      scope: "GOOGLE",
      types: ["hospital", "health", "point_of_interest", "establishment"],
      user_ratings_total: 2,
      vicinity: "2, Manik Bagh Rd, Transport Nagar, Indore",
    },
    {
      business_status: "OPERATIONAL",
      geometry: {
        location: {
          lat: 22.7323028,
          lng: 75.8896026,
        },
        viewport: {
          northeast: {
            lat: 22.73364332989272,
            lng: 75.89098897989271,
          },
          southwest: {
            lat: 22.73094367010728,
            lng: 75.88828932010728,
          },
        },
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/hospital-71.png",
      icon_background_color: "#F88181",
      icon_mask_base_uri:
        "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hospital-H_pinlet",
      name: "Convenient Hospitals Limited",
      opening_hours: {
        open_now: true,
      },
      place_id: "ChIJEZRiXG39YjkR3AlCS8t3kbk",
      plus_code: {
        compound_code: "PVJQ+WR Indore, Madhya Pradesh",
        global_code: "7JJQPVJQ+WR",
      },
      rating: 5,
      reference: "ChIJEZRiXG39YjkR3AlCS8t3kbk",
      scope: "GOOGLE",
      types: ["hospital", "health", "point_of_interest", "establishment"],
      user_ratings_total: 1,
      vicinity: "AB road, B Road, LIG Square, near, Indore",
    },
    {
      business_status: "OPERATIONAL",
      geometry: {
        location: {
          lat: 22.7021655,
          lng: 75.8392976,
        },
        viewport: {
          northeast: {
            lat: 22.70353172989272,
            lng: 75.84063352989273,
          },
          southwest: {
            lat: 22.70083207010727,
            lng: 75.83793387010728,
          },
        },
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/hospital-71.png",
      icon_background_color: "#F88181",
      icon_mask_base_uri:
        "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hospital-H_pinlet",
      name: "Sehat Hospital And Trauma Center",
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 1941,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/105150058036735523610">105150058036735523610</a>',
          ],
          photo_reference:
            "Aap_uECz-bJE1I20-ATjDWRyOH62IuVIX9w42C0ja_dmOnMaSb69s5Bm_NOMzDAqWw9LfH2LjUYckCXDoQslMmMNNcubr6VarkHHwYJVrqL2p1DifYmt_79NY6ET0-Q_xVt2yEP-P6CJ4jHBy_UGWk5scSG7cE6xdGsyHX4SzANraUzICHEX",
          width: 1504,
        },
      ],
      place_id: "ChIJp7LIUbL9YjkRfM7zYovrIec",
      plus_code: {
        compound_code: "PR2Q+VP Indore, Madhya Pradesh",
        global_code: "7JJQPR2Q+VP",
      },
      rating: 2.7,
      reference: "ChIJp7LIUbL9YjkRfM7zYovrIec",
      scope: "GOOGLE",
      types: ["hospital", "health", "point_of_interest", "establishment"],
      user_ratings_total: 18,
      vicinity:
        "13-A, Ranjeet Hanuman Road, Usha Nagar Extension, Sudama Nagar, Indore",
    },
    {
      business_status: "OPERATIONAL",
      geometry: {
        location: {
          lat: 22.7695313,
          lng: 75.8887723,
        },
        viewport: {
          northeast: {
            lat: 22.77087917989272,
            lng: 75.89012167989273,
          },
          southwest: {
            lat: 22.76817952010728,
            lng: 75.88742202010728,
          },
        },
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/hospital-71.png",
      icon_background_color: "#F88181",
      icon_mask_base_uri:
        "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hospital-H_pinlet",
      name: "Astha Hospital",
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 2610,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/113295938133011414205">Kumar Girendra</a>',
          ],
          photo_reference:
            "Aap_uEDjoV4xjxoIvCsfPiqhKbM9ejvaAj43lmBmlcZA3pfz_iaRrX8jKcs5p5pdV5V3Qj6muXDWoLda0d1j5gG5NiuNdYDAipRl2wwik7-zLAa23Toa0QFTMz6BJp0f8I47ffw2gujVzm9fS5S4FlcwNAsyhmVmelMFo-J3h9X2nxXNoSW7",
          width: 4640,
        },
      ],
      place_id: "ChIJc1bJe7cCYzkRtDk4Vm_EeR0",
      plus_code: {
        compound_code: "QV9Q+RG Indore, Madhya Pradesh",
        global_code: "7JJQQV9Q+RG",
      },
      rating: 4.1,
      reference: "ChIJc1bJe7cCYzkRtDk4Vm_EeR0",
      scope: "GOOGLE",
      types: ["hospital", "health", "point_of_interest", "establishment"],
      user_ratings_total: 34,
      vicinity: "Main Rd, Rajiv Awas Vihar, Part I, Scheme No 114, Indore",
    },
  ];