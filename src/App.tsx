import { useEffect, useState } from "react";
import "./App.css";
import { ChangeInput, CommonInput, PropsInput } from "./components/input";
import { AddComma } from "./utils/addComma";
import { CommonButton } from "./components/button";
import axios from 'axios';

interface IData {
  [key: string]: string
}

function App() {
  const [value, setValue] = useState("");
  const [type, setType] = useState("");
  const [btnValue, setBtnValue] = useState(0)
  const [name, setName] = useState("")
  const [prop, setProp] = useState("김영현")
  const [hook, setHook] = useState(100)
  const num = 100
  const [effect1, setEffect1] = useState(1)
  const [effect2, setEffect2] = useState(2)
  const [effect3, setEffect3] = useState(3)
  const [data, setData] = useState<IData | null>(null)

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

  const handleProps = () => {
    setProp(prop)
  }

  const handleHook = () => {
    setHook(hook + 100)
  }
  const handleNum = () => {
    num + 100
  }

  const handleEffect1 = () => {
    setEffect1(effect1 + 1)
  }
  const handleEffect2 = () => {
    setEffect2(effect2 + 5)
  }
  const handleEffect3 = () => {
    setEffect3(effect3 + 10)
  }
  useEffect(() => {
    console.log('effect1 바뀜')
  },[effect1])
  useEffect(() => {
    console.log('effect2 바뀜')
  },[])
  useEffect(() => {
    console.log('effect3 바뀜')
  })

  const fetchData = async() => {
    try{
      const res = await axios.get('assets/tutoring.json')
      setData(res.data)
    }
    catch(e){
      console.error(e)
    }
  }

  const getData = (key: string): string => {
    return data?.[key] || '없는 key입니다.'
  }

  useEffect(() => {
    fetchData()
  },[]);
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
          <PropsInput value={prop} onChange={handleProps}/>
      </div>
      <div className="flex p-3">
          <p className="mr-2 mt-2">4. 이벤트 버스:</p>
      </div>
    </div>
    <div className="mb-5">
      <p className="font-bold text-xl">훅</p>
      <div className="flex p-3">
            <p className="mr-2 mt-2">1-1. useState 사용:</p>
            <button onClick={handleHook}>{hook}</button>
      </div>
      <div className="flex p-3">
            <p className="mr-2 mt-2">1-2. 일반 변수 사용:</p>
            <button onClick={handleNum}>{num}</button>
      </div>
      <div className="flex p-3">
            <p className="mr-2 mt-2">2-1. [effect1] effect1값 변경될 때만 실행:</p>
            <button onClick={handleEffect1}>{effect1}</button>
      </div>
      <div className="flex p-3">
            <p className="mr-2 mt-2">2-2. [] 한번만실행:</p>
            <button onClick={handleEffect2}>{effect2}</button>
      </div>
      <div className="flex p-3">
            <p className="mr-2 mt-2">2-2. 계속 실행:</p>
            <button onClick={handleEffect3}>{effect3}</button>
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
            <div className="ml-2 mt-1">
              <div className="flex">
                <p>apple: </p>
                <p>{getData('apple')}</p>
              </div>
              <div className="flex">
                <p>banana: </p>
                <p>{getData('banana')}</p>
              </div>
              <div className="flex">
                <p>carrot: </p>
                <p>{getData('carrot')}</p>
              </div>
            </div>
      </div>
    </div>
    </>
  );
}

export default App;
