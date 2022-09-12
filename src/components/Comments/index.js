import {Component} from 'react'

import './index.css'

import CommentItem from '../CommentItem/index'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code he
class Comments extends Component {
  state = {
    username: '',
    usercomment: '',
    comments: [],
  }

  addComment = e => {
    e.preventDefault()
    const {username, usercomment, comments} = this.state
    this.setState({
      comments: [
        ...comments,
        {name: username, comment: usercomment, liked: false},
      ],
    })
    this.setState({usercomment: ''})
    this.setState({username: ''})
  }

  deleteComment = commentId => {
    const {comments} = this.state
    const dummyComments = comments.filter(eachComment => {
      if (eachComment.comment !== commentId) {
        return true
      }
      return false
    })
    this.setState({comments: dummyComments})
  }

  likeComment = commentId => {
    const {comments} = this.state
    const dummyComments = comments.map(eachItem => {
      if (eachItem.comment === commentId) {
        return {...eachItem, liked: !eachItem.liked}
      }
      return eachItem
    })
    this.setState({comments: dummyComments})
  }

  render() {
    const {username, usercomment, comments} = this.state
    console.log(username, usercomment, comments)
    return (
      <div className="app-container">
        <div className="container">
          <div className="input-container">
            <h1>Comments</h1>
            <p>Say Something About 4.0 Technologies</p>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                value={username}
                onChange={e => this.setState({username: e.target.value})}
              />
              <textarea
                rows="5"
                cols="10"
                placeholder="Your Comment"
                value={usercomment}
                onChange={e => this.setState({usercomment: e.target.value})}
              />
              <button onClick={this.addComment}>Add Comment</button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <div className="Comments">
          <div className="CommentsCounter">
            <div className="Counter light-blue">{comments.length}</div>
            <span> Comments</span>
          </div>
          <ul>
            {comments.map(comment => (
              <CommentItem
                c={comment}
                deleteComment={this.deleteComment}
                likeComment={this.likeComment}
                key={comment.comment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
