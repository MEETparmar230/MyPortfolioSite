'use client'

import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID!
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID!
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY!

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email({ message: 'Enter a valid email' }),
  message: z.string().min(5, {
    message: 'Message must be at least 5 characters.',
  }),
})

export default function ContactMe() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          username: values.username,
          email: values.email,
          message: values.message,
        },
        publicKey
      )

      console.log('Email sent:', response)
      alert('Email sent successfully!')
      form.reset()
    } catch (error) {
      console.error('Email error:', error)
      alert('Email sending failed. Try again.')
    }
  }



  return (
    <section className='my-10 lg:px-4 md:px-4'>
      <div className="bg-[#1E1E1E] lg:px-6 md:px-6 max-w-5xl mx-auto rounded-lg w-full">
        <section className="text-gray-600 body-font relative w-3xl mx-auto">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-col text-center w-full mb-8">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#E0E0E0]">
                Contact Me
              </h1>

            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-wrap -m-2"
              >
                <div className="p-2 w-1/2 my-4">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-indigo-400'>Name</FormLabel>
                        <FormControl>
                          <Input {...field} className="text-gray-200 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="p-2 w-1/2 my-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-indigo-400">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            {...field} 
                            className="text-gray-200 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                </div>

                <div className="p-2 w-full my-4">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-indigo-400'>Message</FormLabel>
                        <FormControl>
                          <textarea
                            {...field}
                            className="w-full h-32 p-2 border border-gray-400 rounded-lg resize-none text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-800"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="p-2 w-full my-4">
                  <Button
                    type="submit"
                    className="flex mx-auto text-indigo-500 bg-white border-2 border-indigo-500 hover:bg-indigo-500 hover:text-white py-2 px-8 rounded text-lg"
                  >
                    Send Email
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </section>
      </div>
    </section>
  )
}
