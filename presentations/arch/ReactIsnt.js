import React from 'react';
import ListBlock from 'components/ListBlock';

const listItems = [
  'A javascript framework',
  'Doesnt come with the \'MC\' in MVC',
  'It means learning (an afternoon? for Laura and Levente)',
  'Segmentation (how do we get to core?)'
];

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <ListBlock title="What React is not" items={ listItems }/>
      </div>
    );
  }
}
