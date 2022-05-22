export const WeatherIcons = () => {
    return <>
        <div className="w-[294px] h-[167px] mt-[22px] flex justify-center items-center">
            <SunIcon />
        </div>
    </>
}
const SunIcon = () => {
    return <>
        <div style={{ background: 'linear-gradient(225deg, #FEF008 0%, #FFFBB8 100%)', boxShadow: ' 0px 0px 25px rgba(254, 240, 8, 0.5)' }}
            className="rounded-full w-[125px] h-[125px]"
        />
    </>
}