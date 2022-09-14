import { useState, useRef, useEffect } from 'react';
import { TiClipboard } from 'react-icons/ti'

import { BiCopy } from "react-icons/bi";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const ModalComp = ({ res, modalState, closeModal, message }) => {




  if(modalState){

    return (
      <>

        <section className={`${modalState ? 'show-modal modal-overlay' : 'modal-overlay'} `}>
          <div className='modal-container'>
            <div className='modal-body' >
            <a target='_blank' href={res}>{res}</a>
            <section className='copy-btn-section'>
              <CopyToClipboard text={res}>
                <button onClick={ message } className='btn-copy'>
                  <span><TiClipboard /></span>
                </button>
              </CopyToClipboard>
            </section>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default ModalComp;
// <TiClipboard onClick = {copyText} />
