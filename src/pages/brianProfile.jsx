import React from 'react'
import "./profile.css"

import Blog from "../components/NewBlog"


 
export default function Profile(){
    const resultDiv = document.getElementById("blog-post")
    
    const [blog, setBlog] = React.useState(
        JSON.parse(localStorage.getItem("blog")) || []
        );
    

    /* const [currentBlogId, setCurrentBlogId] = React.useState(
        (blog[0] && blog[0].id) || ""
    ) */
    React.useEffect(() => {
        //window.addEventListener('load', newBlog())
        localStorage.setItem("blog", JSON.stringify(blog))
        

    }, [blog])

    function newBlog() {
        return ({
            id: "",
            content: "",
            author: "",
            coverImg: "",
            time: "",
            tags: []
        })
      
    }
    /* setBlog(prevBlog => [blogItem, ...prevBlog])
      setCurrentBlogId(blogItem.id)  */
    //const [blogContent, setBlogContent] = React.useState(JSON.parse(localStorage.getItem("blogData")) || {newBlog})

    

    
    

    function changeContent(event) {
        const { value } = event.target
        setBlog(prevBlog => prevBlog.map(blogItem => {
            return {...blogItem, content: value}
        }))

        //console.log(value)
        
        
        
    }

    function findBlog() {
        return blog.find(note => {
            return note
        }) 
    }


    function post() {
        const postedBlog = blog.map(prevBlog => prevBlog);
      
        const blogContent = postedBlog[0].content
        
        resultDiv.textContent = blogContent
        
        
      }


    
     

    return (
        <div>
            <Blog 
                createBlog={newBlog}
                changeContent={changeContent}
                currentBlog={findBlog()}
                post={post}
            />
        </div>
    )
}