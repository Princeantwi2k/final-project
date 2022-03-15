import React from 'react';
import './Chart.css'
import { Typography} from "antd";
import { Link } from 'react-router-dom';
import News from './News';
 
const {Title} = Typography


const New = () => {
    return (
        <>
        <div className='chart-body'>
  <div className='news-headeing-container'>
      <Title level={2} className="news-title">Latest Crypto News</Title>
      <Title level={3} className="show-more"><Link to="/cryptocurrency">show more</Link></Title>
      </div>
      <News simplified />
      </div>
        </>
    );
}

export default New;
