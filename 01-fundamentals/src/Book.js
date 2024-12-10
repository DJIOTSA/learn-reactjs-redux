const Book = ({ img, title, author, children, getBook, id, key }) => {
  const getSingleBook = () =>{
    getBook(id);
  }
  return (
    <article className="book">
      <img src={img} alt={title}></img>
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={getSingleBook}>Get book</button>
      {children}
      <span className="index">{id}</span>
    </article>
  );
};

export default Book;
