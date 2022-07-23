import React,{useEffect,useState} from 'react'
import { Links } from './Links'
import { useDebounce } from 'use-debounce'
import { useResultContext } from '../contexts/ResultContextProvider'


export const Search = () => {

  const [text, settext] = useState('')
  const {setsearchterm}=useResultContext();
  const [debouncevalue]=useDebounce(text,800);

  useEffect(()=>{
    if(debouncevalue) setsearchterm(debouncevalue)
  },[debouncevalue])
  return (
    <div className='relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3 '>
      {/* //relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3 */}
      <input
      value={text}
      type="text"
      className='sm:w-96 w-80 h-10 dark:bg-gray-200 hover:border-2 rounded-full hover:border-blue-500 dark:border-green-500  text:white shadow-sm outline-none p-6 dark:text-black hover:shadow-lg'
      placeholder="🔎 Search Google or type URL"
      onChange={(e)=> settext(e.target.value)}    />

      {text !=='' &&(
        <button type='button' className='absolute top-1.5 hover:text-gray-900  left-60 text-3xl text-gray-200' onClick={()=>settext('')}>
          X
        </button>
      )}
      <Links/>
    </div>
  )
}
