import { useEffect, useState } from "react";
import "./App.css";
import { ChangeInput, CommonInput } from "./components/input";
import { AddComma } from "./plugins/addComma";
import { CommonButton } from "./components/button";

function App() {
  const [value, setValue] = useState("");
  const [type, setType] = useState("");
  const [btnValue, setBtnValue] = useState(0)
  const [name, setName] = useState("")

  const handleType = (value: string) => {
    if (!isNaN(Number(value))) {
      setType("number");
    } else {
      setType("string");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const str = value.replace(/,/g, "");
    setValue(str);
    if (value.trim() === "") {
      setValue("");
      return;
    }

    handleType(value);
  };

  const handleClick = () => {
    setBtnValue(btnValue + 1);
  }

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if(e.key === "Enter"){
      setName("천재")
    }
  }

  useEffect(() => {
    console.log("변경됨!");
  }, [value]);
  return (
    <>
    <div className="mb-5">
      <p className="font-bold text-xl">컴포넌트</p>
      <div className="flex p-3">
          <p className="mr-2 mt-2">1. 함수 전달:</p>
        <CommonButton value={btnValue} onClick={handleClick} />
      </div>
      <div className="flex p-3">
          <p className="mr-2 mt-2">2. 값 변경:</p>
        <ChangeInput value={name} placeholder="이름을 입력해 주세요." onKeyDown={handleKeyDown} onChange={handleChangeName} />
      </div>
      <div className="flex p-3">
          <p className="mr-2 mt-2">3. 읽기 전용:</p>
      </div>
      <div className="flex p-3">
          <p className="mr-2 mt-2">4. 이벤트 버스:</p>
      </div>
    </div>
    <div className="mb-5">
      <p className="font-bold text-xl">훅</p>
      <div className="flex p-3">
            <p className="mr-2 mt-2">1. useState 값:</p>
      </div>
      <div className="flex p-3">
            <p className="mr-2 mt-2">2. useEffect:</p>
      </div>
    </div>
    <div>
      <p className="font-bold text-xl">플러그인</p>
      <div className="flex p-3">
        <p className="mr-2">1. 콤마:</p>
        <CommonInput
          type="text"
          value={AddComma(value) || ""}
          onChange={(e) => handleChange(e)}
          placeholder="입력해주세요!"
        />
      </div>
      <p>INPUT의 타입: {type}</p>
      <div className="flex p-3">
            <p className="mr-2 mt-2">2. 키, 값 반환:</p>
      </div>
    </div>
    </>
  );
}

export default App;
