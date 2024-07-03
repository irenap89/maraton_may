
import './Download_file_popup.css';

import React, { useState } from 'react';
import close_1 from './assets/close1.png'
import not_robot from './assets/not_robot.png'
import axios from 'axios';

function Download_file_popup(props) {

    const [checkbox_set, setcheckbox_set] = useState(false);
    const [showError, setshowError] = useState(false);


    function set_not_robot_func(e){
        setcheckbox_set(e.target.checked);
    }

    async function download_file (){
    
        if(checkbox_set && props.file_name){
                await fetch('http://localhost:5000/'+props.file_name)
                    .then(response => {
                    response.blob().then(blob => {
                        debugger;
                        let url = window.URL.createObjectURL(blob);
                        let a = document.createElement('a');
                        a.href = url;
                        a.download = props.file_name;
                        a.click();
                    });
                  
                });
        } else{
            setshowError(true);
        }
        
    }



    return (
        <div>
            <div className='overlay'> </div>
            <div className='Download_file_popup_main'>
                <img src={close_1} className='close' onClick={()=>{props.setshow_download_popup(false)}} />

                <div className='top_img'></div>

                <div className='Download_file_popup_text'> אישור להורדת תמונה </div>

                <div className='Download_file_popup_subtext'> האם להוריד את התמונה? </div>        

                <div className='not_robot_cont'>
                    <input type="checkbox" onChange={set_not_robot_func} />
                    <div className='not_robot'> אני לא רובוט </div>
                    <img src={not_robot} className='not_robot_img' />
                </div>

                <div className='btn_cont'>
                    <button className='cancel_btn' onClick={()=>{props.setshow_download_popup(false)}}> ביטול </button>
                    <button className='approve_btn' onClick={download_file}> אישור </button>
                </div>
                {showError? <div className='err_not_robot'> לטעון תמונה/נא לסמן אני לא רובוט</div>: <></>}
            </div>
        </div>
    );
}

export default Download_file_popup;
