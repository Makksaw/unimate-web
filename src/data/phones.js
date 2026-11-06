import PhoneMain from "../assets/images/phone-main.webp"
import PhoneNews from "../assets/images/phone-news.webp"
import PhoneSocials from "../assets/images/phone-socials.webp"

export const phones = [
  {
    src: PhoneMain,
    pos: "left-0 top-[14%]",
    tf: "rotateY(26deg) rotateX(5deg) rotateZ(-9deg)",
    delay: "-2s",
  },
  {
    src: PhoneSocials,
    pos: "left-[48%] top-[20%]",
    tf: "rotateY(-26deg) rotateX(4deg) rotateZ(9deg)",
    delay: "-4s",
  },
  {
    src: PhoneNews,
    pos: "left-[24%] top-[2%] z-10",
    tf: "rotateY(-10deg) rotateZ(4deg)",
    delay: "0s",
  },
]
