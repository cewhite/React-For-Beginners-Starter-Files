import React from 'react';

class StorePicker extends React.Component {
  render( ) {
    return (//do not place jsx comments here//
      <form className="store-selector">
    {/*comment in jsx */}
      <h2>Please Enter A Store</h2>
      <input type="text" required placeholder="Store Name" />
      <button type="submit">Visit Store </button>
      </form>
       )
  }
}

export default StorePicker;
