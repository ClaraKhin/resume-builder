import React from "react";
import "./Body.css";
import { Button, ButtonGroup } from "react-bootstrap";
import { ArrowDown } from "react-feather";
import Editor from "../Editor/Editor";
const Body = () => {
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  return (
    <section id="body">
      <div className="container">
        <p className="heading">Resume Builder</p>
        <div className="toolbar">
          <ButtonGroup className="toolbar-btns">
            <Button className="toolbar-btn"></Button>
            <Button className="toolbar-btn"></Button>
            <Button className="toolbar-btn"></Button>
            <Button className="toolbar-btn"></Button>
            <Button className="toolbar-btn"></Button>
          </ButtonGroup>
          <button>
            Download
            <ArrowDown />{" "}
          </button>
        </div>
        <div className="main">
          <Editor sections={sections} />
        </div>
      </div>
    </section>
  );
};

export default Body;
