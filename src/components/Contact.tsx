'use client';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const defaultFormState = {
  name: {
    value: '',
    error: ''
  },
  email: {
    value: '',
    error: ''
  },
  message: {
    value: '',
    error: ''
  }
};
export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);

  const handleSubmit = async (e: any) => {
  e.preventDefault();

  try {
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name.value,
        email: formData.email.value,
        message: formData.message.value,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Email sent successfully:', data);
      toast.success('email sent successfully')
      setFormData({
        name: { value: '', error: '' },
        email: { value: '', error: '' },
        message: { value: '', error: '' },
      });
    } else {
     
      console.error('Error sending email:', data.error);
    }
  } catch (error) {
    toast.error('email not sent')
    console.error('Network error:', error);
  }
};

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='flex flex-col md:flex-row justify-between gap-5'>
        <input
          type='text'
          placeholder='Your Name'
          className='bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500 px-2 py-2 rounded-md text-sm text-neutral-100 w-full'
          value={formData.name.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: {
                value: e.target.value,
                error: ''
              }
            });
          }}
        />
        <input
          type='email'
          placeholder='Your email address'
          className='bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500 px-2 py-2 rounded-md text-sm text-neutral-100 w-full'
          value={formData.email.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: {
                value: e.target.value,
                error: ''
              }
            });
          }}
        />
      </div>
      <div>
        <textarea
          placeholder='Your Message'
          rows={10}
          className='bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500 px-2 mt-4 py-2 rounded-md text-sm text-neutral-100 w-full'
          value={formData.message.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              message: {
                value: e.target.value,
                error: ''
              }
            });
          }}
        />
      </div>
      <button
        className='w-full px-2 py-2 mt-4 bg-neutral-600 rounded-md font-bold text-neutral-500 '
        type='submit'
      >
        Submit{' '}
      </button>
    </form>
  );
};
