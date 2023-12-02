import {BiEdit} from 'react-icons/bi';
import {MdDelete} from 'react-icons/md';
import blog1 from '../assets/blog-post-01.jpg'
const PostDetails = () => {
  return (
    <div className="px-8 md:px-[200px] mt-8">
       <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
              10 Uses of Artificial Intelligence in Day to day Activity
          </h1>
          <div className="flex items-center justify-center space-x-2">
             <p><BiEdit /></p>
             <p><MdDelete /></p>
          </div>
       </div>
       <div className='flex items-center justify-between mt-2 md:mt-4'>
            <p>@dev_daniels</p>
            <div className='flex space-x-2'>
                <p>16/06/2023</p>
                <p>16:45</p>
            </div> 
       </div>
       <div>
          <img src={blog1} alt="" className="w-full mx-auto" />
          <p className='mx-auto mt-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus blanditiis voluptate fugit molestiae earum. Illo perspiciatis provident pariatur impedit esse quis excepturi praesentium nisi dolores minima quas enim ducimus consequuntur at fugiat nemo, placeat amet et magnam, cum quia ad molestias? Labore, quam soluta! Suscipit fugiat laborum modi accusantium minima!</p>

          <div className="flex items-center mt-8 space-x-4 font-semibold">
               <p>Categories:</p>
               <div className="flex justify-center items-center space-x-2">
                 <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
                 <div className="bg-gray-300 rounded-lg px-3 py-1">AI</div>
               </div>
          </div>
          <div className="flex flex-col mt-4">

                <h3 className="mt-6 mb-4 font-semibold">Comments</h3>
                 {/* comments */}
                <div className='px-2 py-2 bg-gray-200 rounded-lg mt-4'>
                     <div className="flex items-center justify-between">
                          <h3 className="font-bold text-gray-600">@Dev_Daniels</h3>

                          <div className="flex justify-center items-center space-x-4">
                                <p className="text-gray-500 text-sm">16/06/2023</p>
                                <p className="text-gray-500 text-sm">16:45</p>  
                                <div className="flex items-center justify-center space-x-2">
                                    <p><BiEdit /></p>
                                    <p><MdDelete /></p>
                                </div> 
                          </div>
                     </div>
                     <p className='px-4 mt-2'>Very nice information</p>
                </div>
                <div className='px-2 py-2 bg-gray-200 rounded-lg mt-4'>
                     <div className="flex items-center justify-between">
                          <h3 className="font-bold text-gray-600">@Dev_Daniels</h3>

                          <div className="flex justify-center items-center space-x-4">
                                <p className="text-gray-500 text-sm">16/06/2023</p>
                                <p className="text-gray-500 text-sm">16:45</p>  
                                <div className="flex items-center justify-center space-x-2">
                                    <p><BiEdit /></p>
                                    <p><MdDelete /></p>
                                </div> 
                          </div>
                     </div>
                     <p className='px-4 mt-2'>Very nice information</p>
                </div>
          </div>
          {/* write comment */}
          <div className="flex flex-col mt-4 md:flex-row">
              <input type="text" className='md:w-[90%] outline-none px-4 mt-4 md:mt-0' placeholder='Write a comment' />
              <button className='bg-black text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0'>Add Comment</button>
          </div>
       </div>
    </div>
  )
}

export default PostDetails
