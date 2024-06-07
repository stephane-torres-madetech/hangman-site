function Hangman() {
  return (
    <div className="w-144 relative">
      <div className="">
        <div className="w-6 h-24 bg-black ml-96 translate-y-24"></div>
        <div className="w-80 bg-black ml-16">.</div>
        <div className="w-6 h-144 bg-black ml-16"></div>
        <div className="w-96 bg-black ">Base</div>
      </div>
      <div className="hangman absolute right-28 top-28 translate-y-16 translate-x-3" >
        <div className="rounded-full bg-black w-24 h-24">.</div>
        <div className="w-2 h-36 bg-black translate-x-11" >/</div>
        <div className="w-2 h-36 bg-black rotate-12 translate-x-7 -translate-y-1" ></div>
        <div className="w-2 h-36 bg-black -translate-y-37 -rotate-12 translate-x-15"></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default Hangman;
