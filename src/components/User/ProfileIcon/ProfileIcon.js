import React from 'react'

import './ProfileIcon.css'

const ProfileIcon = ({ src, ...events }) => {
  return <img src={src} {...events} className="profile-icon" />
}

export default ProfileIcon
