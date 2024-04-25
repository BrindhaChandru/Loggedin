import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    coverLetter: '',
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
  };


  // Define an asynchronous function for handling form submission
const handleSubmit = async (e) => {
  // Prevent default form submission behavior
  e.preventDefault();
  
  try {
      // Make a POST request to the server with the form data, and wait for the response
      const response = await axios.post('http://localhost:5001/apply', formData );
      
      // Log a success message with the response data
      console.log('Form submitted successfully:', response.data);
  } catch (error) {
      // If an error occurs, log an error message
      console.error('Error submitting form:', error);
  }
};

console.log(formData)
  return (
    <div className='flex justify-center items-center h-full'>
        <div className=' w-[100%] h-full m-10  bg-white  p-8'>

    <form method="post" onSubmit={handleSubmit}>
      <h4 className= 'text-3xl font-bold text-black py-2'>Job Application</h4>
      <p className='py-2 mb-2 text-black'>please complete the form below to apply for a position with us.</p>
      
      <label>Name
    

      </label>
     

      <div className='flex flex-col justify-evenly text-black' > 
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="First Name"
        className='flex w-[80%] mt-2 mb-1 border relative bg-gray-100 p-4'
      />
      </div> 
      <div>
      <label>email</label>
      <div className='flex flex-col justify-evenly text-black' > 
      <input 
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="email"
        className='flex w-[80%] mt-2 mb-1 border relative bg-gray-100 p-4'

      />
      </div>
      <label>phone</label>
      <div className='flex flex-col justify-evenly gap-5 text-black' > 
      <input 
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder=""
        className='flex w-[80%] mt-2 mb-1 border relative bg-gray-100 p-4 '
      />
      </div>
      </div>
     
       
      <label>position</label>
      <div className='flex flex-col justify-evenly gap-5 text-black' > 
      <input 
        type="text"
        name="position"
        value={formData.position}
        onChange={handleChange}
        placeholder="position"
        className='flex w-[80%] mt-2 mb-1 border relative bg-gray-100 p-4 '

      />
      </div>
      <label>coverLetter</label>
      <div className='flex flex-col justify-evenly gap-5 text-black' > 
      <input 
        type="text"
        name="coverLetter"
        value={formData.coverLetter}
        onChange={handleChange}
        placeholder="Remarks"
        className='flex w-[80%] mt-2 mb-1 border relative bg-gray-100 p-4 '

      />
      </div>
      
      <button type="submit" className='w-[200px] justify-center items-center py-4 mt-8  bg-indigo-600 hover:bg-indigo-500 relative text-white'>Submit</button>
    </form>
   
    </div>
    </div>
  );
};

export default Form;
