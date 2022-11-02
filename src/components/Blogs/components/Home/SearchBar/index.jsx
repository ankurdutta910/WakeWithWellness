import React from 'react';
import './styles.css';

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  

  <div className='searchBar-wrap container' >
    <form onSubmit={formSubmit}>
    <select   onChange={handleSearchKey}
                          value={value}  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" required>
                         
                          <option className="dropdown-item bg-light" style={{color: 'grey', fontWeight: '400'}} readonly>--Category--</option>
                          <option className="dropdown-item bg-light" style={{color: 'black', fontWeight: '400'}} value="Story">Story</option>
                          <option className="dropdown-item bg-light" style={{color: 'black', fontWeight: '400'}} value="Poem">Poem</option>
                          <option className="dropdown-item bg-light" style={{color: 'black', fontWeight: '400'}} value="Blog">Blogs</option>
                          <option className="dropdown-item bg-light" style={{color: 'black', fontWeight: '400'}} value="Meraki">Meraki</option>
      
                        </select>
     
      {value && <span style={{padding: '8px', marginTop: '-6px', fontWeight: '500', color: 'red', fontSize:'30px',}} onClick={clearSearch}> <i class="fa fa-times-circle-o" aria-hidden="true"></i></span>}
      <button className="btn btn-dark"style={{marginLeft: '10px', height: '48px', marginTop: '-10px'}}><i class="fa fa-search" aria-hidden="true"></i> Search</button>
    </form>
  </div>
);

export default SearchBar;
