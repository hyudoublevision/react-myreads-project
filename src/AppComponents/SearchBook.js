import React, { Component} from 'react';
import { Link } from 'react-router-dom'
import { Route} from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'
import BookList from './BookList'
import * as BooksAPI from '../BooksAPI'



class SearchBook extends Component {
      static propTypes = {
		  searchbooks: PropTypes.array.isRequired,
		  updatesearchbooks: PropTypes.func.isRequired,
		  
	  }
	  
	  state = {
	     query: "",
		 searchbooks:[],
		 showerrorPage:false
		 }
	    
	  searchBooks = (query) => {
		  this.setState({ query: query})
		  this.searchListBooks(query);
		  
	  }
	  
	  searchListBooks = (query) => {
		  let filterArr = [];
		  this.setState({searchbooks:[]});
		  if(query.length != 0)
		  {
			 let queryArr = query.split(" ");
			 
			 queryArr.forEach(oneQuery => 
			 {
			     oneQuery = oneQuery.trim();
				 
				 if(oneQuery.length !==0 && oneQuery.indexOf(" ") !==0)
				 {
					  
				      BooksAPI.search(oneQuery).then(books =>
				     {
						   if(books.length === 0 || books.error)
						   {
							   this.setState({showerrorPage: true})
						   }
					       if(!books.error)
						   {
							   filterArr = books.map(book => {
								   book.shelf = 'none';
								   this.props.searchbooks.forEach(searchbook =>
								   {
									    if(book.id == searchbook.id)
									    {
											book.shelf = searchbook.shelf;
										}
									   
								   })
								 if(book.imageLinks === undefined)
								 {
									 
									 book.imageLinks = {thumbnail: 'https://historyexplorer.si.edu/sites/default/files/book-158.jpg'};
								 } 
								return book;   
								   
							   })
						   }
						   
						   this.setState({searchbooks: filterArr});
				     })
				 } 
				
				 
				
			 })
		  }
		  
		  
		  
	  }
	           
		render() {
		      return (
		          <div className="search-books"> 
                     <div className="search-books-bar">
                        <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                       <div className="search-books-input-wrapper">
		                     <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.searchBooks(event.target.value)}/>
		                </div>
                     </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
						{
							this.state.searchbooks.map(book => (
								<Book key={book.id} book={book} updateCategory={this.props.updatesearchbooks} />
							))
								
							
						}
						</ol>
						{this.state.showerrorPage && (
						    <div className="showerrorpage">
							     Searched book title/author is not in the database. Please try a different book title/author.
							
							</div>
						
						)}
						    
                     </div>
                  </div>



          )
     }

}




export default SearchBook