import { useTranslation } from "react-i18next"
import UniMateMainIcon from "../assets/images/unimate-web-logo.png"
import LanguageSelector from "./LanguageSelector"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

const navPages = ["navbarHome", "navbarFeature", "navbarAbout", "navbarFAQ"]

function Navbar() {
  const { t } = useTranslation()

  const [activePage, setActivePage] = useState(navPages[0])
  const [isOpen, setIsOpen] = useState(false)

  const scrollToView = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" })
  }

  const handleNavClick = (page) => {
    setActivePage(page)
    scrollToView(page.replace("navbar", "").toLowerCase())
    setIsOpen(false)
  }

  return (
    <nav className="fixed left-1/2 top-7 z-10 flex h-16 w-[calc(100%-5rem)] max-w-[1800px] -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-[#090711]/80 px-8 py-4 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div className="logo-section flex items-center gap-3">
        <div className="logo size-10">
          <img
            src={UniMateMainIcon}
            alt="UniMate Logo"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="text-2xl font-bold text-white">UniMate</div>
      </div>

      <ul className="menu-section gap-8 hidden md:flex items-center text-white font-bold">
        {navPages.map((page) => {
          const isActive = activePage === page
          return (
            <li
              key={page}
              className={`cursor-pointer ${isActive ? "text-white" : "text-slate-600"} hover:text-white transition-colors duration-300 ease-in-out`}
              onClick={() => handleNavClick(page)}
            >
              {t(page)}
            </li>
          )
        })}
        {/*Change Language*/}
        <li>
          <LanguageSelector />
        </li>
      </ul>

      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>

      {isOpen && (
        <ul className="md:hidden absolute top-full right-0 mt-2 w-48 flex flex-col gap-4 rounded-lg bg-stone-950 border border-slate-700 p-4 shadow-lg">
          {navPages.map((page) => {
            const isActive = activePage === page
            return (
              <li
                key={page}
                className={`cursor-pointer ${isActive ? "text-white" : "text-slate-400"} hover:text-white transition-colors duration-300`}
                onClick={() => handleNavClick(page)}
              >
                {t(page)}
              </li>
            )
          })}
          {/*Change Language*/}
          <li>
            <LanguageSelector />
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
