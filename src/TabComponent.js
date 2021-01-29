import React, { useState } from 'react';

function TabComponent(props) {

  const [currentActive, setCurrentActive] = useState(0);

  let headers = React.Children.map(props.children, (child, i) => 
    <span style={{
      padding: "20px",
      
    }} onClick={() => setCurrentActive(i)}>{child.props.header}</span>
  );

  let currentActiveItem = React.Children.toArray(props.children)[currentActive];
  return (
    <div>
      <div>
        {headers}
      </div>

      <div>
        {currentActiveItem}
      </div>
    </div>
  )
}

export default TabComponent;
