import { Avatar, Rate } from 'antd'
import React from 'react'
import styles from './ReviewCard.module.css'
export default function ReviewCard(props) {
  const {data,index} = props;
  const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
  return (
      <>
      <div className={styles.card}>
    <div className={styles.upper}>
        <div className={styles.left}>
        <Avatar style={{ backgroundColor: ColorList[index], verticalAlign: 'middle' }} size="large">
        {data.author_name.charAt(0)}
      </Avatar>
        </div>
        <div className={styles.right}>
            <div className={styles.name}>
                {data.author_name}
            </div>
            <div className={styles.time}>
               <Rate style={{fontSize:"13.5px"}} allowHalf disabled defaultValue={data.rating}/> &nbsp; &nbsp; {data.relative_time_description}
            </div>
            <div className={styles.bottom}>
                {data.text}
            </div>
        </div>
    </div>
    
    </div>
    </>
  )
}
