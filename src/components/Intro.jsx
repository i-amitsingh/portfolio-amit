function Intro() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 px-4">
      <div className="flex-shrink-0">
        <img
          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
          src="https://media.licdn.com/dms/image/v2/D5603AQHC2nADsjrjFg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729617350236?e=1735776000&v=beta&t=ToN9C9pb826zvm7t6VzrsrV7isJrJSkDFf4a2Jb8jOY"
          alt="Amit's Pic"
        />
      </div>
      <div className="text-center lg:text-left">
        <p className="text-xl md:text-2xl font-medium logo">Amit Singh</p>
        <p className="italic text-gray-600 font-light underline decoration-0 underline-offset-4 hover:decoration-purple-400 hover:decoration-1">
          Final Year Student at Indian Institute of Information Technology
          Ranchi
        </p>
      </div>
    </div>
  );
}

export default Intro;
