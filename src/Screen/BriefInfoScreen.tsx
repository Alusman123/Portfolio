import profpic from '../assets/Profilepic.jpg'

export function BriefInfoScreen(){
  return(
    
      <div className="relative z-10 flex flex-row">
        <div className=" h-[600px] w-[750px] rounded-[20px] px-10 py-10 flex flex-col gap-5">
                 <div className='bg-black text-outline text-white text-[110px] font-inika px-10 border-2 rounded-[20px]'>
  WELCOME
</div>

<div className='w-[450px] bg-black text-outline text-white text-[110px] font-inika px-10 border-2 rounded-[20px]'>
 TO MY
</div>

<div className='bg-black text-outline text-white text-[110px] font-inika px-10 border-2 rounded-[20px]'>
PORTFOLIO
</div>
        </div>

        <div className="flex flex-col justify-center items-end px-10">
          <div className="py-[1px]">
            <div className=" bg-black h-[270px] w-[270px] rounded-full flex items-center justify-center">
              <img className='cursor-pointer rounded-full w-[220px] h-[230px]' src={profpic} alt="profile"/>
            </div>
          </div>

          <div className="py-3 px-6 flex items-center justify-center">
            <div className="bg-blac h-[100px] w-[200px] rounded-[20px] flex items-center justify-center">
              <button className="bg-black text-white text-[32px] border-2 border-amber-50 py-[1px] px-[10px] rounded-xl  h-[100px] w-[200px] font-semibold cursor-pointer">
                CONTINUE
              </button>
            </div>
          </div>
        </div>
      </div>

   
  );
}