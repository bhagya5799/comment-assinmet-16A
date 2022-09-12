import React from 'react'
import './index.css'

const index = ({c, deleteComment, likeComment}) => (
  <li className="comment">
    <div className="name">
      <h3>{c.name.charAt(0)}</h3>
      <h4>{c.name}</h4>
    </div>
    <p>{c.comment}</p>
    <div className="likeDelete">
      <button className="like" onClick={() => likeComment(c.comment)}>
        <img
          alt="like"
          src={
            c.liked
              ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
          }
        />
        {c.liked ? 'Liked!' : 'Like'}
      </button>
      <button
        className="delete"
        onClick={() => deleteComment(c.comment)}
        testid="delete"
      >
        <img
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
        />
      </button>
    </div>
  </li>
)

export default index
