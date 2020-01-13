import React from 'react';
import snowflakeIcon from '../../images/xuehua.png'
import './index.css'
class iconUrl extends React.Component {

    render() {
        let lenght = parseInt(Math.random()*100)
        
        return (
            <div> 
                <img src={snowflakeIcon} style={{wdith:`${lenght}px`,height:`${lenght}px`}}/>
            </div>
        );
    }
}

export default iconUrl;