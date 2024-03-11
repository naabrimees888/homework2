import raamat1 from './img/raamat1.jpeg';
import raamat2 from './img/raamat2.jpeg';
import raamat3 from './img/raamat3.jpeg';
import './Books.css';
import BooksList from './BooksList';
import Raamat from './Raamat';

const books = [
  {title: 'Kuidas saavutada finantsvabadus', author: 'Kristi Saare', image: raamat1},
  {title: 'Tere, Tähemaa', author: 'Kaja Belials', image: raamat2},
  {title: 'Tere, Arvumaa', author: 'Kaja Belials', image: raamat3},
]

function App() {
  return (

    <div className="container">
      <div className="books-list">
        <BooksList books={books} />
      </div>
      <div className="book-details">
        {books.map((book) => {
          return (
            <Raamat title={book.title} author={book.author} image={book.image} />
          );
        })
        }
      </div>
    </div>
  );
}

export default App;
