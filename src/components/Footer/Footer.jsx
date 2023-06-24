import React from 'react'
import "./Footer.css"
import logo from '../../assets/logo.webp';


const Footer = () => {
  return (
    <div className='footerImportant'>
        <div className='footer'>
            <div className='logoFooter'><img src={logo} alt="logoTiendaFashion" /></div>
            <div className='footerList'>
                <h2>Tienda Fashion</h2>
                <div className='footerListItems'>
                    <ul>
                        <h3>SmartPhones</h3>
                        <li>Redmi</li>
                        <li>Xiaomi</li>
                        <li>Iphone</li>
                    </ul>
                    <ul>
                        <h3>Notebooks</h3>
                        <li>Gamer</li>
                        <li>Dell</li>
                        <li>Hp Ryzen</li>
                    </ul>
                    <ul>
                        <h3>Consolas</h3>
                        <li>Nintendo Switch</li>
                        <li>Xbox Series S</li>
                        <li>Sony PlayStation 5 </li>
                        <li>Sony Ps4 Slim</li>
                    </ul>
                </div>
            </div>
        </div>
        <hr />
        <div className='footerContact'>
            <h3>Cel: 020220202002</h3>
            <h3>Direction: Canelones/Uruguay</h3>
        </div>
        <div className='footerFoot'>
            <hr />
            <h4>Derechos Reservados</h4>
            <h5>2023 CoderHouse</h5>
        </div>
    </div>
)
}

export default Footer