import React from 'react'
import './blogItem.css'

const BlogItem = () => {
  return (
    <section className='blogitem-wrapper'>
        <div className='blogitem'>
            <h4>Title</h4>
            <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsum molestiae voluptatem alias eveniet fuga voluptatum cum esse voluptates velit.</article>
        </div>
        <div className='blogitem'>
            <h4>How to Code</h4>
            <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsum molestiae voluptatem alias eveniet fuga voluptatum cum esse voluptates velit.</article>
        </div>
    </section>
  )
}

export default BlogItem