import { phones } from "../data/phones"

function HomePhones() {
  return (
    <div className="relative w-full h-[520px] lg:h-[680px] [perspective:1800px]">
      {phones.map(({ src, pos, tf, delay }, i) => (
        <div
          key={i}
          className={`absolute w-[170px] sm:w-[200px] lg:w-[236px] aspect-[320/695] ${pos}`}
          style={{ transform: tf }}
        >
          <div
            className="animate-float motion-reduce:animate-none relative h-full rounded-[38px] p-[7px] bg-gradient-to-br from-zinc-600 via-zinc-950 to-zinc-800 shadow-[0_0_0_1px_#000,inset_0_0_0_1.5px_rgba(190,120,255,0.45),0_40px_80px_-10px_rgba(10,0,30,0.9),0_0_90px_-10px_rgba(160,80,255,0.55)]"
            style={{ animationDelay: delay }}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full rounded-[32px] object-cover"
            />
            <span className="absolute top-[17px] left-1/2 -translate-x-1/2 h-5 w-[70px] rounded-full bg-black" />
            <span className="pointer-events-none absolute inset-[7px] rounded-[32px] bg-gradient-to-br from-white/15 via-transparent to-fuchsia-400/20" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default HomePhones
