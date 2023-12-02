import blog1 from '../assets/blog-post-01.jpg'
const HomePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
       {/* left */}
        <div className="w-[35%] h-[200px] flex justify-center items-center">
           <img src={blog1} alt="" className="h-full w-full object-cover"/>
        </div>
       {/* right */}
       <div className="flex flex-col w-[65%]">
          <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
            10 Uses of Artificial Intelligence in day to day Life
          </h1>
          <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
            <p>@dev_daniels</p>
            <div className='flex space-x-2'>
                <p>16/06/2023</p>
                <p>16:45</p>
            </div>
          </div>
          <p className='text-sm md:'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsam amet sed hic. Velit sunt amet maiores officia. Quidem, in.</p>
       </div>
    </div>
  )
}

export default HomePosts