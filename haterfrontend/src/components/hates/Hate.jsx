import React, { useState, useEffect, useRef } from 'react';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import MessageIcon from '@mui/icons-material/Message';
import AutorenewIcon from '@mui/icons-material/Autorenew';
<<<<<<< HEAD
import { updateHate } from '../../services/hates';
import axios from 'axios';
=======
import Criticisms from '../criticisms/Criticisms';
>>>>>>> 61920e05822c01c78c56a23a72d5ffca60cd0f9f

export default function Hate({ hateData, setToggle }) {
  let hateButtons = useRef(null)
  let rehateButtons = useRef(null)

  const [hate, setHate] = useState({
    hate: hateData.hate,
    hater_name: hateData.hater_name,
    hate_tag: hateData.hate_tag,
    hate_count: hateData.hate_count,
    crit_count: hateData.hate_count,
    rehate_count: hateData.rehate_count,
    date_time: hateData.date_time
  })
  
  const [hateCount, setHateCount] = useState(0);
  const [rehateCount, setRehateCount] = useState(0);
  const [hatedisabled, setHateDisabled] = useState(false);
  const [rehatedisabled, setReHateDisabled] = useState(false);

  const incrementHateCount = async (event) => {
    setHateCount(hateCount + 1)
    event.preventDefault()
    let hateUpdated = await axios.get(`http://127.0.0.1:8000/addDislike/?hateid=${hateData.id}&sign=${1}`)
    setToggle(prev => !prev)
    hateButtons.current.classList.add('hate-disabled');
    hateButtons.current.style.color = "red";
    console.log(hateData.id)
  }

  const incrementRehateCount = async (event) => {
    setRehateCount(rehateCount + 1)
    event.preventDefault()
    let rehateUpdated = await axios.get(`http://127.0.0.1:8000/addRehate/?hateid=${hateData.id}&sign=${1}`)
    setToggle(prev => !prev)
    rehateButtons.current.classList.add('hate-disabled');
    rehateButtons.current.style.color = "green";
  }



  // Modal constants

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div className="hate-post">
      <div className='hate-profile'>
        <div className='hate-profile-pic'>
          <img src={`https://avatars.dicebear.com/api/adventurer/${hate.hater_name}.svg?flip=1`} alt="profile"></img>
        </div>
      </div>
      <div className="hate-form">
          <h3
            className="hate-name"
            type="text"
            name="name">
            {hate.hater_name} {hate.hate_tag}
          </h3>
        <div className="hate-info">
          <h2
            className="hate-text"
            type="text"
            name="text">
            {hate.hate}
          </h2>
          <h3
            className='hate-date'
            type="date"
            name="text">
            {hate.date_time}
            </h3>

        </div>
        <div className='hate-buttons'>
          <button className='hate-criticisms' title="Criticism">
            <MessageIcon className='hate-crit'></MessageIcon> {hate.crit_count}
          </button>
          <button ref={rehateButtons} className='hate-rehate' title="Rehate" disabled={rehatedisabled} onClick={incrementRehateCount}>
            <AutorenewIcon className='hate-renew'></AutorenewIcon> {hate.rehate_count + rehateCount}
          </button>
          <button ref={hateButtons} className='hate-dislike' title="Dislike" disabled={hatedisabled} onClick={incrementHateCount}>
            <HeartBrokenIcon className='hate-broken'></HeartBrokenIcon> {hate.hate_count + hateCount}
          </button>
        </div>
      </div>
    </div>
  )
}