import React, { Component} from 'react';
import PropTypes from 'prop-types'
import Book from './AppComponents/Book'
import BookList from './AppComponents/BookList'
import SearchBook from './AppComponents/SearchBook'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  }
  
  componentDidMount() {
	  BooksAPI.getAll().then((books) => {
		  this.setState({ books })
	  })
	  
  }
  
   updatebookList = (book, newCategory) => {
	   
		BooksAPI.update(book, newCategory).then(() =>
		{
		   book.self = newCategory;
		   BooksAPI.getAll().then((books) => {
			   this.setState({books})
		   })
		})
	    
	   
	   
	   
   }

  render() {
    return (
	
	<div className="app">
	
	 <Route exact path ="/" render={() => (
      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
	    
            <div className="list-books-content">
              <div>
                <BookList bookCategory="Currently Reading" bookList={this.state.books.filter(book => book.shelf === "currentlyReading")} updatebookList={this.updatebookList} />
				<BookList bookCategory="Want to Read" bookList={this.state.books.filter(book => book.shelf === "wantToRead")} updatebookList={this.updatebookList} />
				<BookList bookCategory="Read" bookList={this.state.books.filter(book => book.shelf === "read")} updatebookList={this.updatebookList} />
			  </div>
			</div>
			<div className="open-search">
		        <Link to="/Search">Add a book</Link>
            </div>
	   </div>
	 )}/> 
	 <Route path ='/Search' render={({history}) => (
	     <SearchBook searchbooks={this.state.books} updatesearchbooks={(book,newCategory) => {
			              this.updatebookList(book,newCategory);
						  history.push('/');
	}}/>
	)}/>
	</div>
    )
  }
}

export default BooksApp;
