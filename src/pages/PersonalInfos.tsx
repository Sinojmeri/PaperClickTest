import { FormEvent } from "react";
import { useInfosStore } from "../stores/useInfos";

export default function PersonalInfos() {

    const { setFirstName, setLastName, setEmail, setPhoneNr, setIsChecked } = useInfosStore();

    function trimFormData(formData: FormData) {
        return {
            firstName: (formData.get("firstName") as string).trim(),
            lastName: (formData.get("lastName") as string).trim(),
            email: (formData.get("email") as string)?.trim(),
            phoneNr: (formData.get("phoneNr") as string),
            checked: formData.get("conditions") === "on",
        };
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const { firstName, lastName, email, phoneNr, checked } = trimFormData(formData);
        setFirstName(firstName);
        setLastName(lastName);
        setEmail(email);
        setPhoneNr(phoneNr);
        setIsChecked(checked);
    }

    return (
        <div>
            <h1 className="font-bold text-4xl text-center mb-7">Add Your Personal Details</h1>
            <div className="flex flex-col items-center gap-3">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center gap-3">
                        <input
                            name="firstName"
                            type="text"
                            required
                            className="bg-[#fafafa] p-2 border-2 border-gray-300 shadow-md rounded-lg md:w-[600px] w-[99%] mx-auto"
                            placeholder="First name"
                        />
                        <input
                            name="lastName"
                            type="text"
                            required
                            className="bg-[#fafafa] p-2 border-2 border-gray-300 shadow-md rounded-lg md:w-[600px] w-[99%] mx-auto"
                            placeholder="Last name"
                        />
                        <input
                            name="email"
                            type="text"
                            required
                            className="bg-[#fafafa] p-2 border-2 border-gray-300 shadow-md rounded-lg md:w-[600px] w-[99%] mx-auto"
                            placeholder="Email"
                        />
                        <input
                            name="phoneNr"
                            type="tel"
                            required
                            inputMode="tel"
                            className="bg-[#fafafa] p-2 border-2 border-gray-300 shadow-md rounded-lg md:w-[600px] w-[99%] mx-auto"
                            placeholder="Phone Number"
                            onKeyDown={(e) => {
                                const allowedKeys = [
                                    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+',
                                    'Backspace',
                                    'ArrowLeft',
                                    'ArrowRight',
                                    'Delete',
                                ];
                                if (!allowedKeys.includes(e.key)) {
                                    e.preventDefault();
                                }
                            }}
                        />
                        <div className="flex p-1 bg-[#fafafa] items-start md:w-[600px]">
                            <input name="conditions" type="checkbox" className="m-1" required/>
                            <p>By clicking the button above, you acknowledge, consent and agree to the following:
                                a) Our Privacy Policy and consent to receive notices and other communications electronically;
                                b) We take your privacy seriously. You are providing express written consent for to share your information with up to four (4) of its and for , parties calling on behalf of , or authorized third parties on their behalf to contact you (including through automated means; e.g. autodialing, text and pre-recorded messaging) about legal services or other Mass Tort related offers via telephone, mobile device (including SMS and MMS) and/or email, even if your telephone number is currently listed on any state, federal, local or corporate Do Not Call list;
                                c) Consent to be contacted is not required in order to purchase goods or services from or the that contact you.
                                You may choose to speak with an individual service provider by dialing (888) 888-8888.</p>
                        </div>
                        <button className="md:w-[300px] p-1 text-white rounded-lg bg-[#799efe] h-[50px] hover:cursor-pointer hover:bg-[#7994d8]"
                            type="submit"
                        >Submit Your Details</button>
                    </div>
                </form>
                <div className="mt-7 mb-2 flex gap-2 md:flex-row flex-col items-center">
                    <p className="hover: cursor-pointer">Terms and Conditions</p>
                    <div className="w-[1px] h-7 bg-black hidden md:block" />
                    <p className="hover: cursor-pointer">Privacy Policy</p>
                    <div className="w-[1px] h-7 bg-black hidden md:block" />
                    <p className="hover: cursor-pointer">California Privacy</p>
                </div>
            </div>
        </div>
    )
}