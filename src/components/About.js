import React from 'react'

const About = () => {
    return (
        <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Nicolò.
            <br className="hidden lg:inline-block" /> Data Scientist leveraging Machine Learning and NLP expertise to support business
            initiatives
          </h1>
          <p className="mb-8 leading-relaxed">
          Having a formal background in computational linguistics, evidenced by my master's degree and comprehensive acumen in data science and NLP techniques, I can deliver quality technical project outputs to organizations consistent with their organizational goals.
Additionally, my professional experiences as a freelancer, marketing assistant, and supervisor, my interpersonal skills in communication, leadership, collaboration, and time management have been developed. I usually leverage these skills, alongside my analytical abilities, to execute analysis on datasets and develop algorithms that support the initiatives of businesses, including improved efficiency as well as customer experience.
         </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./nico_headshot.jpeg"
          />
        </div>
      </div>
    </section>
    )
}

export default About
