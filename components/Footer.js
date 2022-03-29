import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const d = new Date()
  const year = d.getFullYear()
  return (
    <section>
      <div className="pt-26 border-3 border-l-0 border-r-0 border-indigo-900">
        <div className="pb-16 border-b-3 border-indigo-900">
          <div className="container px-4 mx-auto text-center">
            <div className="flex flex-wrap justify-between items-center">
              <div className="w-full lg:w-auto mb-12 lg:mb-0">
                <a className="inline-block mx-auto" href="#">
                  <img className="h-12" src="nigodo-assets/logo.png" alt=""/>
                </a>
              </div>
              <div className="w-full lg:w-auto mb-12 lg:mb-0">
                <div className="flex flex-wrap items-center justify-center">
                <Link href="/blog"><a className="inline-block mr-4 md:mr-16 2xl:mr-20 text-lg font-extrabold hover:text-indigo-800">
                    Blog
                  </a></Link>
                  <Link href="/projects"><a className="inline-block mr-4 md:mr-16 2xl:mr-20 text-lg font-extrabold hover:text-indigo-800" >
                    Projects
                  </a></Link>
                  <Link href="/about"><a className="inline-block mr-4 md:mr-16 2xl:mr-20 text-lg font-extrabold hover:text-indigo-800" >
                    About
                  </a></Link>
                  <Link href="/contact"><a className="inline-block text-lg font-extrabold hover:text-indigo-800" >
                    Contact
                  </a></Link>
                </div>
              </div>
              <div className="w-full lg:w-auto flex items-center justify-center">
                <a className="inline-block text-indigo-900 hover:text-indigo-800 mr-8" href="https://github.com/frejandreassen">
                  <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" 
                      clipRule="evenodd" 
                      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                      
                      fill="currentColor"/>
                  </svg>
                </a>
                <a className="inline-block text-indigo-900 hover:text-indigo-800 mr-8" href="https://twitter.com/FrejAndreassen">
                  <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M31.3636 3.24326C30.2259 3.74735 29.0053 4.08922 27.7228 4.24185C29.0323 3.45765 30.0347 2.21382 30.5098 0.73624C29.2814 1.46245 27.9255 1.98978 26.4808 2.27563C25.3239 1.04144 23.6783 0.272705 21.853 0.272705C18.3513 0.272705 15.5121 3.11195 15.5121 6.61175C15.5121 7.10811 15.5681 7.59291 15.6762 8.05649C10.4073 7.79185 5.73508 5.26745 2.60806 1.43154C2.06145 2.36639 1.75049 3.45569 1.75049 4.61846C1.75049 6.81841 2.87074 8.75952 4.57044 9.89518C3.5313 9.86043 2.55397 9.57457 1.69837 9.09942V9.17862C1.69837 12.2496 3.88478 14.8127 6.78387 15.396C6.25271 15.5389 5.69261 15.6181 5.11317 15.6181C4.70372 15.6181 4.30776 15.5776 3.91953 15.5003C4.72685 18.0208 7.06781 19.8538 9.8414 19.904C7.67236 21.6037 4.93741 22.6139 1.96685 22.6139C1.45503 22.6139 0.950892 22.583 0.454529 22.5269C3.26094 24.329 6.59271 25.3797 10.1736 25.3797C21.8377 25.3797 28.2134 15.7186 28.2134 7.33993L28.1922 6.51907C29.4379 5.63053 30.5156 4.51417 31.3636 3.24326Z" fill="currentColor"></path>
                  </svg>
                </a>
                <a className="inline-block text-indigo-900 hover:text-indigo-800" href="https://www.linkedin.com/in/frej-andreassen/">
                  <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" 
                      clipRule="evenodd"
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                      fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-4 pt-16 pb-24 mx-auto">
          <p className="text-center text-lg font-extrabold">© {year} - Frej Andreassen</p>
        </div>
      </div>
    </section>
  )
}

export default Footer