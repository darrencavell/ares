import React, { Fragment, useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import timesIcon from '../assets/ic-times.svg'
import searchIcon from '../assets/ic-search.svg'
import mountain from '../assets/mountain.jpg'
import darren from '../assets/darren.jpeg'

import ProfileIcon from '../components/User/ProfileIcon/ProfileIcon'
import ProfileImage from '../components/User/ProfileImage/ProfileImage'

import './Home.css'

const Home = props => {
  let interval = null
  const inputRef = useRef(null)
  const [users, setUsers] = useState([])
  const [typing, setTyping] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isSearching, setIsSearching] = useState(false)

  const onSearch = () => setIsSearching(true)
  const onCancelSearch = () => setIsSearching(false)
  const onTyped = e => {
    const typed = e.target.value
    setIsTyping(true)
    setTyping(typed)
  }

  useEffect(() => {
    props.getUserDetail()
  }, [])
  useEffect(() => {
    setUsers(props.users)
  }, [props.users])
  useEffect(() => {
    if(isSearching)
      inputRef.current.focus()
  }, [isSearching])
  useEffect(() => {
    if(isTyping)
      clearTimeout(interval)
    interval = setTimeout(() => {
      setIsTyping(false)
    }, 2000)
  }, [isTyping])
  useEffect(() => {
    if(!isTyping && (typing || typing === '')) {
      setUsers(props.users.filter(user => !user.fullname.toLowerCase().indexOf(typing)))
    }
  }, [isTyping, typing])

  return (
    <>
      <div className="jumbotron jumbotron--inner">
        <div className="header">
          <div className="logo"></div>
          <ProfileImage src={darren} name="darren" />
        </div>
        <div className="content">
          <h1>Dashboard</h1>
          <p>Welcome back Darren Cavell</p>
        </div>
      </div>
      <div className="container">
        <div className="flex flex--row">
          <div className="profile-box">
            <div className="title">
              {isSearching || <span>User Lists</span>}
              {isSearching || <ProfileIcon src={searchIcon} onClick={onSearch} />}
              {isSearching && <input type="text" ref={inputRef} onChange={onTyped} />}
              {isSearching && <ProfileIcon src={timesIcon} onClick={onCancelSearch} />}
            </div>
            {users && users.map(user => (
              <div className="profile-box--list" key={user.id}>
                <ProfileImage src={user.image_profile} name={user.fullname} />
                <div className="profile-box--description">
                  <div className="title">{user.fullname}</div>
                  <p>{user.message}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="quote-box">
            <h1>The Day You Become A Great Developer</h1>
            <p>by Darren Cavell</p>
            <div>
              I recently received several opinions throughout my connections within LinkedIn.
              Most of them saying that they wanted to create something but didn't know the underlying.
              For me, this is the real critical issue, and I am going to raise this things in my company that I've been working on.
              Hopefully by doing this thing, everything might come as the way it is, better than before.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
