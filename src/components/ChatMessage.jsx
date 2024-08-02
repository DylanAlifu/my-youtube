import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center gap-4 p-2'>
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="profile-icon"
          className="h-10"
        />
        <span className='font-bold'>{name}</span>
        <p>{message}</p>
    </div>
  )
}

export default ChatMessage