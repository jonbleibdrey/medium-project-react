import React from 'react'
import { useParams } from 'react-router-dom'

const BlogDetail = () => {
    const {id} = useParams()

    return (
        <div className="blog-details">
            <h2>blog details - {id}</h2>
        </div>
    )
}

export default BlogDetail
