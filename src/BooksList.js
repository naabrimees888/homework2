function BooksList ({books}) {
  const bookNames = books.map((book) => {
    return (
      <li>{book.title}</li>
    );
  })

  return (
    <div>
      <h2>Apollo top 3 Eesti raamatud</h2>
      <ul>{bookNames}</ul>
    </div>
  );
}

export default BooksList;
