import Image from '../assets/bgImage.png';
import man from '../assets/man.jpg'
import man1 from '../assets/man1.jpg'
import man2 from '../assets/man2.jpg'
import man3 from '../assets/man3.jpg'
import woman from '../assets/woman.jpg'




const AboutUs = () => {
  return (
    <div className='font-inter'>

      {/* Hero Section */}
      <section
        className='relative h-112.5 md:h-125 bg-cover flex flex-col justify-center text-white px-6 md:px-14'
        style={{ backgroundImage: `url(${Image})` }}>
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 drop-shadow-sm">
            Who We Are <br />
            & Our Smart Mission
          </h1>

          <p className="text-sm md:text-base text-gray-200 mb-8 drop-shadow-sm">
            We are a passionate team dedicated to creating innovative digital solutions that help businesses grow and succeed.
            Our mission is to combine creativity, technology, and strategy to deliver high-quality products that solve real
            problems and create meaningful experiences for users around the world.
          </p>

          <button className="bg-[#84BD00] hover:bg-[#509E2F] px-6 py-3 rounded-lg font-semibold transition">
            Get In Touch
          </button>
        </div>
      </section>

      {/* mission section */}
      <div className='max-w-11/12 mx-auto py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>

          {/* text */}
          <div className='flex flex-col gap-5'>
            <h1 className='text-3xl font-bold'>Our Mission & Story</h1>

            <p className='text-gray-700'>
              Our mission is to create meaningful digital experiences that make life easier and more efficient for people.
              We started our journey with a simple idea — to combine creativity, technology, and innovation to build solutions
              that truly help businesses and individuals grow. From a small beginning, our passion for quality and continuous
              improvement has driven us to develop reliable products while always focusing on the needs of our users.
            </p>

            <p className='text-gray-700'>
              At the heart of our journey is a commitment to innovation and continuous growth. We believe technology should
              simplify lives and open new opportunities. By focusing on creativity, collaboration, and user-centered design,
              we aim to build solutions that inspire trust and create lasting value.
            </p>

            <button className='self-start text-white bg-[#84BD00] hover:bg-[#509E2F] px-6 py-3 rounded-lg font-semibold transition mt-2'>
              Start Today Now
            </button>
          </div>

          {/* image */}
          <div className='flex justify-center'>
            <img
              className='w-[80%] md:w-[70%] object-cover rounded-lg'
              src={man} />
          </div>

        </div>
      </div>

      {/*  our team */}
      <div className='max-w-11/12 mx-auto py-12'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold mb-1'>Meet Our Team</h1>
          <p className='text-gray-600'>Professional & Dedicated Team</p>
        </div>
        <div className=' grid grid-cols-4 gap-8 mt-8'>
              <div>
                <img src={man1} className=' rounded-lg'></img>
              <h1 className=' mt-4 font-semibold'>Adam Wilcard</h1>
              <p className=' text-[#509E2F]'>CEO & Manager</p>
              </div>

               <div>
                <img src={man3} className=' rounded-lg'></img>
                <h1 h1 className=' mt-4 font-semibold'>Dhananjay Jean</h1>
                <p className=' text-[#509E2F]'>Co-Founder</p>
               </div>

                <div>
                  <img src={man2} className=' rounded-lg'></img>
                   <h1 h1 className=' mt-4 font-semibold'>Adam Gilkrist</h1>
                   <p className=' text-[#509E2F]'>Web Developer</p>
                </div>
                
                 <div>
                  <img src={woman} className=' rounded-lg'></img>
                  <h1 h1 className=' mt-4 font-semibold'>Mark Lee</h1>
                   <p className=' text-[#509E2F]'>Content Writer</p>
                 </div>
              
        </div>
      </div>

      <div className='bg-[#244714]'>
         <div className=' max-w-11/12 mx-auto py-12'>
                 <div className=' text-center text-white'>
                  <h1 className=' text-3xl font-bold '>Choose What You Need</h1>
                  <p className=' mt-1'>At vero eos et accusamus et iusto odio dignissimos 
                    ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                 </div>
               <div className=' grid grid-cols-3 gap-4 my-8'>
                <div className=' bg-[#2F5E1C] p-8 rounded-lg'>
                  <h1 className=' text-4xl font-bold'>01.</h1>
                  <h2 className=' text-xl font-bold text-white mt-3'>Create An Account</h2>
                  <p className=' text-gray-300 mt-1'>Post A Job To Tell Us About Your Project. We'll Quickly Match You With
                     The Right Freelancers Find Place Best. Nor again is there anyone who loves.</p>
                </div>
                <div className=' bg-[#2F5E1C] p-8 rounded-lg'>
                  <h1 className=' text-4xl font-bold'>02.</h1>
                  <h2 className=' text-xl font-bold text-white mt-3'>Save & Apply Jobs</h2>
                  <p className=' text-gray-300 mt-1'>Post A Job To Tell Us About Your Project. We'll Quickly Match You With
                     The Right Freelancers Find Place Best. Nor again is there anyone who loves.</p>
                </div>
                <div className=' bg-[#2F5E1C] p-8 rounded-lg'>
                    <h1 className=' text-4xl font-bold'>03.</h1>
                  <h2 className=' text-xl font-bold text-white mt-3'>Save & Apply Jobs</h2>
                  <p className=' text-gray-300 mt-1'>Post A Job To Tell Us About Your Project. We'll Quickly Match You With
                     The Right Freelancers Find Place Best. Nor again is there anyone who loves.</p>
                </div>

               </div>
         </div>
      </div>

    </div>
  );
};

export default AboutUs;