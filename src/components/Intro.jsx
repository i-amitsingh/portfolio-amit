import profilePic from "../assets/Profile Pic.jpg";

function Intro() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 px-4">
      <div className="flex-shrink-0">
        <img
          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
          src={profilePic}
          alt="Amit's Pic"
        />
      </div>
      <div className="text-center lg:text-left">
        <p className="text-2xl md:text-3xl font-medium logo">Amit Singh</p>
        <p className="italic text-gray-600 font-light underline decoration-0 underline-offset-4 hover:decoration-blue-400 hover:decoration-1">
          Final Year Student at Indian Institute of Information Technology
          Ranchi
        </p>
      </div>
    </div>
  );
}

export default Intro;
