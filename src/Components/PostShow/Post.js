import React from 'react'

export default function Post (props) {
  let index = props.posts.findIndex(post => {
    return post.id === props.postID
  })

  return (
    <div><h1>{props.posts[index].title}</h1></div>
  )
}