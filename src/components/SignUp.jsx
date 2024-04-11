import {useState} from 'react';

const SignUp = () => {

    const [input, setInput] = useState(
        {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    )
    
    return (
       <>
           <div className={'w-dvw h-dvh flex items-center justify-center'}>
               <div className={'w-[90%] max-w-96 p-6 flex flex-col gap-9 rounded-3xl bg-blue-600'}>
                   <div className={'w-full flex px-6 justify-between gap-6'}>
                       <button className={'w-full py-1.5 rounded-lg bg-blue-900'}>Sign In</button>
                       <button className={'w-full py-1.5 rounded-lg bg-blue-900'}>Sign Up</button>
                   </div>
                   <div className={'flex flex-col items-center gap-6'}>
                       <div className={'w-full px-3 py-1.5 flex gap-3 rounded-lg bg-blue-500'}>
                           <img className={'invert w-6 h-6'}
                                src={'https://cdn-icons-png.flaticon.com/512/12795/12795221.png'}/>
                           <input
                               className={'w-full outline-0 bg-transparent placeholder:text-white placeholder:opacity-60'}
                               type={'text'} placeholder={'Name'} value={input.name}
                               onChange={(e) => setInput(input => ({...input, name: e.target.value}))}/>
                       </div>
                       <div className={'w-full px-3 py-1.5 flex items-center gap-3 rounded-lg bg-blue-500'}>
                           <img className={'invert w-5 h-5'}
                                src={'https://cdn-icons-png.flaticon.com/512/1294/1294274.png'}/>
                           <input
                               className={'w-full pl-1 outline-0 bg-transparent placeholder:text-white placeholder:opacity-60'}
                               type={'text'} placeholder={'Email'} value={input.email}
                               onChange={(e) => setInput(input => ({...input, email: e.target.value}))}/>
                       </div>
                       <div className={'w-full px-3 py-1.5 flex items-center gap-3 rounded-lg bg-blue-500'}>
                           <img className={'invert w-5 h-5'}
                                src={'https://cdn-icons-png.flaticon.com/512/14921/14921930.png'}/>
                           <input
                               className={'w-full pl-1 outline-0 bg-transparent placeholder:text-white placeholder:opacity-60'}
                               type={'text'} placeholder={'Email'} value={input.email}
                               onChange={(e) => setInput(input => ({...input, email: e.target.value}))}/>
                       </div>
                       <div className={'w-full px-3 py-1.5 flex items-center gap-3 rounded-lg bg-blue-500'}>
                           <img className={'invert w-5 h-5'}
                                src={'https://cdn-icons-png.flaticon.com/512/14921/14921930.png'}/>
                           <input
                               className={'w-full pl-1 outline-0 bg-transparent placeholder:text-white placeholder:opacity-60'}
                               type={'text'} placeholder={'Email'} value={input.email}
                               onChange={(e) => setInput(input => ({...input, email: e.target.value}))}/>
                       </div>
                   </div>
                   <div className={'w-full'}>
                       <button className={'w-full py-1.5 rounded-lg bg-blue-900'}>Create Account</button>
                   </div>
               </div>
           </div>
       </>
    );
};

export default SignUp;