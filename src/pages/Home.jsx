import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function Home() {
  return (
    <>
{/* slider */}

    <div>
     <Swiper
  spaceBetween={20}
  slidesPerView={1}
  onSlideChange={() => console.log('slide change')}
  onSwiper={(swiper) => console.log(swiper)}
>
  <SwiperSlide className='bg-purple-100 min-h-[300px] flex justify-center items-center'>
    <div className='flex flex-col justify-center items-start gap-4 p-6 mt-10'>
    <h1 className='text-5xl font-extrabold text-purple-800 font-serif'>WELCOME TO HELLO KIDS</h1>
<h2 className='text-4xl font-semibold text-purple-600 font-mono'>Best For Education</h2>
<p className='text-2xl text-indigo-600 font-sans max-w-lg'>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum nihil debitis commodi recusandae rem facere qui eius est, similique officiis quia.
</p>
<div className='flex gap-2'>
<button className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg m-4 ' >About</button>
<button className='bg-yellow-300 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg m-4 ' >Contact</button>
</div>

    </div>
  </SwiperSlide>
  <SwiperSlide className='bg-purple-100 min-h-[300px] flex justify-center items-center'>
    <div className='flex flex-col justify-center items-start gap-4 p-6 mt-10'>
    <h1 className='text-5xl font-extrabold text-purple-800 font-serif'>WELCOME TO HELLO KIDS</h1>
<h2 className='text-4xl font-semibold text-purple-600 font-mono'>Best For Education</h2>
<p className='text-2xl text-indigo-600 font-sans max-w-lg'>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum nihil debitis commodi recusandae rem facere qui eius est, similique officiis quia.
</p>
<div className='flex gap-2'>
<button className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg m-4 ' >About</button>
<button className='bg-yellow-300 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg m-4 ' >Contact</button>
</div>

    </div>
  </SwiperSlide>
  <SwiperSlide className='bg-purple-100 min-h-[300px] flex justify-center items-center'>
    <div className='flex flex-col justify-center items-start gap-4 p-6 mt-10'>
    <h1 className='text-5xl font-extrabold text-purple-800 font-serif'>WELCOME TO HELLO KIDS</h1>
<h2 className='text-4xl font-semibold text-purple-600 font-mono'>Best For Education</h2>
<p className='text-2xl text-indigo-600 font-sans max-w-lg'>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum nihil debitis commodi recusandae rem facere qui eius est, similique officiis quia.
</p>
<div className='flex gap-2'>
<button className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg m-4 ' >About</button>
<button className='bg-yellow-300 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg m-4 ' >Contact</button>
</div>

    </div>
  </SwiperSlide>
</Swiper>
</div> 

{/* about section */}

<div className='min-h-[400px] grid sm:grid-cols-2'> 
  <div className='flex justify-center items-center p-2'>
     <img src='https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&w=600' alt='school'/>
  </div>
  <div className='flex flex-col justify-center items-center p-6 m-2 space-y-4'>
  <h1 className='text-5xl font-extrabold text-purple-700 font-serif '>About Our Academy</h1>
  <p className='text-xl text-purple-400 font-sans leading-relaxed'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, tempore fugit. Cupiditate quas pariatur alias distinctio, doloremque nostrum ipsam veniam maiores sint assumenda voluptatem error iste ad beatae incidunt. Qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorum accusamus in suscipit repellendus nemo similique delectus dignissimos culpa sint magni magnam, ab sed repudiandae. Perspiciatis iusto consectetur odio quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nesciunt quae illum ipsa impedit animi nulla non eius perferendis odit. Velit odit fugiat natus maiores illum corporis pariatur architecto rerum.
  </p>
</div>

</div>

{/* cards */}

<div className='min-h-[350px] grid sm:grid-cols-4 container mx-auto p-6'>
<div className='flex flex-col justify-center items-center gap-4 space-y-4 p-3 m-4 bg-gray-50'>
  <h2 className='text-3xl font-bold text-purple-600 font-sans'>Active Learning</h2>
  <p className='text-base leading-relaxed text-gray-800 w-72 font-serif'>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore voluptas consectetur omnis odio officiis! Eos, dolorum omnis. Incidunt aspernatur soluta veritatis? Perferendis pariatur recusandae architecto autem, corrupti id commodi laborum.
  </p>
</div>

<div className='flex flex-col justify-center items-center gap-4 space-y-4 p-3 m-4 bg-gray-50'>
  <h2 className='text-3xl font-bold text-purple-600 font-sans'>Expert Teachers</h2>
  <p className='text-base leading-relaxed text-gray-800 w-72 font-serif'>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore voluptas consectetur omnis odio officiis! Eos, dolorum omnis. Incidunt aspernatur soluta veritatis? Perferendis pariatur recusandae architecto autem, corrupti id commodi laborum.
  </p>
</div>

<div className='flex flex-col justify-center items-center gap-4 space-y-4 p-3 m-4 bg-gray-50'>
  <h2 className='text-3xl font-bold text-purple-600 font-sans'>Strategy Teachers</h2>
  <p className='text-base leading-relaxed text-gray-800 w-72 font-serif'>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore voluptas consectetur omnis odio officiis! Eos, dolorum omnis. Incidunt aspernatur soluta veritatis? Perferendis pariatur recusandae architecto autem, corrupti id commodi laborum.
  </p>
</div>

<div className='flex flex-col justify-center items-center gap-4 space-y-4 p-3 m-4 bg-gray-50'>
  <h2 className='text-3xl font-bold text-purple-600 font-sans'>Full Day Programs</h2>
  <p className='text-base leading-relaxed text-gray-800 w-72 font-serif'>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore voluptas consectetur omnis odio officiis! Eos, dolorum omnis. Incidunt aspernatur soluta veritatis? Perferendis pariatur recusandae architecto autem, corrupti id commodi laborum.
  </p>
</div>

</div>

    </>
  )
}

export default Home




// style={{backgroundImage:"Url(https://images.pexels.com/photos/1206101/pexels-photo-1206101.jpeg?auto=compress&cs=tinysrgb&w=600)"}}