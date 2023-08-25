const themes = ["theme1", "theme2", "theme3"];
import React, { useState } from "react";
function App() {

  const [theme, setTheme] = useState("theme1");
  return (
    <div className={`theme-${theme} w-screen h-screen bg-background`}>
      <div className="container mx-auto bg-gray-200 hover:bg-green-50 rounded-xl shadow border p-8 ml-2 mr-2">
      <p className="text-gray-700 font-bold mb-5 text-[18px]">
        Welcome!
      </p>
      <p className="text-lg text-ellipsis overflow-hidden whitespace-nowrap text-custom">
        Hello React and tailwindcss
      </p>
      <p className="text-tahiti-100">
        我是自定义嵌套颜色
      </p>
    </div>
    <div className="container flex flex-col justify-center items-center">
      <p className="text-center text-[#fff]">当前主题:{theme}</p>
      <div className=" flex justify-around w-[340px] mt-2">
      {themes.map((item,index)=>{
        return <button key={index} className="border rounded p-2 bg-secondary text-primary" onClick={()=>setTheme(item)}>{item}</button>
      })}
      </div>
    </div>
    </div>
  )
}

export default App
