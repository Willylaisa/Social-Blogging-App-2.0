import React from 'react'
import "./blog.css"
import BlogPost from './BlogPost';
import  { useState, useEffect } from 'react';



export default function Blog() {
    const [blogPosts, setBlogPosts] = React.useState( [
        { id: 1, title: 'Post 1', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

        ,image: "data:image/jpeg;base64,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"
        ,  likes: 0, comments: [] },



        { id: 2, title: 'Post 2', content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?", 

        image: 'https://cdn.pixabay.com/photo/2023/05/24/21/26/car-8015901_1280.jpg', likes: 0, comments: [] },
        { id: 3, title: 'Post 3', content: '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."', 
        image: 'https://c1.wallpaperflare.com/preview/960/458/420/automotive-cool-red-sports-car.jpg', likes: 0, comments: [] },
      ]);

      const [search, setSearch]= React.useState('')
      const [searchResults, setSearchResults] = React.useState([])
      React.useEffect(
          () => {
            const filteredResults = blogPosts.filter((post) => post.content.toLowerCase().includes(search.toLowerCase())
            || post.title.toLowerCase().includes(search.toLowerCase()));
        
  
              setSearchResults(filteredResults.reverse())
          },[blogPosts, search])
      
        const handleLike = (postId) => {
          setBlogPosts((prevPosts) =>
            prevPosts.map((post) => {
              if (post.id === postId) {
                return { ...post, likes: post.likes + 1 };
              }
              return post;
            })
          );
        };
      
        const handleAddComment = (postId, comment) => {
          setBlogPosts((prevPosts) =>
            prevPosts.map((post) => {
              if (post.id === postId) {
                return { ...post, comments: [...post.comments, comment] };
              }
              return post;
            })
          );
        };
      
    return (
        <div className='Blog--Container'>
            <div className='searchBar'>
            <form className='searchForm' 
                  onSubmit={function(event){
                     event.preventDefault()
                   }}>
                   <input
                   className='searchInput'
                   id='search'
                   type="text"
                   placeholder='Search for'
                   onChange={function(event){
                    setSearch(event.target.value)
                   }}
                   />
                   <button className='searchbutton'><i className='fa fa-search'></i></button>
           </form>
           </div>

        <h1>Welcome to My Blogging Website</h1>
        <div className="blog-posts">
          {searchResults.map((post) => (
            <BlogPost
              key={post.id}
              post={post}
              onLike={handleLike}
              onAddComment={handleAddComment}
            />
          ))}
        </div>
      </div>
    )
}