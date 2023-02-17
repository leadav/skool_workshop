function Articles({ articles }) {

  const Article = (title, body) => (
    <article>
      <h1>{title}</h1>
      <p>{body}</p>
    </article>
  )

  return (
    <>
      <h1>Ma super liste d'articles</h1>
      {
        articles.map(article => (
          <Article title={article.title} body={article.body} key={article.title} />
        ))
      }
    </>
  );
}

export default Articles;
