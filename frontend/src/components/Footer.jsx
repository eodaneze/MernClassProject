const Footer = () => {
  return (
   <>
    <div className="mt-8 w-full bg-black px-8 md:px-[500px]flex justify-between text-sm md:text-md py-8">
        <div className="flex flex-col text-white">
           <p>Featured Blogs</p>
           <p>Most Viewed</p>
           <p>Readers Choice</p>
        </div>
        <div className="flex flex-col text-white">
           <p>Focus</p>
           <p>Support</p>
           <p>Recent Posts</p>
        </div>
        <div className="flex flex-col text-white">
           <p>Privacy Policy</p>
           <p>About Us</p>
           <p>Terms And Condition</p>
        </div>
    </div>
    <p className="py-2 pb-2 text-center text-white bg-block">All right reserved @Blog Market</p>
   </>
  )
}

export default Footer