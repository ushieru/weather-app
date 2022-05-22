import Image from "next/image";

const CloudCarrusel = () => {
    return <>
        <div className="h-52 w-full whitespace-nowrap slider rounded-t-[50px]">
            <div className="slideTrack">
                {Array.from(Array(2).keys()).map((clouds, key) =>
                    <div key={key} className='inline-block '>
                        <Image
                            height={209}
                            width={374}
                            className="object-contain"
                            src={'/assets/clouds.svg'}
                        />
                    </div>
                )}
            </div>
        </div>
    </>
}
export default CloudCarrusel;