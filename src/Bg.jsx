
import './Bg.css';
import close_red from './assets/close.png'
import Download_file from './Download_file';
import banner from './assets/banner.png'
import logo from './assets/logo.png'
import No_bg from './No_bg';
import React, { useState, useRef } from 'react';

import Eula from './Eula'
import Download_file_popup from './Download_file_popup';
import axios from 'axios';


function Bg() {
  const inputElement = useRef();
  const [show_eula, setshow_eula] = useState(false);
  const [show_download_popup, setshow_download_popup] = useState(false);


  const [selected_tab_no_bg, setselected_tab_no_bg] = useState('selected_tab');
  const [selected_tab_original, setselected_tab_original] = useState('');

  const [file_err, setfile_err] = useState('');

  const [file_name_no_bg, setfile_name_no_bg] = useState('');
  const [file_name_original, setfile_name_original] = useState('');


  const [show_loader, setshow_loader] = useState(false);

  const [color, setcolor] = useState('');


  function update_tab_no_bg(e) {
    if (e.target.className == 'tab_no_bg ' || e.target.className == 'tab_no_bg selected_tab') {
      setselected_tab_no_bg('selected_tab');
      setselected_tab_original('');
    } else {
      setselected_tab_no_bg('');
      setselected_tab_original('selected_tab');
    }
  }


  function show_eula_func() {
    setshow_eula(true);
  }

  const fileInput = () => {
    inputElement.current.click();
  };


  function upload_file(e) {
    let file = e.target.files[0]
    console.log(file);

    console.log(color);
  
    if (file.size <= 1000000 && (file.type == 'image/png' || file.type == 'image/jepg' || file.type == 'image/jpg')) {

      setshow_loader(true);

      let formData = new FormData();
      let server_url = 'http://localhost:5000/';

      formData.append('color', color);

      formData.append('file', file);

      axios({
        method: 'post',
        url: server_url+'upload_img',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      }).then(function (response) {
        setfile_name_original(server_url + response.data);

        setfile_name_no_bg(server_url+'no_bg_' + response.data);

        setshow_loader(false);
        console.log(response);
      })
        .catch(function (error) {

          console.log(error);
        })


    } else {
      setfile_err('קובץ לא נתמך');
    }


  }


  return (
    <>
      <div className='bg_cont'>
        <img src={close_red} className='close_red' />

        <div className='header'>
          <div className='header_title'> העלאת תמונה כדי להסיר את הרקע </div>

          <div className='header_formats'> פורמטים נתמכים: png, jpeg </div>
          <button className='upload_img_btn' onClick={fileInput}> העלאת תמונה </button>
          <input type="file" ref={inputElement} className='inputFileClass' onChange={upload_file} />
          <div className='file_err'> {file_err}</div>
        </div>

        <div className='middle_cont'>
          <div className='right_div'>
            <Download_file setshow_download_popup={setshow_download_popup} title="תמונה חינם" top="top" sub_title="תצוגה מקדימה של תמונה" btn="הורד" small_text="איכות טובה עד 0.25 מגה פיקסל"></Download_file>
            <Download_file title="Pro" top="bottom" sub_title="תמונה מלאה" btn=" HD הורד" small_text="האיכות הטובה ביותר עד 25 מגה פיקסל"></Download_file>
          </div>

          <div className='left_div'>
            <div className='tabs_cont'>
              <div className={'tab_no_bg ' + selected_tab_no_bg} onClick={update_tab_no_bg}>הוסר רקע</div>
              <div className={'tab_original ' + selected_tab_original} onClick={update_tab_no_bg}>מקורי</div>
            </div>


            {selected_tab_no_bg == 'selected_tab' ? <No_bg comt_type="no_bg"  colorfunc={setcolor} file_name={file_name_no_bg}></No_bg> : <No_bg comt_type="original" file_name={file_name_original}></No_bg>}

            <div className='footer_left_div'>
              <div className='footer_left_div_text'> על ידי העלאת תמונה אתה מסכים לתנאים וההגבלות. גכלחעגלחיעמ </div>

              <button className='eula' onClick={show_eula_func}> תקנון החברה </button>
            </div>

          </div>

        </div>


        <div className='footer'>
          <img src={banner} className='banner' />
          <img src={logo} />
        </div>



      </div>

     {show_loader? <div className='loader'> 
          <div className='loader_in'> 39% </div>
      </div>: <></>}

      {show_eula ? <Eula close_popup_func={setshow_eula} ></Eula> : <></>}

      {show_download_popup ? <Download_file_popup setshow_download_popup={setshow_download_popup} ></Download_file_popup> : <></>}

    </>
  );
}

export default Bg;
