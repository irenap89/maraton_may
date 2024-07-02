
import './Download_file_popup.css';

import React, { useState } from 'react';
import close_1 from './assets/close1.png'
import not_robot from './assets/not_robot.png'
function Download_file_popup(props) {

    return (
        <div>
            <div className='overlay'> </div>
            <div className='Download_file_popup_main'>
                <img src={close_1} className='close' onClick={()=>{props.setshow_download_popup(false)}} />

                <div className='top_img'></div>

                <div className='Download_file_popup_text'> אישור להורדת תמונה </div>

                <div className='Download_file_popup_subtext'> האם להוריד את התמונה? </div>        

                <div className='not_robot_cont'>
                    <input type="checkbox" />
                    <div className='not_robot'> אני לא רובוט </div>
                    <img src={not_robot} className='not_robot_img'/>
                </div>

                <div className='btn_cont'>
                    <button className='cancel_btn' onClick={()=>{props.setshow_download_popup(false)}}> ביטול </button>
                    <button className='approve_btn'> אישור </button>
                </div>

            </div>
        </div>
    );
}

export default Download_file_popup;
