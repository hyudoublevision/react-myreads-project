import React, { Component} from 'react';
import { Link } from 'react-router-dom'
import { Route} from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'


class BookList extends Component {
       static propTypes = {
		     bookCategory: PropTypes.string.isRequired,
			 bookList: PropTypes.array.isRequired,
			 updatebookList: PropTypes.func.isRequired
		   
	   }

       render(){
		   const {bookCategory, bookList, updatebookList} = this.props;
		   return (
		         <div className="bookshelf">
                  <h2 className="bookshelf-title">{bookCategory}</h2>
                      <div className="bookshelf-books">
                             <ol className="books-grid">     
							 {bookList.map((book) => (
							      <Book key={book.id} book={book} updateCategory = {updatebookList} />              
								  
							 ))}
					         </ol>
                      </div>
				 </div>
                 				  
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   )
		   
		   
	 }




	 
	 
	 
	 
	 
	 
	 
	 
	 
}





























export default BookList;