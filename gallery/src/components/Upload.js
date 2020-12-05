import React ,{useState} from 'react';
import Progress from './Progress';

const Upload = () => {
    const [file,Selected] = useState(null)
    const [error,SetError] = useState('')
    const [display,Setdisplayname] = useState('')
    const types = ['image/png','image/jpg','image/jpeg']
    function select(e){
        let chossen = e.target.files[0]
        console.log(chossen);
        if (chossen && types.includes(chossen.type)){
            Selected(chossen)
            SetError('')
        }else{
            Selected(null)
            SetError('choose png or jpeg or jpg')
        }
        // const a = (chossen !=null && includes(chossen.types)) ?chossen:null 
        // Selected(a)
    }
    return (
          
        <div>
        <form>
      <label>
        <input type="file" onChange={select} />
        <span>+</span>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <Progress display={display} Setdisplayname={Setdisplayname} file={file} Selected={Selected} />}
        {display}
      </div>
    </form>
        </div>
    );
}

export default Upload;
