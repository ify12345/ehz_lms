import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateCurricullum = () => {
    const[text,setText]= useState("")
    const handleChange =(text)=>{
        setText(text)
    }

  return (
    <form className="py-[100px] px-4 space-y-6">
       <div className="flex space-x-6">
            <select name="" id="" className='p-3'>
                <option value="">Select Curriculum</option>
            </select>
            <select name="" id="" className='p-3'>
                <option value="">Select Topic</option>
            </select>
            

        </div>      

        <div className='bg-white'>
            <div className='flex justify-center h-10 bg-neutral-300 items-center'>USING A RICH TEXT EDITOR</div>
             <ReactQuill   
             value={text}
             onChange={handleChange}
                modules={{
                    toolbar: [
                    [{ header: '1' }, { header: '2' }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['link', 'image'],
                    ],
                }}
                formats={[
                    'header',
                    'bold',
                    'italic',
                    'underline',
                    'strike',
                    'list',
                    'bullet',
                    'link',
                    'image',
                ]}
                placeholder="Write something..."
                />

            {/* <textarea name="" id="" className='w-full h-[450px] p-4' placeholder='Wri÷te Content'/> */}
        </div>
          
        <div className='flex justify-between'>
            <div></div>
           <button  className='px-4 py-3 text-white font-bold rounded-lg b2'>Submit</button>
        </div>  

    </form>
  )
}

export default CreateCurricullum
