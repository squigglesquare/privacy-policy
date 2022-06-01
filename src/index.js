import React from 'react';
import { createRoot } from 'react-dom/client';
import Container from './components/Container';
import PrivacyPolicy from './privacy-policy.mdx';
import './styles/styles.css'

const App = () => {
  return (
    <Container>
      <PrivacyPolicy />
    </Container>
  );
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);