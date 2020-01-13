import React from 'react';
import IconUrl from './iconUrl'


const backStyle = {
    width: '100%',
    height: '100%',
    position: 'fixed',
    background: '#000',
}
class modal extends React.Component {
    obj = (o) => {
        var speed = 0;   //雪花每次下落的数值（10px）
        var startPosLeft = Math.ceil(Math.random() * document.documentElement.clientWidth);//设置雪花随机的开始x值的大小
        o.style.opacity = (Math.ceil(Math.random() * 3) + 7) / 10;  //设置透明度
        o.style.left = startPosLeft + 'px';
        o.style.color = "#fff";
        o.style.fontSize = 12 + Math.ceil(Math.random() * 14) + 'px';
        setInterval(function () {
            //雪花下落的top值小鱼屏幕的可视区域高时执行下列
            if (speed < document.documentElement.clientHeight) {
                o.style.top = speed + 'px';
                o.style.left = startPosLeft + Math.ceil(Math.random() * 8) + 'px';
                speed += 10;
            }
            else {
                o.style.display = 'none';
            }
        }, 400);
    }
    componentDidMount() {
        const flame = this.refs.flame
        let that = this
        setInterval(function () {
            const odiv = document.createElement('div');  //创建div
            odiv.innerHTML = "✽";   //div的内容
            odiv.style.position = 'absolute';  //div的绝对定位
            flame.appendChild(odiv);   //把创建好的div放进flame中
            that.obj(odiv);  //执行obj的draw方法
        }, 800);
    }
    render() {
        return (
            <div style={backStyle}>
                <div ref='flame'></div>
            </div>
        );
    }
}

export default modal;