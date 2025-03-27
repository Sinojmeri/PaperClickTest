import { useInfosStore } from "../stores/useInfos";
import { FormEvent } from "react";

export default function Time() {

    const { setTime } = useInfosStore();

    const times: string[] = ["Choose Your Time", "1 AM CST", "2 AM CST", "3 AM CST", "4 AM CST", "5 AM CST", "6 AM CST", "7 AM CST", "8 AM CST", "9 AM CST", "10 AM CST",
        "11 AM CST", "12 AM CST", "1 PM CST", "2 PM CST", "3 PM CST", "4 PM CST", "5 PM CST", "6 PM CST", "7 PM CST", "8 PM CST", "9 PM CST", "10 PM CST", "11 PM CST", "12 PM CST"];

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const selectedTime = formData.get("Time") as string; setTime(selectedTime);
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-4xl text-center mb-7">What is the best time to reach you?</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-center">
                    <select name="Time" id="time" className="md:w-[300px] border-2 border-black rounded-lg p-1 appearance-none text-center text-lg text-gray-500 opacity-80">
                        {
                            times.map((time) => (
                                <option key={time} value={time}>{time}</option>
                            ))
                        }
                    </select>
                    <p className="font-light text-center">( All times are in CST )</p>
                    <button className="bg-blue-500 rounded-lg p-2 text-white text-lg mt-7 md:w-[300px] hover:cursor-pointer hover:bg-blue-600"
                        type="submit"
                    >Continue</button>
                </div>
            </form>
            <div className="mt-7 mb-2 flex gap-2 md:flex-row flex-col items-center">
                <p className="hover: cursor-pointer">Terms and Conditions</p>
                <div className="w-[1px] h-7 bg-black hidden md:block" />
                <p className="hover: cursor-pointer">Privacy Policy</p>
                <div className="w-[1px] h-7 bg-black hidden md:block" />
                <p className="hover: cursor-pointer">California Privacy</p>
            </div>
        </div >
    )
}