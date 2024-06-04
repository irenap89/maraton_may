
import './Bg.css';
import close_red from './assets/close.png'
import Download_file  from './Download_file';
import banner from './assets/banner.png'
import logo from './assets/logo.png'
import No_bg from './No_bg';
import React, { useState } from 'react';

function Bg() {

  const [selected_tab_no_bg, setselected_tab_no_bg] = useState('selected_tab');
  const [selected_tab_original, setselected_tab_original] = useState('');

  function update_tab_no_bg(e){
     if (e.target.className == 'tab_no_bg ' || e.target.className =='tab_no_bg selected_tab') {
      setselected_tab_no_bg('selected_tab');
      setselected_tab_original('');
     } else {
      setselected_tab_no_bg('');
      setselected_tab_original('selected_tab');
     }
  }

  return (
   
  <div className='bg_cont'>
        <img src={close_red} className='close_red'/>

        <div className='header'>
            <div className='header_title'> העלאת תמונה כדי להסיר את הרקע </div>

            <div className='header_formats'> פורמטים נתמכים: png, jpeg </div>
            <button className='upload_img_btn'> העלאת תמונה </button>
        </div>

        <div className='middle_cont'>
          <div className='right_div'>
              <Download_file title="תמונה חינם" top="top" sub_title="תצוגה מקדימה של תמונה" btn="הורד" small_text="איכות טובה עד 0.25 מגה פיקסל"></Download_file>
              <Download_file title="Pro"  top="bottom"  sub_title="תמונה מלאה"  btn=" HD הורד"  small_text="האיכות הטובה ביותר עד 25 מגה פיקסל"></Download_file>
          </div>

          <div className='left_div'>
                <div className='tabs_cont'>
                    <div className={'tab_no_bg ' + selected_tab_no_bg } onClick={update_tab_no_bg}>הוסר רקע</div>
                    <div className={'tab_original ' + selected_tab_original} onClick={update_tab_no_bg}>מקורי</div>
                </div>


                {selected_tab_no_bg == 'selected_tab' ? <No_bg comt_type="no_bg"></No_bg> :<No_bg comt_type="original"></No_bg>}
          </div>

        </div>


        <div className='footer'>
          <img src={banner} className='banner'/>
          <img src={logo} />
        </div>

  </div>
  
  );
}

export default Bg;
