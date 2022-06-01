import React from 'react';
import { render } from 'react-dom';
import PrivacyPolicy from './privacy-policy.mdx';
import './styles.css'
import Container from './Container';

const App = () => {
  return (
    <Container>
      <main>
        <PrivacyPolicy />
      </main>
    </Container>
  );
}

render(<App />, document.getElementById('app'));