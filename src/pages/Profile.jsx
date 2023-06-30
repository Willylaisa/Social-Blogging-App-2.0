import React from "react"
import Details from "../components/Details"
import Header from "../components/Header"
import Blog from "../components/NewBlog"

export default function Profile() {

    const resultDiv = document.getElementById("blog-post")
    const [blog, setBlog] = React.useState(
        JSON.parse(localStorage.getItem("blog")) || []
        )
    React.useEffect(() => {
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
    function changeContent(event) {
        const { value } = event.target
        setBlog(prevBlog => prevBlog.map(blogItem => {
            return {...blogItem, content: value}
        }))
    }
    function findBlog() {
        return blog.find(note => {
            return note
        }) 
    }
    function post() {
        const postedBlog = blog.map(prevBlog => prevBlog)
        const blogContent = postedBlog[0].content
        resultDiv.textContent = blogContent
      }
    // STATES
    const [profile, setProfile] = React.useState(
        JSON.parse(localStorage.getItem("profile")) ||
        {profileName: "", description: ""}
    )  
    const [editing, setEditing] = React.useState(false);

    // STORING TO LOCAL STORAGE
    React.useEffect(function() {
        localStorage.setItem("profile", JSON.stringify(profile))
    }, [profile])
    
    
    // FUNCTIONS TO HANDLE EVENTS
    function handleChange(event) {              
        return (
            setProfile(prevProfile => {
                return {
                    ...prevProfile,
                    [event.target.name]: event.target.value
                }
            })
        )
    }           
            
    
    // CLICK FUNCTION
    function editProfile() {
        setEditing(prevEditing => !prevEditing)
    }
        
        

        return (
            <div className="profile--page">
                <Header />
                <Details 
                nameInput = {
                    editing ? (
                        <h2 className="profile-name">{profile.profileName}</h2>
                    ) : (
                        <input 
                            className="profile--name"
                            name="profileName" 
                            type="text" 
                            placeholder="Your Name" 
                            value={profile.profileName} 
                            onChange={handleChange}
                        ></input>
                    )
                }
                descriptionInput = {
                    editing ? (
                        <p className="profile--paragraph">{profile.description}</p>
                    ) : (
                        <input
                            className="profile--description" 
                            name="description"
                            type="text" 
                            placeholder="Write your bio" 
                            value={profile.description} 
                            onChange={handleChange}
                        ></input>
                    )
                }
                handleClick={editProfile}
                />
                <Blog 
                    createBlog={newBlog}
                    changeContent={changeContent}
                    currentBlog={findBlog}
                    post={post}
                />
            </div>
    )
    }
