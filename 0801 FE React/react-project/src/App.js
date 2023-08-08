import './App.css';

import { useState } from "react";

function App() {

  const [title, setTitle] = useState([
    "8월 일상 모음",
    "YBIGTA 교육세션 끝",
    "YBIGTA 신입기수 프로젝트",
  ]);
  const [good, setGood] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [changeTitleIndex, setChangeTitleIndex] = useState(0);

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <div className="antiquewhite-nav">
        <div>
          <h4 style={{ color: "brown", fontSize: "16px" }}>Blog</h4>
        </div>
        <div className="submit">
          <input
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              let titleCopy = [...title];
              titleCopy.unshift(inputValue);
              setTitle(titleCopy);
              const goodCopy = [...good];
              goodCopy.unshift(0);
              setGood(goodCopy);
            }}
          >
            글 발행
          </button>
        </div>
      </div>
      {title.map(function (a, i) {
        return (
          <div className="list">
            <h4
              onClick={() => {
                if (!modal || changeTitleIndex === i)
                  setModal(!modal);
                setChangeTitleIndex(i);
              }}
              style={{
                color: (modal && changeTitleIndex === i) ? "burlywood" : "black"
              }}
            >
              {title[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...good];
                  copy[i] = copy[i] + 1;
                  setGood(copy);
                }}
              >
                {" "}
                👍{" "}
              </span>
              {good[i]}
            </h4>
          </div>
        );
      })}
      {
        modal ? (
          <Modal
            title={title}
            changeTitleIndex={changeTitleIndex}
            setTitle={setTitle}
          ></Modal>
        ) : null
      }
    </div >
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.changeTitleIndex]}</h4>
      <input
        value={props.title[props.changeTitleIndex]}
        onChange={(e) => {
          props.title[props.changeTitleIndex] = e.target.value;
          props.setTitle([...props.title]);
        }}
      ></input>
    </div >
  );
}

export default App;