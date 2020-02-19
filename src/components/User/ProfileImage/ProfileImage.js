import React from 'react'

import './ProfileImage.css'

const ProfileImage = ({ src, name }) => {
  const kebabcased = name.toLowerCase().split(' ').join('-')
  return <img className="profile-image" src={src} alt={"user-profile-" + kebabcased} />
}

export default ProfileImage