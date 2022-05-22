import type { NextPage } from 'next'
import { History } from '../@types/history';
import CloudCarrusel from "../src/components/CloudsCarrusel";
import { WeatherIcons } from "../src/components/WeatherIcons";

const Home: NextPage<Props> = ({ maxTemp, minTemp, condition, name, temp }) => {
  return <>
    <main className="relative overflow-hidden min-h-screen flex justify-center">
      <div className="absolute bg-[#0A1C2D] h-[548px] w-[548px] rounded-full top-[-125px]" />

      <div className="sticky w-[294px] h-[470px] mt-8 ">
        <div className="h-full w-full bg-gradient-to-b from-[#0069A4] to-[#00C2FF] rounded-[50px] main-shadow absolute top-0" />

        <div className="w-full h-full relative">
          <div className="relative overflow-hidden h-full">
            <CloudCarrusel />
            <div className="absolute main-glass inset-0">
              <WeatherIcons />
              <div className="flex flex-col items-center text-white">
                <span className="font-extralight text-[128px] leading-tight">{temp}°</span>
                <span className="font-medium text-[40px]">{name}</span>
                <span>{condition}</span>
                <span>Minima {minTemp}° - Maxima {maxTemp}°</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </main>
  </>
}

export async function getServerSideProps() {
  const responseHistory = await fetch('http://localhost:3000/api/weather?q=guadalajara')
  const { forecast, location } = await responseHistory.json() as History
  const maxTemp = forecast.forecastday[0].day.maxtemp_c
  const minTemp = forecast.forecastday[0].day.mintemp_c
  const condition = forecast.forecastday[0].day.condition.text
  const name = location.name
  const hour = Number(location.localtime.split(' ')[1].split(':')[0]) - 1
  const temp = forecast.forecastday[0].hour[hour].temp_c.toString().split('.')[0]
  return {
    props: {
      maxTemp,
      minTemp,
      condition,
      name,
      temp
    }
  }
}

interface Props {
  maxTemp: string
  minTemp: string
  condition: string
  name: string
  temp: string
}

export default Home