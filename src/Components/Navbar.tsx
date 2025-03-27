
export default function Navbar() {

    return (
        <div className="flex flex-col gap-2 mb-3">
            <div className="flex items-center md:w-[80%] w-full mx-auto justify-between p-2">
                <div className="flex flex-col items-center">
                    <img src="/Logo.svg" alt="Logo" />
                    <p className="text-[#24b4ec] font-semibold">moving people</p>
                </div>
                <div className="flex md:gap-7 items-center md:flex-row flex-col justify-center">
                    <p className="text-[#0452c0] font-bold text-sm md:text-base text-center md:whitespace-nowrap">Talk to a consolidation specialist</p>
                    <div className="flex items-center gap-2 md:w-full">
                        <img src="/phone.png" alt="phone" className="w-[20px] h-[20px]" />
                        <div className="flex items-center gap-1">
                            <p className="text-[#0452c0] ">(888)</p>
                            <p className="text-[#0452c0] ">888-8888</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[5px] bg-[#D3D3D3]"/>
        </div>

    )
}