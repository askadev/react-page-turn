import React from 'react'
import ReactDOM from 'react-dom'
import PageTurn from '../src/index'

const pageStyle = {

};

const pageTitleStyle = {

};

const Page = ({title}) => (
  <div style={pageStyle}>
    <h1 style={pageTitleStyle}>{title}</h1>
  </div>
);

const App = () => (
  <PageTurn>
    <Page title="Cover" />
    <Page title="Cover" />
    <Page title="Cover" />
    <Page title="Cover" />
  </PageTurn>
);

ReactDOM.render(<App />, document.getElementById('app'));
