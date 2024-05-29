
import './Bg.css';
import close_red from './assets/close.png'
import Download_file  from './Download_file';
import banner from './assets/banner.png'
import logo from './assets/logo.png'
function Bg() {
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
