import { render, screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import Articles from './Articles'

describe('Articles Page', () => {
  it('possède un titre de niveau h1', () => {
    render(<Articles articles={[]} />, { wrapper: BrowserRouter });
    const titleElement = screen.getByRole('heading', { level: 1, name: "Ma super liste d'articles" })
    expect(titleElement).toBeInTheDocument();
  })

  it('affiche les articles', () => {
    // GIVEN
    const articlesAAfficher = [
      {
        title: 'Titre article 1',
        body: 'Body article 1 tu coco'
      },
      {
        title: 'Titre article 2',
        body: 'Body article 2 tu coco'
      },
      {
        title: 'Titre article 3',
        body: 'Body article 3 tu coco'
      },
    ]

    // WHEN
    render(<Articles articles={articlesAAfficher} />, { wrapper: BrowserRouter });


    // THEN
    const articles = screen.getAllByRole('article')
    expect(articles.length).toStrictEqual(2)

    articlesAAfficher.forEach((article, index) => {
      const titreDeLArticle = within(articles[index]).getByRole('heading', { name: article.title })
      const contenuDeLArticle = within(articles[index]).getByText(article.body, { selector: 'p' })
      expect(titreDeLArticle).toBeInTheDocument()
      expect(contenuDeLArticle).toBeInTheDocument()
    })

  })
});
