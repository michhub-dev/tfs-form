import "../index.css";

export default function Form() {
  return (
    <>
      <div className=" mr-auto bg-stone-40 w-full h-screen p-6 flex flex-col md:flex-row justify-between items-center   ">
        <form className="rounded-xl md:w-1/2 sm:w-2/3 p-6 mr-3 h-65 mt-10  bg-stone-50 flex flex-col justify-center items-center">
          <h3 className="font-Inter text-[#FEBD0B] font-semibold leading-6 text-xl h-6 w-6 ">Login</h3>
          <input 
            type="email"
           placeholder="✉️ Enter email address" 
           className="mt-6 bg-[#D1DFE5] pt-4 sm:pr-64 pb-4 pl-2.5 sm:pl-1.0 rounded-lg border-2 border-solid  md:w-54 h-12 text-center text-bold outline-none border-slate-400"
           />
          <br />
          <input 
             type="password" 
             placeholder="🔏  Password" 
             className="mt-6 bg-[#D1DFE5] pt-4 sm:pr-64 pb-4 pl-2.5 sm:pl-1.0 rounded-lg border-2 border-solid  md:w-54 h-12 text-center text-bold outline-none border-slate-400" 
             />
          <br />
          
          <div className="flex justify-between  items-center">
            <div className="m-2 ">
            <input 
              type="checkbox" 
              id="reminder"
              className=" w-6 h-6 border-2 border-slate-400 mr-2"
              />
           
           <label
             htmlFor="reminder"
             className="font-Inter  w-24 h-4 font-normal text-sm leading-4 text-black"
             >Remember me
             </label>
            </div>
            
            <small className="text-[#FEBD0B] hover:text-orange-600"><a href="#">Forget your password?</a></small>
            </div>
         
          <button className="hover:bg-amber-300 transition-transition duration-300  mt-4 rounded-lg font-Inter font-semibold text-sm leading-5 text-white w-full h-14 text-center text-bold outline-none bg-[#FEBD0B]">Login</button>
        </form>
        <form className="md:w-1/2 sm:w-2/3 ml-4 p-6 h-70 rounded-xl mt-10 bg-stone-50 flex flex-col  justify-center items-center">
          <h3 className="text-[#FEBD0B] mb-10 leading-6 font-Inter text-xl">Create your TFS account</h3>
          <p className="text-sm font-medium leading-4 mb-12 mt-4 text-black">
            Create your TFS account in just a few clicks! You can register
            either using your e-mail address.
          </p>
          <button className=" duration-300 hover:bg-amber-300 transition-shadow rounded-lg mt-28 font-Inter font-semibold text-sm leading-5 text-white w-full h-14 text-center text-bold outline-none bg-[#FEBD0B]">Register</button>
        </form>
      </div>
    </>
  );
}
