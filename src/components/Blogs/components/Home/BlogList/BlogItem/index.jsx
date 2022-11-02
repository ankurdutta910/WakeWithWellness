import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './styles.css';

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (

    <div class="blogItem-wrap row">

    <div class="col-lg-12">
      <div class="blog grid-blog">
      <div className="blog-title" style={{background: 'linear-gradient(95.24deg, #3F767D 0%, #4D8A9F 137.16%)',borderRadius: '8px'}}>
          
            <h3><Link style={{color: 'white'}} to={`/blog/${id}`}>{title}</Link></h3>
        
            </div>

          <div class="blog-image" style={{marginTop: '-28px'}}>
              <img class="img-fluid" src={cover} alt=""/>
              <Chip label={category} />
          </div>
          <div class="blog-content" style={{marginTop: '-12px'}}>
           
             <p class="blogItem-desc" style={{textAlign: 'justify'}}>{description} </p>
              <Link style={{marginTop: '10px'}} to={`/blog/${id}`} class="read-more"><i class="fa fa-long-arrow-right"></i> Read More</Link>
              <div class="blog-info clearfix">
                  <div class="post-left">
                  <div className='blogItem-author'>
                    <img src={authorAvatar} alt='avatar' />
                    <p style={{fontStyle: 'italic', color: '#5793D1'}}>{authorName}</p>
              </div>
                  </div>
                  <div class="post-right"> 
                  <ul>
                          <li><Link to={`/blogs`}><i class="fa fa-calendar"></i> <span>{createdAt}</span></Link></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>

    
    </div>
  );
};

export default BlogItem;
