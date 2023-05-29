import React, { useState } from 'react'

import { imgBG } from '../Utils/imgTemporaria';
import './Profile.css'

function Profile() {
  const [userInfo, setUserInfo] = useState([]);
  return (
    <div className='card'>
      <div className='user' style={{backgroundImage: imgBG}}>
        <div className='imgBx'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQudFuROqfYYyfkAds1wPGIoggjU1_5LCtGwpXEAhwzn8YU8Mz39O7qQ0UiCqFltbUC4I&usqp=CAU" alt="perfil avatar" />
        </div>        
      </div>
      <div>
        <h3>Tarcisio Mesmo</h3>
        <h4>Titulo de exemplo</h4>
        <h4>Especialidade</h4>
        <h3>creditos: 9999</h3>
      </div>
      <div>
        <h2>Conquistas</h2>
        <div>
          <h4>N° de favores</h4>
          <h4>Nivel c/ base feedback</h4>
          <div>{` [ ]   [ ]   [ ]   [ ]   [ ]`}</div>
        </div>
      </div>
    </div>
  )

}

export default Profile;