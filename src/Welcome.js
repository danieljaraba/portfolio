export default function Welcome() {
  return (
    <section id="welcome">
      <div className="container mx-auto flex p-10 flex-col md:flex-row items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
          <div className="py-2">
            <h1 className="font-sans text-xl font-bold text-white sm:text-4xl">
              Hello, i'm Daniel Jaraba.
            </h1>
          </div>
          <div className="py-2">
            <h2 className="font-sans text-lg text-white">
              A full stack web developer.
            </h2>
          </div>
          <div className="">
            <p className="font-sans text-md text-gray-400">
              I am currently studying software engineering and
              telecommunications engineering at ICESI University in Colombia. I
              can speak english and spanish, my preferred programming languages
              are Java and JavaScript, but i have also worked with Scala and
              Python. Currently learning a lot of frameworks but im sure that i
              have time to learn one more.
            </p>
          </div>
          <div className="flex justify-center py-8 gap-8">
            <a
              href="#contact"
              className="inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded text-lg"
            >
              Contact me
            </a>
            <a
              href="#about"
              className="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-lg"
            >
              More about me
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 hidden md:block">
          <img
            className="object-cover object-center rounded"
            src="./media/welcome.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
