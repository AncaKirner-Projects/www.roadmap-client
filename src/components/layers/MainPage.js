import React from 'react';
import CardList from '../CardList';

class MainPage extends React.Component {
  render() {
    return (
      <main className={this.props.classes.content}>
        <div className={this.props.classes.toolbar} />
        <CardList products={this.props.products} />
      </main>
    );
  }
}

export default MainPage;