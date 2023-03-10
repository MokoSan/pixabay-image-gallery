import { useState } from 'react'
import { EventFormElement, SearchTextCallback } from '../typings'

function ImageSearch({searchText} : {searchText : SearchTextCallback}) {
    const [text, setText] = useState('')

    const onSubmit = (e : React.FormEvent<EventFormElement>) : void => {
        e.preventDefault()
        console.log(`SEarching..${text}`)
        searchText(text)
    }

  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
        <form onSubmit={onSubmit} className='w-full max-w-sm'>
            <div className='flex items-center border-b-2 border-teal-500 py-2'>
                <input type="text" onChange={e => setText(e.target.value)} className='appearence-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' placeholder='Search for a photo'/>
                <button className='flex-shrink-0 bg-teal-700 border-teal-500 hover:border-teal-700p text-sm border-4 text-white py-1 px-2 rounded'>Search</button>
            </div>
        </form>
    </div>
  )
}

export default ImageSearch