import React, { useState } from 'react';
import './AddSection.css';

function AddSection() {
  const [myLibrary, setMyLibrary] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');
  const [isRead, setIsRead] = useState(false);

  const addBook = () => {
    const newBook = {
      title: title,
      author: author,
      pages: pages,
      read: isRead ? 'Read' : 'Not Read'
    };
    setMyLibrary([...myLibrary, newBook]);
    setTitle('');
    setAuthor('');
    setPages('');
    setIsRead(false);
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)} className='book-btn'>+</button>
      {showModal && (
        <div className='modal-content'>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type="number"
            placeholder="Pages"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
          />
          <label>
            <input
              type="checkbox"
              checked={isRead}
              onChange={(e) => setIsRead(e.target.checked)}
            />
            Already Read!
          </label>
          <button onClick={addBook}>Add</button>
          <button onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      )}
      <div className='card-container'>
        {myLibrary.map((book, index) => (
          <div className="card" key={index}>
            <ul>
              <li className="title">Title: {book.title}</li>
              <li className="author">Author: {book.author}</li>
              <li className="pages">Pages: {book.pages}</li>
              <li className="read">
                <button className={book.read === 'Read' ? 'readBtn read-active' : 'readBtn not-read-active'}>
                  {book.read}
                </button>
              </li>
              <li className="delete">
                <button className="delBtn" onClick={() => setMyLibrary(myLibrary.filter((_, i) => i !== index))}>
                  Delete
                </button>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddSection;
