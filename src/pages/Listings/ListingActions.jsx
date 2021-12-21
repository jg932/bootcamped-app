import React from 'react'
import '../../styles/Card.css'

const PostActions = (props) => {
  console.log(props)
  return (
    <div className="interactions">
      <button
        onClick={() => props.handleDeletePost(props.post._id)}
      >Delete</button>
    </div>
  )
}

export default PostActions