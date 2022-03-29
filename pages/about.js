import {useState} from 'react'
import Head from 'next/head'
import { ExternalLinkIcon, DownloadIcon, PuzzleIcon, CogIcon, OfficeBuildingIcon, AcademicCapIcon, TranslateIcon } from '@heroicons/react/outline'
import { getLangNameFromCode } from 'language-name-map'
import Moment from 'react-moment';
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'
// import Header from '../components/Header/Header'

import { getCV } from '../lib/api'

export async function getStaticProps() {
  const cv = await getCV()
  return { props: { cv },  revalidate: 10}
}

export default function About({ cv }) {
  const [copiedMessage, setCopiedMessage] = useState()
  const copyCurrentURL = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopiedMessage("URL copied to clipboard!")
    setTimeout(() => {  setCopiedMessage(""); }, 1000)
  }
  return (
    <div>
      <Head>        
        <title>About - Frej Andreassen Web</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="description" content="About Frej Andreassen"/>
        <meta name="author" content="Frej Andreassen"/>
      </Head>
      <div>
        <TopNav/>

        <section className="py-26 bg-white lg:w-11/12">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap mx-4 mb-12 items-center">
              <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                <img className="block w-full border-3 border-indigo-900 rounded-2xl shadow-md" src="https://storage.googleapis.com/andreassens.appspot.com/Frej%20Andreassen%20016.jpg" alt="Picture of Frej Andreassen"/>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <span className="inline-flex mb-6 h-6 items-center justify-center text-xs font-extrabold px-2 text-indigo-900 rounded border-2 border-indigo-900 bg-green-200 uppercase shadow-sm">About me</span>
                <p className="text-xl font-bold text-gray-400 mb-2">Last updated <Moment locale="sv" format="MMMM YYYY">{cv.settings.lastUpdate}</Moment></p>
                <h1 className="text-3xl md:text-4xl font-extrabold font-heading mb-4">Hi, I am Frej Andreassen</h1>
                <span className="text-xl font-extrabold leading-8 mb-8 flex items-center">
                  
                  <a href="https://github.com/getmanfred/mac" className="hover:underline" target="_blank" rel="noreferrer">
                    And this is my resume following the Manfred Awesomic CV standard
                    <ExternalLinkIcon className="inline-flex h-5 w-5"/>
                  </a>
                </span>
                <p className="text-xl font-extrabold leading-8 mb-8 flex items-center">
                  <a href="https://frejandreassen.github.io/cv/Frej_Andreassen_CV_MAC.json" className="hover:underline" target="_blank" rel="noreferrer">
                    Frej Andreassen CV MAC.json (Github)
                    <DownloadIcon className="inline-flex h-5 w-5"/>
                  </a>
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mx-4">
              <div className="w-full lg:w-2/5 px-4 mb-12 lg:mb-0">
                <ul className="mb-12">
                  <li className="mb-8"><a className="inline-block text-xl hover:text-indigo-800 font-extrabold" href="#intro">Introduction</a></li>
                  <li className="mb-8"><a className="inline-block text-xl hover:text-indigo-800 font-extrabold" href="#jobs">Jobs</a></li>
                  <li className="mb-8"><a className="inline-block text-xl hover:text-indigo-800 font-extrabold" href="#knowledge">Knowledge</a></li>
                  
                </ul>
                <div className="md:flex pt-8 items-center border-t-3 border-indigo-900">
                    <button onClick={copyCurrentURL} className="inline-block w-full md:w-auto mb-4 md:mb-0 md:mr-6 py-3 px-8 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200">
                      Copy Link
                    </button>
                  <a href="https://github.com/frejandreassen" className="inline-flex items-center justify-center w-14 h-14 mr-6 border-3 border-indigo-900 hover:border-indigo-800 rounded bg-white text-indigo-900 hover:text-indigo-800 shadow">
                  <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" 
                      clipRule="evenodd" 
                      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                      fill="currentColor"/>
                  </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/frej-andreassen/" className="inline-flex items-center justify-center w-14 h-14 mr-6 border-3 border-indigo-900 hover:border-indigo-800 rounded bg-white text-indigo-900 hover:text-indigo-800 shadow">
                    <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"></path>
                    </svg>
                  </a>
                  <a  href="https://twitter.com/FrejAndreassen" className="inline-flex items-center justify-center w-14 h-14 border-3 border-indigo-900 hover:border-indigo-800 rounded bg-white text-indigo-900 hover:text-indigo-800 shadow">
                    <svg width="32" height="26" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M29.0909 8.19468C28.1808 8.59795 27.2042 8.87145 26.1782 8.99355C27.2259 8.3662 28.0278 7.37113 28.4079 6.18907C27.4252 6.77004 26.3404 7.19189 25.1846 7.42058C24.2591 6.43323 22.9426 5.81824 21.4824 5.81824C18.681 5.81824 16.4097 8.08963 16.4097 10.8895C16.4097 11.2866 16.4545 11.6744 16.541 12.0453C12.3258 11.8336 8.58808 9.81404 6.08646 6.74531C5.64917 7.49319 5.4004 8.36462 5.4004 9.29484C5.4004 11.0548 6.2966 12.6077 7.65636 13.5162C6.82505 13.4884 6.04319 13.2597 5.3587 12.8796V12.943C5.3587 15.3998 7.10783 17.4502 9.42711 17.9169C9.00218 18.0312 8.5541 18.0946 8.09054 18.0946C7.76299 18.0946 7.44622 18.0621 7.13563 18.0003C7.78149 20.0167 9.65426 21.4831 11.8731 21.5233C10.1379 22.883 7.94994 23.6912 5.57349 23.6912C5.16404 23.6912 4.76072 23.6664 4.36363 23.6216C6.60876 25.0633 9.27418 25.9039 12.1389 25.9039C21.4701 25.9039 26.5707 18.1749 26.5707 11.472L26.5537 10.8153C27.5503 10.1045 28.4125 9.21141 29.0909 8.19468Z" fill="currentColor"></path>
                    </svg>
                  </a>
                </div>
                <div>{copiedMessage}</div>
              </div>
              <div className="w-full lg:w-3/5 px-4">
                <p id="intro" className="text-xl font-extrabold leading-7 pb-12 mb-12 border-b-3 border-indigo-900">{cv.aboutMe.profile.description}</p>
                {/* JOBS */}
                <h2 id="jobs" className="text-3xl font-extrabold mb-4">Jobs</h2>
                {cv.experience.jobs.map((job, i) => (
                  <div key={i}>
                    <div className="flex justify-between mt-5">
                      <div className="flex items-center">
                        <OfficeBuildingIcon className="hidden md:block h-5 w-5 mr-5" />
                        <h3 className="text-2xl font-extrabold mb-0">{job.organization.name}</h3>
                      </div>
                      <span className="inline-flex mb-0 h-6 items-center justify-center text-xs font-extrabold px-2 text-indigo-900 rounded border-2 border-indigo-900 bg-green-200 uppercase shadow-sm">{job.type}</span>
                    </div>
                    <a href={job.organization.URL} target="_blank" rel="noreferrer">
                      <p className="text-xl font-bold leading-7 text-gray-400 mb-5">
                        {job.organization.description}
                        <ExternalLinkIcon className="inline-flex h-5 w-5"/>
                      </p>
                    </a>
                    {job.roles.map((role, i) => (
                      <div key={i}>
                        <div className="flex justify-between items-center">
                          <h4  className="text-xl font-extrabold leading-7 my-3">
                            {role.name}
                          </h4>
                          <div>
                            <Moment className="text-gray-400" locale="sv" format="YYYY MMM">{role.startDate}</Moment>
                            {" - "}
                            {role.finishDate ? <Moment className="text-gray-400" locale="sv" format="YYYY MMM">{role.finishDate}</Moment> : <p className="inline-flex text-gray-400">present</p>}
                          </div>
                        </div>
                        

                          {role.challenges.map((challenge, i) => (
                            <div key={i} className="text-xl mt-3">
                              <div className="inline-flex items-center">
                                <PuzzleIcon className="hidden md:block h-5 w-5 text-gray-400 mr-5"/>
                                {challenge.description}
                              </div>
                              {challenge.actions && challenge.actions.map((action, i) => (
                                <p key={i} className="text-lg text-gray-400">
                                  - {action}
                                </p>
                              ))}
                            </div>
                          ))}
                          {role.competences && role.competences.map((competence, i) => (
                            <span key={i} className="text-sm mt-3 inline-flex items-center rounded border-2 text-gray-400 border-gray-400 mr-2 p-1 uppercase shadow-sm">
                                {competence.name}
                            </span>
                          ))}
                      </div>
                    ))}
                    <hr className="my-10"/>
                  </div>
                ))}
                {/* KNOWLEDGE */}
                <h2 id="knowledge" className="text-3xl font-extrabold mb-4">Knowledge</h2>
                {cv.knowledge.studies.map((study, i) => (
                  <div key={i}>
                    <div className="flex justify-between mt-5">
                      <div className="flex items-center">
                        <AcademicCapIcon className="hidden md:block h-5 w-5 mr-5" />
                        <h3 className="text-2xl font-extrabold mb-0">{study.institution.name}</h3>
                      </div>
                      <span className="inline-flex mb-0 h-6 items-center justify-center text-xs font-extrabold px-2 text-indigo-900 rounded border-2 border-indigo-900 bg-blue-200 uppercase shadow-sm">{study.studyType}</span>
                    </div>
                    <a href={study.institution.URL} target="_blank" rel="noreferrer">
                      <p className="text-xl font-bold leading-7 text-gray-400 mb-5">
                      {study.institution.description}
                        <ExternalLinkIcon className="inline-flex h-5 w-5"/>
                      </p>
                    </a>
                    <div className="flex justify-between items-center">
                      <h4  className="text-xl font-extrabold leading-7 my-3">
                        {study.name}
                      </h4>
                      <div>
                        <Moment className="text-gray-400" locale="sv" format="YYYY MMM">{study.startDate}</Moment>
                        {" - "}
                        {study.finishDate ? <Moment className="text-gray-400" locale="sv" format="YYYY MMM">{study.finishDate}</Moment> : <p className="inline-flex text-gray-400">present</p>}
                      </div>
                    </div>
                  </div>
                ))}
                <hr className="my-5"/>
                <div className="flex items-center">
                  <TranslateIcon className="hidden md:block h-5 w-5 mr-5" />
                  <h3 className="text-2xl font-extrabold mb-0">Languages</h3>
                </div>
                {cv.knowledge.languages.map((language, i) => (
                  <span key={i} className="text-sm mt-3 inline-flex items-center rounded border-2 text-gray-400 border-gray-400 mr-2 p-1 uppercase shadow-sm">
                      {getLangNameFromCode(language.name).name} - {language.level}
                  </span>
                ))}
                <hr className="my-20"/>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    </div>
  )
}
