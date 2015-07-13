import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Other stuff components should probably have</h1>

        <ul>
          <li>Use <code>immutablejs</code> for prop values instead of mutable types <code>Object</code> and <code>Array</code>.</li>
          <li>Implement <code>shouldComponentUpdate</code> to make things faster.</li>
          <li>Use <code>react-a11y</code> to help detect accesibility problems.</li>
          <li>Use <code>react-intl</code> for internationalizing components.</li>
          <li>Documentation to describe available <code>PropTypes</code> and usage.</li>
        </ul>
      </div>
    );
  }
});