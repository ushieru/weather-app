import CloudCarrusel from "../src/components/CloudsCarrusel";
import { WeatherIcons } from "../src/components/WeatherIcons";

export default function Home() {
  return <>
    <main className="relative overflow-hidden min-h-screen flex justify-center">
      <div className="absolute bg-[#0A1C2D] h-[548px] w-[548px] rounded-full top-[-125px]" />

      <div className="sticky w-[294px] h-[470px] mt-8 ">
        <div className="h-full w-full bg-gradient-to-b from-[#0069A4] to-[#00C2FF] rounded-[50px] main-shadow absolute top-0" />

        <div className="w-full h-full  sticky overflow-hidden rounded-t-[50px]">
          <div className="relative overflow-hidden  h-full">
            <CloudCarrusel />
            <div className="absolute main-glass inset-0">
              <WeatherIcons />
              <div className="flex flex-col items-center text-white">
                <span className="font-extralight text-[128px] leading-tight">33°</span>
                <span className="font-medium text-[40px]">Guadalajara</span>
                <span>Soleado</span>
                <span>Minima 21° - Maxima 34°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
}