import { useState } from 'react';
import axios from "axios";

import ModalComp from './ModalComp';


const Form = () => {

  const [ urlInp, setUrlInp ] = useState('');
  const [ res, setRes ] = useState('');
  const [ modalState, setModalState ] = useState(false);

  const [ mes, setMes ] = useState(false);

  const message = () => {
    setMes(true)
    document.body.style.background = 'rgba(4, 246, 40, 0.44)';
    setTimeout(() => {
        closeModal();
        setMes(false)
        setRes('')
        document.body.style.background = '';
    }, 3000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleClick = () => {
    const encodedParams = new URLSearchParams();
    console.log(process.env.REACT_APP_X_RapidAPI_Key_1, process.env.REACT_APP_X_RapidAPI_Host_1)

    if(urlInp.match(/https:\/\//)){
      encodedParams.append("url", urlInp);
    } else {
      encodedParams.append("url", `https://${urlInp}`);
    }

    const options = {
      method: 'POST',
      url: 'https://url-shortener-service.p.rapidapi.com/shorten',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': `${process.env.REACT_APP_X_RapidAPI_Key_1}`,
        'X-RapidAPI-Host': `${process.env.REACT_APP_X_RapidAPI_Host_1}`
      },
      data: encodedParams
    };


    axios.request(options).then(function (response) {
      setRes(response.data.result_url)
      setModalState(true)
    }).catch(function (error) {
    	console.error(error);
    });

  }

  const closeModal = () => {
    setModalState(false);
  }

  return (
    <>
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <p className='heading'>urlShortner</p>
        </div>
      </div>
    </nav>

      <div className='form-div'>
        <form onSubmit = { handleSubmit } className='form'>
          <input
            type='text'
            placeholder='https://www.youtube.com/'
            onChange={ (e) => setUrlInp(e.target.value) }
          />
          <button className='btn' type='submit' onClick = { handleClick } >Submit</button>
        </form>
      </div>
      { modalState ? <ModalComp message = { message } res = { res } modalState = { modalState } closeModal = { closeModal }/> : null }

    </>
  )
}

export default Form;

// <div className={`${mes ? 'show-mes message': 'message'} `}>
//   <h3>Copied</h3>
// </div>
