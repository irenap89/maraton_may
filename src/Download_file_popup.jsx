
import './Download_file_popup.css';

import React, { useState } from 'react';
import close_1 from './assets/close1.png'
function Download_file_popup(props) {

    return (
        <div>
            <div className='overlay'> </div>
            <div className='Download_file_popup_main'>
                <img src={close_1} className='close' onClick={()=>{props.setshow_download_popup(false)}} />

                <div className='top_img'></div>

                <div className='Download_file_popup_text'> אישור להורדת תמונה </div>
            
            </div>
        </div>
    );
}

export default Download_file_popup;
