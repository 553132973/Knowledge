import React from 'react';
import snowflakeIcon from '../../images/xuehua.png'
import './index.css'
class iconUrl extends React.Component {

    render() {
        let lenght = parseInt(Math.random()*100)
        
        return (
            <div> 
                <img src={snowflakeIcon} alt="上海鲜花港 - 郁金香"  style={{wdith:`${lenght}px`,height:`${lenght}px`}}/>
            </div>
        );
    }
}

export default iconUrl;