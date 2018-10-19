import React, { Component} from 'react';
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

                                    

class Book extends Component {
	 static propTypes = {
		   book: PropTypes.object.isRequired,
		   updateCategory: PropTypes.func.isRequired
 
	 }
	
	
       
	  render(){
		  const { book, updateCategory } = this.props;
		  return (
		  
		         <li>
		          <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url(" + `${book.imageLinks.thumbnail}` + ")" }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={(event) => updateCategory(book, event.target.value)} value={book.shelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
	                      <div className="book-authors">{book.authors !== undefined && book.authors.map(author=>author).join('&')}</div>
                        </div>
		  
		           </li>
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
	
	
	
	
	
	
	
	
	
	
	
	
	
	  )
	
    }	
	
	
}

export default Book;
