import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'

import { useFormik } from 'formik';
import axios from 'axios';

const Contact = () => {
  const [messageConfirmation, setMessageConfirmation] = React.useState('')

  const formik = useFormik({
    initialValues: {
      email: '',
      message: ''
    },
    onSubmit: async (values, {resetForm}) => {
      axios.post('/api/contact', 
                {text: JSON.stringify(values)},
                {
                  headers: {
                    'Content-type': 'application/json'
                  }
                })
        .then( function(response) {
          setMessageConfirmation("Message successfully sent!")
          setTimeout(() => {  setMessageConfirmation(""); resetForm()}, 2000)
        })
        .catch( async function(error){
          console.log(error)
          setMessageConfirmation("---")
          await setTimeout(() => {setMessageConfirmation("Message error!")}, 500)
        })
      
    },
  });

  return (
    <div>
      <Head>        
        <title>Contact - Frej Andreassen Web</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="description" content="Contact Frej Andreassen"/>
        <meta name="author" content="Frej Andreassen"/>
      </Head>
      <TopNav />

      <section className="py-26 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4 mb-16 items-center">
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              <div className="max-w-xl">
                <span className="text-lg font-extrabold text-indigo-500">Contact</span>
                <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-3 mb-3">Let&#39;s stay connected</h1>
                <p className="text-xl font-extrabold leading-8">It&#39;s never been easier to get in touch. Call me, email me, or send me a letter. You can also reach me on twitter or linkedin.</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="flex flex-wrap items-center lg:justify-end">
                <Link href="/projects"><a className="inline-block w-full md:w-auto mb-2 md:mb-0 md:mr-4 py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200">Projects</a></Link>
                <Link href="/about"><a className="inline-block w-full md:w-auto py-4 px-6 text-center leading-6 text-lg text-indigo-900 hover:text-white font-extrabold bg-white hover:bg-indigo-800 border-3 border-indigo-900 shadow rounded transition duration-200">About me</a></Link>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 mb-16 items-center">
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full sm:w-1/2 px-4 mb-12">
                  <div className="inline-flex mb-8 w-20 h-20 items-center justify-center bg-white text-indigo-900 border-3 border-indigo-900 rounded-full shadow-md">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26.9467 11.76L18.6667 3.7067C17.9653 3.03984 17.0345 2.66797 16.0667 2.66797C15.0989 2.66797 14.1681 3.03984 13.4667 3.7067L5.18667 11.7067C4.81877 12.0279 4.52289 12.4231 4.31839 12.8666C4.11389 13.31 4.00539 13.7917 4 14.28V25.72C4.01405 26.6902 4.41206 27.6152 5.10682 28.2925C5.80159 28.9698 6.73647 29.3441 7.70667 29.3334H24.2933C25.2635 29.3441 26.1984 28.9698 26.8932 28.2925C27.5879 27.6152 27.9859 26.6902 28 25.72V14.28C27.999 13.8113 27.9054 13.3474 27.7246 12.915C27.5439 12.4826 27.2795 12.0901 26.9467 11.76ZM15.2533 5.6267C15.4573 5.44025 15.7237 5.33686 16 5.33686C16.2763 5.33686 16.5427 5.44025 16.7467 5.6267L24 12.6667L16.7067 19.7067C16.5027 19.8932 16.2363 19.9965 15.96 19.9965C15.6837 19.9965 15.4173 19.8932 15.2133 19.7067L8 12.6667L15.2533 5.6267ZM25.3333 25.72C25.3162 25.9817 25.1982 26.2266 25.0043 26.4031C24.8103 26.5797 24.5555 26.6742 24.2933 26.6667H7.70667C7.44451 26.6742 7.18966 26.5797 6.99571 26.4031C6.80176 26.2266 6.68382 25.9817 6.66667 25.72V15.1334L12.0667 20.3334L9.85333 22.4667C9.605 22.7165 9.46561 23.0545 9.46561 23.4067C9.46561 23.7589 9.605 24.0969 9.85333 24.3467C9.97726 24.4767 10.1262 24.5803 10.2911 24.6514C10.4561 24.7224 10.6337 24.7593 10.8133 24.76C11.1566 24.7587 11.4862 24.6249 11.7333 24.3867L14.0933 22.12C14.6795 22.4782 15.3531 22.6677 16.04 22.6677C16.7269 22.6677 17.4005 22.4782 17.9867 22.12L20.3467 24.3867C20.5938 24.6249 20.9234 24.7587 21.2667 24.76C21.4463 24.7593 21.6239 24.7224 21.7889 24.6514C21.9538 24.5803 22.1027 24.4767 22.2267 24.3467C22.475 24.0969 22.6144 23.7589 22.6144 23.4067C22.6144 23.0545 22.475 22.7165 22.2267 22.4667L20 20.3334L25.3333 15.1334V25.72Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-extrabold mb-3">Email</h3>
                  <p className="text-xl sm:text-2xl font-bold text-gray-400"><a href="mailto:frej@andreassens.se">frej@andreassens.se</a></p>
                </div>
                <div className="w-full sm:w-1/2 px-4 mb-12">
                  <div className="inline-flex mb-8 w-20 h-20 items-center justify-center bg-white text-indigo-900 border-3 border-indigo-900 rounded-full shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-extrabold mb-3">Phone</h3>
                  <p className="text-xl sm:text-2xl font-bold text-gray-400"><a href="tel:+46706920705">+46 70 692 07 05</a></p>
                </div>
                <div className="w-full sm:w-1/2 px-4 mb-12 sm:mb-0">
                  <div className="inline-flex mb-8 w-20 h-20 items-center justify-center bg-white text-indigo-900 border-3 border-indigo-900 rounded-full shadow-md">
                    <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 3.97338C17.8783 1.85164 15.0006 0.659668 12 0.659668C8.9994 0.659668 6.12172 1.85164 3.99999 3.97338C1.87826 6.09511 0.686279 8.97279 0.686279 11.9734C0.686279 14.974 1.87826 17.8516 3.99999 19.9734L11.0267 27.0134C11.1506 27.1383 11.2981 27.2375 11.4606 27.3052C11.623 27.3729 11.7973 27.4078 11.9733 27.4078C12.1493 27.4078 12.3236 27.3729 12.4861 27.3052C12.6486 27.2375 12.796 27.1383 12.92 27.0134L20 19.9067C22.1129 17.7938 23.2998 14.9281 23.2998 11.94C23.2998 8.95197 22.1129 6.08628 20 3.97338V3.97338ZM18.0933 18L12 24.12L5.90665 18C4.70285 16.7951 3.88329 15.2604 3.55158 13.5898C3.21987 11.9192 3.39091 10.1877 4.04306 8.61428C4.69521 7.04086 5.79921 5.69611 7.21549 4.75001C8.63178 3.80392 10.2968 3.29895 12 3.29895C13.7032 3.29895 15.3682 3.80392 16.7845 4.75001C18.2008 5.69611 19.3048 7.04086 19.9569 8.61428C20.6091 10.1877 20.7801 11.9192 20.4484 13.5898C20.1167 15.2604 19.2971 16.7951 18.0933 18V18ZM7.99999 7.88004C6.92361 8.95974 6.31918 10.4221 6.31918 11.9467C6.31918 13.4713 6.92361 14.9337 7.99999 16.0134C8.79967 16.8144 9.8181 17.3615 10.9275 17.5859C12.0369 17.8103 13.1879 17.7022 14.2361 17.2749C15.2842 16.8477 16.1829 16.1204 16.8193 15.1844C17.4557 14.2483 17.8015 13.1452 17.8133 12.0134C17.8193 11.2576 17.6738 10.5084 17.3852 9.80989C17.0966 9.1114 16.671 8.47785 16.1333 7.94671C15.6049 7.40615 14.9748 6.97543 14.2792 6.67933C13.5837 6.38323 12.8364 6.22761 12.0805 6.22141C11.3246 6.21522 10.5749 6.35857 9.87462 6.64323C9.17431 6.92788 8.53721 7.34822 7.99999 7.88004V7.88004ZM14.2533 14.12C13.748 14.633 13.0803 14.9546 12.3642 15.0297C11.648 15.1048 10.9281 14.9289 10.3273 14.5319C9.72659 14.135 9.28238 13.5417 9.07066 12.8535C8.85894 12.1653 8.89285 11.4249 9.1666 10.7589C9.44034 10.0929 9.93692 9.54273 10.5714 9.20236C11.2059 8.86198 11.939 8.75259 12.6452 8.89287C13.3515 9.03314 13.9871 9.41439 14.4433 9.97142C14.8996 10.5284 15.1482 11.2267 15.1467 11.9467C15.1273 12.7697 14.782 13.5514 14.1867 14.12H14.2533Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-extrabold mb-3">Address</h3>
                  <p className="text-xl sm:text-2xl font-bold text-gray-400">Hertings allé 10</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-400">311 45, Falkenberg SE</p>
                </div>
                <div className="w-full sm:w-1/2 px-4">
                  <div className="inline-flex mb-8 w-20 h-20 items-center justify-center bg-white text-indigo-900 border-3 border-indigo-900 rounded-full shadow-md">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26 0.666626H2.00002C1.6464 0.666626 1.30726 0.807102 1.05721 1.05715C0.807163 1.3072 0.666687 1.64634 0.666687 1.99996V26C0.666687 26.3536 0.807163 26.6927 1.05721 26.9428C1.30726 27.1928 1.6464 27.3333 2.00002 27.3333H26C26.3536 27.3333 26.6928 27.1928 26.9428 26.9428C27.1929 26.6927 27.3334 26.3536 27.3334 26V1.99996C27.3334 1.64634 27.1929 1.3072 26.9428 1.05715C26.6928 0.807102 26.3536 0.666626 26 0.666626V0.666626ZM8.66669 24.6666H3.33335V19.3333H8.66669V24.6666ZM8.66669 16.6666H3.33335V11.3333H8.66669V16.6666ZM8.66669 8.66663H3.33335V3.33329H8.66669V8.66663ZM16.6667 24.6666H11.3334V19.3333H16.6667V24.6666ZM16.6667 16.6666H11.3334V11.3333H16.6667V16.6666ZM16.6667 8.66663H11.3334V3.33329H16.6667V8.66663ZM24.6667 24.6666H19.3334V19.3333H24.6667V24.6666ZM24.6667 16.6666H19.3334V11.3333H24.6667V16.6666ZM24.6667 8.66663H19.3334V3.33329H24.6667V8.66663Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-extrabold mb-10">Socials</h3>
                  <div className="flex items-center">
                    <a className="inline-block mr-6 text-gray-400 hover:text-gray-500" href="https://twitter.com/FrejAndreassen">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M21.8181 6.14598C21.1356 6.44844 20.4032 6.65356 19.6336 6.74513C20.4194 6.27462 21.0208 5.52831 21.3059 4.64177C20.5689 5.0775 19.7553 5.39389 18.8885 5.56541C18.1943 4.82489 17.2069 4.36365 16.1118 4.36365C14.0108 4.36365 12.3072 6.06719 12.3072 8.16707C12.3072 8.46489 12.3408 8.75577 12.4057 9.03392C9.24434 8.87513 6.44104 7.3605 4.56483 5.05895C4.23686 5.61986 4.05028 6.27344 4.05028 6.9711C4.05028 8.29107 4.72243 9.45574 5.74225 10.1371C5.11877 10.1163 4.53237 9.94477 4.01901 9.65968V9.70719C4.01901 11.5498 5.33086 13.0876 7.07031 13.4376C6.75161 13.5234 6.41555 13.5709 6.06789 13.5709C5.82222 13.5709 5.58464 13.5466 5.35171 13.5002C5.8361 15.0125 7.24067 16.1123 8.90483 16.1424C7.6034 17.1623 5.96243 17.7683 4.1801 17.7683C3.87301 17.7683 3.57052 17.7498 3.27271 17.7162C4.95655 18.7974 6.95561 19.4279 9.10416 19.4279C16.1026 19.4279 19.928 13.6312 19.928 8.60398L19.9153 8.11147C20.6627 7.57834 21.3094 6.90853 21.8181 6.14598Z" fill="currentColor"></path>
                      </svg>
                    </a>
                    <a className="inline-block mr-6 text-gray-400 hover:text-gray-500" href="https://github.com/frejandreassen">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"></path>
                      </svg>
                    </a>
                    <a className="inline-block text-gray-400 hover:text-gray-500" href="https://www.linkedin.com/in/frej-andreassen/">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.2 0H1.8C0.81 0 0 0.81 0 1.8V16.2C0 17.19 0.81 18 1.8 18H16.2C17.19 18 18 17.19 18 16.2V1.8C18 0.81 17.19 0 16.2 0ZM5.4 15.3H2.7V7.2H5.4V15.3ZM4.05 5.67C3.15 5.67 2.43 4.95 2.43 4.05C2.43 3.15 3.15 2.43 4.05 2.43C4.95 2.43 5.67 3.15 5.67 4.05C5.67 4.95 4.95 5.67 4.05 5.67ZM15.3 15.3H12.6V10.53C12.6 9.81004 11.97 9.18 11.25 9.18C10.53 9.18 9.9 9.81004 9.9 10.53V15.3H7.2V7.2H9.9V8.28C10.35 7.56 11.34 7.02 12.15 7.02C13.86 7.02 15.3 8.46 15.3 10.17V15.3Z" fill="currentColor"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="px-6 py-12 md:px-12 bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
                <form onSubmit={formik.handleSubmit}>
                  <div className="mb-8">
                    <label className="block mb-2 font-extrabold" htmlFor="email">Email</label>
                    <input 
                      required 
                      id="email" 
                      className="inline-block w-full p-4 text-lg font-extrabold placeholder-indigo-900 shadow border-2 border-indigo-900 rounded outline-none" 
                      name="email" 
                      type="email" 
                      placeholder="yourmail@mail.com"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      />
                  </div>
                  <div className="mb-8">
                    <label className="block mb-2 font-extrabold" htmlFor="message">Message</label>
                    <textarea 
                      required 
                      id="message" 
                      className="w-full p-4 text-lg font-extrabold placeholder-indigo-900 shadow border-2 border-indigo-900 rounded resize-none" 
                      name="message" 
                      cols="30" 
                      rows="10" 
                      placeholder="Your message..." 
                      onChange={formik.handleChange}
                      value={formik.values.message}/>
                  </div>
                  <button disabled={formik.isSubmitting} type="submit" className="inline-block w-full py-4 px-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200">
                    Drop a message
                  </button>
                  <p className="text-center text-xl mt-2">{messageConfirmation}</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact