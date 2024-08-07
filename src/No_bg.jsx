
import './No_bg.css';

import React, { useState, useRef } from 'react';

import img_1 from './assets/img_1.png'

function No_bg(props) {
    //props.comt_type
    const [color, setcolor] = useState('');
    const inputElement = useRef();

    const focusInput = () => {
        debugger;
      inputElement.current.click();
    };


  return (
      <div className='no_bg_cont'>
                {props.comt_type == 'no_bg'?
                <div>
                    <div className='no_bg_cont_text'> אל תשכח להוריד את הקבצים. הם ימחקו אוטומטית כשתצא מהדף </div>

                    <div className='bg_color' onClick={focusInput}> צבע רקע <div className='color_disp' style={{ backgroundColor: color? color: 'transparent'}} > </div></div>
                    <input type="color" ref={inputElement}  className='color_input' onChange={(e)=>{ props.colorfunc(e.target.value);setcolor(e.target.value) }}/>  
                </div>
                : <></>}

                <img src={props.file_name}  className='image'/> 
       </div>
  );
}

export default No_bg;
