import * as React from "react";
import { useState } from "react";

// Import scss file so that compiler adds it.
// This is instead of injecting it using EditorView.baseTheme
// This allow syou to write scss in an external file and have it refresh during dev better.
import './styles.scss';


export const App = () => {
  const [title, setTitle] = useState('React Based Block Widget');

  return <>
    <div
      className = 'block-widget external-styling'  // Incorporate classnames module
      >
      
      <h2>
        {title}
      </h2>

      <p>
        This is a react based block widget placed in a static position at the top of hte document.
      </p>

      <button
        onClick = {() => setTitle('Changed Title')}
        >
        Change Title
      </button>

    </div>
  </>;
};

