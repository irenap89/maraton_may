
import './Download_file.css';
import new_img from './assets/new.png'

function Download_file(props) {
  return (
     
        <div className={'Download_file_cont ' + props.top} >
            { props.top=="bottom" ? <img src={new_img} className='pro_img'/>: <></>}

            <div className={'file_title ' + props.top+"_title"}>  {props.title}</div>
            <div className='file_subtitle'>{props.sub_title} </div>
            <button className='file_btn' onClick={()=>{props.setshow_download_popup(true)} }> {props.btn}</button>
            <div className='small_text'>{props.small_text} </div>
        </div>
       
    
  );
}

export default Download_file;

