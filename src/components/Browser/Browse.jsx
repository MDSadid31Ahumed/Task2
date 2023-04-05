import React from "react";
export default function Browser(){
    const data =["Sales & Marketing", "Digital Marketing"]
    return(<>
    <div className="text-center m-5">
        
    <h1 className="text-[30px] font-bold text-[#000000]">BROWSE OPEN POSITIONS BY CATEGORY</h1>
    <h3 className="mb-10">We are always on the lookout for talanted people</h3>
    <div className="w-96 mx-auto mt-5">

    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box broder-2">
  <div className="collapse-title text-xl font-medium">
    Sales & Marketing
  </div>
  <div className="collapse-content">
    <p>attribute is necessary to make the div focusable</p>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box broder-2">
  <div className="collapse-title text-xl font-medium">
   Digital Marketing
  </div>
  <div className="collapse-content">
    <p>t attribute is necessary to make the div focusable</p>
  </div>
</div><div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box broder-2">
  <div className="collapse-title text-xl font-medium">
    Development
  </div>
  <div className="collapse-content">
    <p>t attribute is necessary to make the div focusable</p>
  </div>
</div><div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box broder-2">
  <div className="collapse-title text-xl font-medium">
    Engineering
  </div>
  <div className="collapse-content">
    <p> attribute is necessary to make the div focusable</p>
  </div>
</div>
    </div>
    </div>
    </>)
}