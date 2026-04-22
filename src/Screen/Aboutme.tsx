export function Resume() {
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

        <div className="flex flex-col">
          <div>
            <div className="flex justify-center items-center text-[40px]">AL K. Usman Jr.</div>
            <div className="flex flex-row gap-3">
              <div>Alimansu76@gmail.com</div>
              <div>09091931036 </div>
              <div>https://github.com/Alusman123 </div>
            </div>
            <div className="flex flex-row gap-[130px] border-b-2 pb-3 mb-5">
              <div>Email </div>
              <div>Phone Number</div>
              <div>GITHUB link</div>
            </div>

            <div className="">
              I am Al Usman, a graduate of Bachelor of Science in Computer Science from STI College Pasay–EDSA. I am a motivated and detail-oriented individual confidently pursuing a career as a Software Engineer, Software Developer, and Quality Assurance professional. I possess a strong foundation in software development concepts, problem-solving, and quality-focused practices, and I am eager to apply my skills in real-world projects while continuously learning and growing in the technology field.
            </div>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="flex flex-col gap-3">
          <div className="text-[22px] font-bold uppercase border-b-2 pb-2">Education</div>

          <div className="flex flex-col gap-1">
            <div className="font-semibold uppercase text-sm">Sr. High School: 2020 – 2022</div>
            <div className="font-bold">Cotabato City National High School – Main Campus</div>
            <div className="text-sm">TVL - ICT</div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="font-semibold uppercase text-sm">College: 2022 – 2026</div>
            <div className="font-bold">STI Pasay–EDSA</div>
            <div className="text-sm">Bachelor of Science in Computer Science</div>
          </div>
        </div>

        {/* MAJOR PROJECTS */}
        <div className="flex flex-col gap-4">
          <div className="text-[22px] font-bold uppercase border-b-2 pb-2">Major Projects</div>

          {/* Thesis */}
          <div className="flex flex-col gap-2">
            <div className="font-bold uppercase text-sm">Thesis</div>
            <div className="font-semibold">
              Automatic Plant Watering System via Soil Moisture Sensing with Mobile Notification
            </div>
            <div className="text-sm leading-relaxed">
              The Plant Automatic Watering System (PAWS) is an application and device developed by my classmate and me, where I served as the Team Leader and Head Programmer. The project focuses on providing a real-time, automated plant watering solution using soil moisture sensing technology. The system utilizes Firebase as a real-time database and ESP8266 for wireless communication between the hardware and the mobile application. The mobile application was developed using React Native, with technologies such as HTML, CSS, and JavaScript, enabling real-time monitoring and mobile notifications.
            </div>
          </div>

          {/* Internship */}
          <div className="flex flex-col gap-2">
            <div className="font-bold uppercase text-sm">Internship</div>
            <div className="font-semibold">Grid Property Ventures – Mobile App</div>
            <div className="text-sm leading-relaxed">
              I am part of the development team at Grid Property Ventures, a startup focused on delivering innovative mobile solutions in the real estate industry. As a member of the mobile app development team, I collaborate with designers, backend developers, and stakeholders to build and enhance features that streamline property listing, management, and user interaction. I contribute to developing, testing, and optimizing application functionalities to ensure a smooth and reliable user experience for both property owners and clients.
            </div>
            <div className="flex flex-wrap gap-2 mt-1">
              {["React Native", "HTML/CSS/JS", "MongoDB", "Git", "React", "NodeJS", "Firebase", "A.I Prompt"].map((tech) => (
                <span key={tech} className="border border-current rounded-full px-3 py-[2px] text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* SKILLS / TECH STACK */}
        <div className="flex flex-col gap-3">
          <div className="text-[22px] font-bold uppercase border-b-2 pb-2">Skills / Tech Stack</div>
          <div className="flex flex-wrap gap-2">
            {["React Native", "React", "HTML", "CSS", "JavaScript", "NodeJS", "MongoDB", "Firebase", "Git", "ESP8266", "A.I Prompt"].map((skill) => (
              <span key={skill} className="border border-current rounded-full px-3 py-[2px] text-xs font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}