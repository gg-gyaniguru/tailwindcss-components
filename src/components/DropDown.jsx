import React, {useState} from 'react';

const DropDown = () => {

    const [toggle, setToggle] = useState(false)

    return (
       <>
           <div className={'w-fit bg-blue-600 relative overflow-hidden'}>
               <div className={'relative px-3 py-1.5 z-50 bg-blue-600 cursor-pointer'} onClick={() => setToggle(toggle => !toggle)}>Drop Down</div>
               <div className={`relative px-3 py-1.5 ${toggle?'mt-0':'-mt-28'} flex flex-col gap-3 transition-all duration-300`}>
                   <div>link 1</div>
                   <div>link 2</div>
                   <div>link 3</div>
               </div>
           </div>
       </>
    );
};

export default DropDown;