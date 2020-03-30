import React from 'react'

//functional components => simple and dumb component
// write a function and return some JSX
// you need to pass in props AS a PARAMETER
const Comment = (props) => {
  console.log(props)
  return (<p>{props.commentObj.content} - {props.commentObj.author}</p>)
}
//they are much more succinct

export default Comment



// class Comment extends React.Component {
//   render(){
//     console.log(this.props.commentObj)
//     return (
//       <p className="comment">
//         {this.props.commentObj.content} -
//         {this.props.commentObj.author}
//       </p>
//     )
//   }
// }

// let string = "fjeiasjfioseafjio"

// export {string}
//have  amiz of default exports AND named exports
