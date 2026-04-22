export function TechStack() {
  return (
    <>
      <style>{`
        .resume-scroll::-webkit-scrollbar {
          width: 5px;
        }
        .resume-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .resume-scroll::-webkit-scrollbar-thumb {
          background-color: #a0a0a0;
          border-radius: 999px;
        }
        .resume-scroll::-webkit-scrollbar-thumb:hover {
          background-color: #555;
        }
        /* Firefox support */
        .resume-scroll {
          scrollbar-width: thin;
          scrollbar-color: #a0a0a0 transparent;
        }
      `}</style>

      <div className="resume-scroll w-[600px] h-[550px] rounded-[20px] px-10 py-10 flex flex-col gap-5 overflow-y-auto">

   <div className="flex justify-center items-center">Comming Soon...</div>
      </div>
    </>
  );
}