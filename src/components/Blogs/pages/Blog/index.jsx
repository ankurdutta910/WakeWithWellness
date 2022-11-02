import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import GoToTop from '../../../../GoToTop'


const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, [id]);

  return (
    <>
<GoToTop />



      {blog ? (

   



        <div className='blog-wrap'>
          
          <section id="blog_header" style={{backgroundImage: `url(${blog.cover})`}} className="d-flex align-items-center justify-content-center" >
    <div className="container" style={{marginBottom: '30px'}}>

      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8">
        <h2>{blog.title}</h2>
          <p><span style={{color: 'grey'}}>Author:</span> {blog.authorName}</p>
        </div>
      </div>

     

    </div>
  </section>



   
          <div class="page-wrapper container my-5">
     <div class="content">
         <div class="row" >
            
         </div>
         <div class="row">
             <div class="col-md-8">
                 <div class="blog-view">
                     <article class="blog blog-single-post">
                        
                         <div class="blog-info clearfix">
                             <div class="post-left">
                                 <ul>
                                     <li><p><i class="fa fa-calendar"></i> <span>{blog.createdAt}</span></p></li>
                                     <li><p><i class="fa fa-user-o"></i> <span>By {blog.authorName}</span></p></li>
                                 </ul>
                             </div>
                            
                         </div>
                         <div class="blog-image">
                            
                         </div>
                         <div class="blog-content" >
                         <p className='blog-desc'>{blog.description}</p>
                         </div>
                     </article>




                    
                 </div>
             </div>
             <aside class="col-md-4">
                 
                 <div class="widget post-widget">
                     <h5>About author</h5>
                     <div class="about-author">
                         <div class="about-author-img">
                             <div class="author-img-wrap">
                                 <img class="img-fluid" alt="authorAvatar" src={blog.authorAvatar}/>
                             </div>
                         </div>
                         <div class="author-details" style={{marginTop: '15px',fontSize: '18px',textAlign: 'center',}}>
                             <span class="blog-author-name" style={{fontWeight:'800'}}>{blog.authorName}</span><hr></hr>
                             <div class="blog-content">
                              <p style={{textAlign: 'justify'}}>{blog.authorDesc}</p>
                             
                             </div>
                             
                         </div>
                     </div>
                 </div>







                 <div class="widget post-widget">
             
   
                 </div>

        



               
              
             </aside>
         </div>
     </div>
  
 </div>
        
        
        
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
