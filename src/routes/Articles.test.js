import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import Home from './Home';

describe('Articles Page', () => {
  it('possède un titre de niveau h1', () => {
    render(<Home />, {wrapper: BrowserRouter});
    const titleElement = screen.getByRole('heading', {level: 1, name: 'Bienvenue dans les bases du dev web'})
    expect(titleElement).toBeInTheDocument();
  })

  it('possède un lien qui redirige vers la page articles', () => {
    render(<Home />, {wrapper: BrowserRouter});
    const linkElement = screen.getByRole('link', {name: 'Lire les articles >'})
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/articles');
  })
});
