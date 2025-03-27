import { useInfosStore } from "../stores/useInfos";

export default function UserProfile() {
    const { time, firstName, lastName, email, phoneNr, setTime, setFirstName } = useInfosStore();

    const allInfos = [
        { label: 'First Name:', value: firstName },
        { label: 'Last Name:', value: lastName },
        { label: 'Email:', value: email, className: 'italic' },
        { label: 'Phone Number:', value: phoneNr },
        { label: 'Best Time to Reach You:', value: time },
    ];

    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-4xl text-center mb-7">User Profile</h1>
            <div className="bg-white p-6 rounded-lg shadow-md md:w-[600px] w-full">
                {
                    allInfos.map((field) => (
                        <div className="flex gap-1 mb-4">
                            <p className="font-semibold text-gray-600">{field.label}</p>
                            <p className={`font-semibold ${field.className}`}>{field.value}</p>
                        </div>
                    ))
                }
            </div>
            <button className="mt-4 p-2 cursor-pointer border-2 border-gray-400 bg-white text-gray-600 hover:bg-gray-100 transition-colors duration-200 rounded-lg"
                onClick={() => {
                    setTime("");
                    setFirstName("");
                }}>Reset Form</button>
        </div>
    )
}