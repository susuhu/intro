import { useState } from 'react'
import './App.css'
import { Button } from "@/components/ui/button";
import { Mail, Smile, BookOpen, Moon, Sun } from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen flex items-center justify-center p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`} style={{ fontFamily: 'font-mono, monospace' }}>
      <div className="absolute top-4 right-4">
        <Button variant="outline" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun className="w-5 h-5 mr-2" /> : <Moon className="w-5 h-5 mr-2" />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </div>
      <div className="max-w-4xl w-full grid grid-cols-2 gap-8 items-start">
        <div className="flex flex-col items-center">
          <img
            src="/linked_files/linkedin_photo.jpeg"
            alt="Profile"
            className="w-48 h-48 rounded-full shadow-lg"
          />
        </div>
        <div className="text-left">
          <h1 className="text-3xl font-bold">Susu Hu</h1>

          <section className="mt-6 w-full">
            <p className="mt-2" style={{ fontFamily: 'font-mono, monospace' }}>
              I am a Doctoal student at <a href="https://www.nct-dresden.de/en/research/departments-and-groups/translational-surgical-oncology" className="text-orange-400 font-bold" target="_blank">National Center for Tumor Disease (NCT) Dresden</a>, specializing in geometry machine learning for surgical outcome prediction, including graph-based tissue analysis
              and molecule profiling for cancer detection and subtyping. Here is my <a href="/linked_files/Susu_Hu_CV_2025.pdf" className="text-orange-400 font-bold" target="_blank">curriculum vitae</a>.
            </p>
          </section>

          <section className="mt-6 w-full">
            <div className="flex gap-4 mt-2">
              <a href="mailto:susu.hu@outlook.com">
                <Button variant="outline">
                  <Mail className="w-5 h-5 mr-2" /> Email
                </Button>
              </a>
              {/* 
              <Button variant="outline">
                <Github className="w-5 h-5 mr-2" /> GitHub
              </Button>
               */}
              <a href="https://scholar.google.com/citations?user=jrUCmgEAAAAJ&hl=en" target="_blank">
                <Button variant="outline">
                  <BookOpen className="w-5 h-5 mr-2" /> Google Scholar
                </Button>
              </a>
              <a href="https://huggingface.co/HuSusu" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <Smile className="w-5 h-5 mr-2" /> Hugging Face
                </Button>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
