
import{ImCross} from 'react-icons/im'
const CreatePost = () => {
  return (
    <div className="px-6 md:px-[200px] mt-8">
         <h1 className="font-bold md:text-2xl text-xl">Create Post</h1>

         <form className="w-full flex flex-col space-y-4 md:space-y- mt-5">
             <input type="text" className="px-4 py-2 outline-none" placeholder='Enter Post title' />
             <input type="file" className="px-4"/>
             <div className="flex flex-col">
                 <div className="flex items-center space-x-4 md:space-x-8">
                    <input type="text" className="px-4 py-2 outline-none" placeholder='Enter post categoty' />
                    <div className="bg-black text-white px-4 font-semibold cursor-pointer">
                        Add
                    </div>
                 </div>
               <div className='flex px-4 mt-3'>
                <div className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 py-1 rounded-md">
                        <p>Tech</p>
                        <p className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'><ImCross /></p>
                    </div>
                <div className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 py-1 rounded-md">
                        <p>Tech</p>
                        <p className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'><ImCross /></p>
                    </div>
               </div>
             </div>
             <textarea name="" id="" cols="30" rows="15" className='px-4 py-2 outline-none' placeholder ='Enter post description'></textarea>
             <button className="bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg">Create</button>
          </form>
    </div>
  )
}

export default CreatePost