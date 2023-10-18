import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from "@mui/material";

import '../../App.css'
import BackgroundImage from '../../assets/images/img_7.png'
import A1 from '../../assets/images/img_1.png'
import A2 from '../../assets/images/img_2.png'
import A3 from '../../assets/images/img_4.png'
import A4 from '../../assets/images/img_3.png'
import A5 from '../../assets/images/a4.png'
import SUS from '../../assets/images/sust.png'

export default function LandingPage() {

    return (
        <header style={ HeaderStyle }>
            <div style={flexStyle}>
                <img className="icon-contain" src={SUS}/>
            <h1 className="main-title">Project Helper</h1>
            </div>
            {/*<p className="main-para text-center">Project Helper</p>*/}
            <div className="buttons text-center">
                <Link to="/login">
                    <Button className="primary-button" variant="contained" sx={{ margin: '25px 10px 0px' }}>log in</Button>
                </Link>
                <Link to="/register">
                    <Button className="primary-button" id="reg_btn2" variant="contained" sx={{ margin: '25px 10px 0px' }}><span>register </span></Button>
                </Link>
            </div>
        <div className="icon-text-container">
            <div className="icon-text-container" style={iconContainerStyle}>
                <div className="icon-text" style={iconOutStyle}>
                    <img src={A1} alt="Icon 1" className="icon-1" style={iconStyle} />
                    <p>Data</p>
                </div>
                <div className="icon-text" style={iconOutStyle}>
                    <img src={A2} alt="Icon 2" style={iconStyle} className="icon-1" />
                    <p style={wordStyle}>View</p>
                </div>
            </div>
        </div>
            <div className="icon-text-container">
                <div className="icon-text-container" style={iconContainerStyle}>
                    <div className="icon-text" style={iconOutStyle}>
                        <a href={"https://genshin.mihoyo.com/en"} target="_blank" rel="noreferrer" style={aStyle}>
                        <img src={A5} alt="Icon 1" className="icon-1" style={iconStyle2} />
                        </a>
                        <p>Genshin</p>
                    </div>
                </div>
            </div>
            <div className="icon-text-container">
                <div className="icon-text-container" style={iconContainerStyle}>
                    <div className="icon-text" style={iconOutStyle}>
                        <img src={A3} alt="Icon 1" className="icon-1" style={iconStyle} />
                        <p>Show</p>
                    </div>
                    <div className="icon-text" style={iconOutStyle}>
                        <img src={A4} alt="Icon 2" className="icon-1" style={iconStyle} />
                        <p style={wordStyle}>Setting</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "0vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
}
const flexStyle = {
    display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'center',
}
const wordStyle = {
}
const iconStyle = {
    width: '90%', // 调整图像宽度
    height: '90%', // 调整图像高度
    margin: '30px 60px 0', // 设置图像之间的间距
    objectFit: 'fill',
};
const iconStyle2 = {
    width: '90%', // 调整图像宽度
    height: '90%', // 调整图像高度
    objectFit: 'fill',
    margin: '30px 0px 1px'
}
const iconOutStyle = {
    width: '230px', // 调整图像宽度
    height: '230px', // 调整图像高度
    margin: '60px 60px 0', // 设置图像之间的间距
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // 让描述文本居中
    textAlign: 'center', // 也可让文本水平居中
    fontSize: '24px', // 增加字体大小
    objectFit: 'cover',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
}

const aStyle = {
    margin: 0,
    padding: 0,
    textDecoration: 'none',
    display: 'inline-block',
    border: 'none',
}

const iconContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
};