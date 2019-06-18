import React, { useState, useRef, useLayoutEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import useHighlighter from "./use-highlighter";
import HighlightElement from "./highlight-element";
import Annotations from "./annotations";
function App() {
  const containerElement = useRef(null);

  const { position } = useHighlighter(containerElement);
  const [highlights, setHighlights] = useState([]);
  const [contentPositions, setContentPositions] = useState({
    offsetLeft: 0,
    offsetTop: 0,
    scrollLeft: 0,
    scrollTop: 0
  });
  const onWindowScroll = () => {
    let boundingRect = containerElement.current.getBoundingClientRect();
    setContentPositions(previousPosition => ({
      ...previousPosition,
      offsetTop: boundingRect.top,
      offsetLeft: boundingRect.left
    }));
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", onWindowScroll);
    setContentPositions(previousPosition => ({
      ...previousPosition,
      offsetLeft: containerElement.current.offsetLeft,
      offsetTop: containerElement.current.offsetTop
    }));
  }, []);

  const addHighlights = highlight => {
    setHighlights(prevHighlights => [...prevHighlights, highlight]);
  };

  const onScroll = () => {
    setContentPositions(previousPosition => ({
      ...previousPosition,
      scrollTop: containerElement.current.scrollTop,
      scrollLeft: containerElement.current.scrollLeft
    }));
  };

  return (
    <div ref={containerElement} className="App" onScroll={onScroll}>
      <div style={{ width: "1200px" }}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <p>
          The recommendation is to hoist functions that don’t need props or
          state outside of your component, and pull the ones that are used only
          by an effect inside of that effect. If after that your effect still
          ends up using functions in the render scope (including function from
          props), wrap them into useCallback where they’re defined, and repeat
          the process. Why does it matter? Functions can “see” values from props
          and state — so they participate in the data flow. There’s a more
          detailed answer in our FAQ. Question: Why do I sometimes get an
          infinite refetching loop? This can happen if you’re doing data
          fetching in an effect without the second dependencies argument.
          Without it, effects run after every render — and setting the state
          will trigger the effects again. An infinite loop may also happen if
          you specify a value that always changes in the dependency array. You
          can tell which one by removing them one by one. However, removing a
          dependency you use (or blindly specifying []) is usually the wrong
          fix. Instead, fix the problem at its source. For example, functions
          can cause this problem, and putting them inside effects, hoisting them
          out, or wrapping them with useCallback helps. To avoid recreating
          objects, useMemo can serve a similar purpose. hy do I sometimes get an
          old state or prop value inside my effect? Effects always “see” props
          and state from the render they were defined in. That helps prevent
          bugs but in some cases can be annoying. For those cases, you can
          explicitly maintain some value in a mutable ref (the linked article
          explains it at the end). If you think you’re seeing some props or
          state from an old render but don’t expect it, you probably missed some
          dependencies. Try using the lint rule to train yourself to see them. A
          few days, and it’ll be like a second nature to you. See also this
          answer in our FAQ. I hope this TLDR was helpful! Otherwise, let’s go.
          Each Render Has Its Own Props and State Before we can talk about
          effects, we need to talk about rendering. Here’s a counter. Look at
          the highlighted line closely:
        </p>
        <p>
          The recommendation is to hoist functions that don’t need props or
          state outside of your component, and pull the ones that are used only
          by an effect inside of that effect. If after that your effect still
          ends up using functions in the render scope (including function from
          props), wrap them into useCallback where they’re defined, and repeat
          the process. Why does it matter? Functions can “see” values from props
          and state — so they participate in the data flow. There’s a more
          detailed answer in our FAQ. Question: Why do I sometimes get an
          infinite refetching loop? This can happen if you’re doing data
          fetching in an effect without the second dependencies argument.
          Without it, effects run after every render — and setting the state
          will trigger the effects again. An infinite loop may also happen if
          you specify a value that always changes in the dependency array. You
          can tell which one by removing them one by one. However, removing a
          dependency you use (or blindly specifying []) is usually the wrong
          fix. Instead, fix the problem at its source. For example, functions
          can cause this problem, and putting them inside effects, hoisting them
          out, or wrapping them with useCallback helps. To avoid recreating
          objects, useMemo can serve a similar purpose. hy do I sometimes get an
          old state or prop value inside my effect? Effects always “see” props
          and state from the render they were defined in. That helps prevent
          bugs but in some cases can be annoying. For those cases, you can
          explicitly maintain some value in a mutable ref (the linked article
          explains it at the end). If you think you’re seeing some props or
          state from an old render but don’t expect it, you probably missed some
          dependencies. Try using the lint rule to train yourself to see them. A
          few days, and it’ll be like a second nature to you. See also this
          answer in our FAQ. I hope this TLDR was helpful! Otherwise, let’s go.
          Each Render Has Its Own Props and State Before we can talk about
          effects, we need to talk about rendering. Here’s a counter. Look at
          the highlighted line closely:
        </p>
        <p>
          The recommendation is to hoist functions that don’t need props or
          state outside of your component, and pull the ones that are used only
          by an effect inside of that effect. If after that your effect still
          ends up using functions in the render scope (including function from
          props), wrap them into useCallback where they’re defined, and repeat
          the process. Why does it matter? Functions can “see” values from props
          and state — so they participate in the data flow. There’s a more
          detailed answer in our FAQ. Question: Why do I sometimes get an
          infinite refetching loop? This can happen if you’re doing data
          fetching in an effect without the second dependencies argument.
          Without it, effects run after every render — and setting the state
          will trigger the effects again. An infinite loop may also happen if
          you specify a value that always changes in the dependency array. You
          can tell which one by removing them one by one. However, removing a
          dependency you use (or blindly specifying []) is usually the wrong
          fix. Instead, fix the problem at its source. For example, functions
          can cause this problem, and putting them inside effects, hoisting them
          out, or wrapping them with useCallback helps. To avoid recreating
          objects, useMemo can serve a similar purpose. hy do I sometimes get an
          old state or prop value inside my effect? Effects always “see” props
          and state from the render they were defined in. That helps prevent
          bugs but in some cases can be annoying. For those cases, you can
          explicitly maintain some value in a mutable ref (the linked article
          explains it at the end). If you think you’re seeing some props or
          state from an old render but don’t expect it, you probably missed some
          dependencies. Try using the lint rule to train yourself to see them. A
          few days, and it’ll be like a second nature to you. See also this
          answer in our FAQ. I hope this TLDR was helpful! Otherwise, let’s go.
          Each Render Has Its Own Props and State Before we can talk about
          effects, we need to talk about rendering. Here’s a counter. Look at
          the highlighted line closely:
        </p>
      </div>
      <Annotations
        highlights={highlights}
        contentPositions={contentPositions}
      />
      {position && (
        <HighlightElement
          position={position}
          addHighlight={addHighlights}
          contentPositions={contentPositions}
        />
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
