import React from 'react'
import Comment from './Comment'

const commentsData = [
  {id: 1, content:"hello", author:"Ann"}, //comment
  {id: 2, content:"at least it's friday", author:"Paul"}, //comment
  {id: 3, content:"hi", author:"Jenny"}, //comment
  {id: 4, content:"hey", author:"Joseph"},
  {id: 5, content: "pew pew", author: "Chine"}
]

// [commentObjs] => [Comment JSX]
//created an array of Comment JSX
class CommentBox extends React.Component {
  render(){
    return (
      <div className="comment-box">
        {commentsData.map(comment => <Comment commentObj={comment} key={comment.id}/>)}
      </div>
    )
  }
}

//export
export default CommentBox
//{NamedExport, NamedExport2, etc.}
