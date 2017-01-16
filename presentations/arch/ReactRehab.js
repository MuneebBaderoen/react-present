import React from 'react';
import ListBlock from 'components/ListBlock';

const listItems = [
  'React takes ownership of DOM nodes',
  'Everything is a Component',
  'Facebook developers behind us',
  'Small API surface area',
  'Improved Testability'
];

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <ListBlock title="Only if you want to" items={ listItems }/>
        <a href="https://formidable.com/blog/2015/12/04/using-react-is-a-business-decision-not-a-technology-choice/">React is a business decision</a>
      </div>
    );
  }
}
