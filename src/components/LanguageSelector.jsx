import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Button,
} from "@material-tailwind/react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { useTranslation } from "react-i18next"
import { languages } from "../data/languages"
import { useState } from "react"

function LanguageSelector() {
  const { i18n } = useTranslation()
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <Menu
      open={openMenu}
      handler={setOpenMenu}
      animate={{ mount: { y: 0 }, unmount: { y: 25 } }}
      allowHover
    >
      <MenuHandler>
        <Button className="flex items-center gap-2 outline-none focus:outline-none">
          {languages.find((lang) => lang.includes(i18n.language)).split(" ")[0]}{" "}
          {i18n.language.toUpperCase()}
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform duration-200 ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="bg-stone-900 border rounded-lg w-20 border-neutral-700 text-white z-50 outline-none focus:outline-none">
        {languages.map((lang) => {
          const decodedLang = lang.split(" ")[1]
          return (
            <MenuItem
              key={decodedLang}
              className="font-medium"
              onClick={() => {
                i18n.changeLanguage(decodedLang)
                setOpenMenu(false)
              }}
            >
              {lang.toUpperCase()}
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}

export default LanguageSelector
