import { useInfosStore } from "../stores/useInfos"
import Time from "../pages/Time";
import PersonalInfos from "../pages/PersonalInfos";
import UserProfile from "../pages/UserProfile";

export default function ProfileManager() {
    const { time, firstName, lastName, email, phoneNr, isChecked } = useInfosStore();
    let content;

    if (time === "" || time === "Choose Your Time") {
        content = <Time />
    }
    else if (!firstName || !lastName || !email || !phoneNr || !isChecked) {
        content = <PersonalInfos />
    } else content = <UserProfile />
    
    return (
        <div>{content}</div>
    )
}