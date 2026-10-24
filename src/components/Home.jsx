import { useTranslation } from "react-i18next"

function Home() {
  const { t } = useTranslation()
  return (
    <div
      id="home"
      className="flex items-center justify-center min-h-[100svh] flex-col lg:flex-row lg:justify-between gap-12 lg:gap-8 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 pt-28 md:pt-32 pb-12"
    >
      <div className="left-side text-white w-full lg:w-1/2">
        <div className="headline text-4xl sm:text-5xl lg:text-6xl font-bold text-left">
          <span className="text-white ">{t("heroHeadlineText")}</span>
          <br />
          <span className="animate-gradient bg-gradient-to-r from-violet-400 via-fuchsia-500 to-violet-400 bg-[length:200%_auto] bg-clip-text text-transparent">
            {t("heroHighlightedText")}
            <span className="text-white">.</span>
          </span>
        </div>

        <div className="description text-base sm:text-lg lg:text-xl max-w-xl text-left mt-5 opacity-50 font-medium flex flex-wrap">
          {t("heroDescriptionText")}
        </div>

        <div className="buttons flex flex-col sm:flex-row gap-3 mt-5"></div>

        <div className="info-badges flex flex-wrap mt-5 items-center text-xs sm:text-sm gap-2 font-medium">
          <span className="inline-flex bg-transparent px-3.5 py-1 rounded-full border border-purple-400 items-center">
            {t("heroBadgeCreatedText")}
          </span>
          <span className="inline-flex bg-transparent px-3.5 py-1 rounded-full border border-purple-400 items-center">
            {t("heroBadgeBuildText")}
          </span>
        </div>
      </div>

      <div className="right-side text-white w-full lg:w-1/2 flex items-center justify-center">
        Two
      </div>
    </div>
  )
}

export default Home
