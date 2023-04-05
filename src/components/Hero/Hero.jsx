import React from "react";
import homeLogo from '../../Assets/mainHome.jpg'
import PostArea from "./PostArea";

export default function Hero(){
    return(<div className="hero " style={{ backgroundImage: `url("../../Assets/mainHome.jpg")` }}>
    <div className="hero-overlay bg-opacity-60">
        <img src={homeLogo} alt="" className="max-h-[500px] w-full" />
    </div>
    <div className="hero-content text-center text-neutral-content">
      <div className="w-full">
        <h1 className="mb-1 text-5xl font-bold text-[35px]">WORK AT TECHFORING LIMITED</h1>
        <p className="mb-5">
Turn your passion into a career

</p>
<div>

<input type="text" placeholder="Search by postion/level/type/department" className="input input-bordered w-full max-w-[450px]" />
</div>
<div className="w-full mx-auto">
    <PostArea />
    
</div>
      </div>
    </div>
  </div>)
}