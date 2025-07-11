import { useState } from 'react'
import './App.css'
import { Button } from "@/components/ui/button";
import { Mail, Smile, BookOpen, Moon, Sun } from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 sm:p-8  ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`} style={{ fontFamily: 'font-mono, monospace' }}>
      <div className="absolute top-4 right-4">
        <Button variant="outline" className={darkMode ? "bg-gray-700 text-white border-white w-full sm:w-auto aspect-square flex" : "bg-white text-black border-black w-full sm:w-auto aspect-square flex"} onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </Button>
      </div>
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="flex flex-col items-center">
          <img
            src="/intro/linkedin_photo.jpg"
            alt="Profile"
            className="w-32 h-32 sm:w-48 sm:h-48 rounded-full shadow-lg"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold">Susu Hu</h1>
          <p className={`${darkMode ? 'text-gray-700' : 'text-gray-300'} text-sm mt-1 w-max italic`}>You can call me Su :)</p>

          <section className="mt-6 w-full">
            <p className="mt-2 text-sm sm:text-base text-justify" style={{ fontFamily: 'font-mono, monospace' }}>
              I am a doctoral student at <a href="https://www.nct-dresden.de/en/research/departments-and-groups/translational-surgical-oncology" className="text-orange-400 font-bold" target="_blank">National Center for Tumor Disease (NCT)</a>,
              specializing in geometry machine learning for surgical outcome prediction. My research integrates graph-based tissue analysis and molecular profiling
              to advance precision oncology. I obtained my M.Sc. in Computational Modeling and Simulation at <a href="https://tu-dresden.de/" className="text-orange-400 font-bold" target="_blank">Dresden University of Technology</a>. Here is my <a href="/intro/Susu_Hu_CV_2025.pdf" className="text-orange-400 italic" target="_blank">curriculum vitae</a>.
            </p>
          </section>

          <section className="mt-6 w-full">
            <div className="flex flex-row gap-4 mt-2 justify-center md:justify-start">
              <a href="mailto:susu.hu@outlook.com">
                <Button variant="outline" className={darkMode ? "bg-gray-700 text-white border-white w-full sm:w-auto aspect-square flex items-center justify-center relative group" : "bg-white text-black border-black w-full aspect-square flex items-center justify-center relative group"}>
                  <Mail className="w-5 h-5" />
                  <span className={`absolute bottom-full mb-2 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity ${darkMode ? 'bg-white text-black' : 'bg-gray-700 text-white'}`}>Email</span>
                </Button>
              </a>
              <a href="https://scholar.google.com/citations?user=jrUCmgEAAAAJ&hl=en" target="_blank">
                <Button variant="outline" className={darkMode ? "bg-gray-700 text-white border-white w-full sm:w-auto aspect-square flex items-center justify-center relative group" : "bg-white text-black border-black w-full aspect-square flex items-center justify-center relative group"}>
                  <BookOpen className="w-5 h-5" />
                  <span className={`absolute bottom-full mb-2 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity ${darkMode ? 'bg-white text-black' : 'bg-gray-700 text-white'}`}>Google Scholar</span>
                </Button>
              </a>
              <a href="https://huggingface.co/HuSusu" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className={darkMode ? "bg-gray-700 text-white border-white w-full sm:w-auto aspect-square flex items-center justify-center relative group" : "bg-white text-black border-black w-full aspect-square flex items-center justify-center relative group"}>
                  <Smile className="w-5 h-5" />
                  <span className={`absolute bottom-full mb-2 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity ${darkMode ? 'bg-white text-black' : 'bg-gray-700 text-white'}`}>Hugging Face</span>
                </Button>
              </a>
            </div>
          </section>
        </div>
      </div >
    </div >
  );
}
