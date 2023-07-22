import React, { useState } from "react";
import styles from "./Editor.css";

const Editor = (props) => {
  const sections = props.sections;
  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );

  return (
    <section id="editor">
      <div className="container">
        <div className="header">
          {Object.keys(sections)?.map((key) => (
            <div
              className={` section ${
                activeSectionKey === key ? styles.active : ""
              }`}
              key={key}
              onClick={() => setActiveSectionKey(key)}
            >
              {sections[key]}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Editor;
