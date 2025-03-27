
export default function Footer() {

    return (
        <div className="bg-[#ebebeb] min-h-screen mt-4">
            <div className="flex flex-col mx-auto md:w-[60%] w-full p-1 gap-5 text-start">
                <p className="mt-5">This site is not a part of the Facebook website or Facebook Inc.
                    Additionally, Facebook does NOT endorse this site.
                    FACEBOOK is a trademark of FACEBOOK, Inc.
                    This site is not a part of the YouTube website or Google, LLC.
                    Additionally, this site is NOT endorsed by Google in any way.</p>
                <p>
                    While we may provide you preliminary information on whether you qualify for compensation, your local governing body ultimately determines who qualifies and what claims are paid.
                    This site is provided for informational purposes only.
                    If you have questions about whether you qualify, please contact an attorney.</p>
                <p>THIS IS A PAID ATTORNEY / ADVOCATE ADVERTISEMENT.</p>
                <p className="italic">*While we may provide you preliminary information on whether you may qualify for compensation, the U.S. District Court:
                    Eastern District of North Carolina ultimately determines who qualifies and what claims are paid.
                    This site is provided for informational purposes only.
                    If you have questions about whether you qualify, please contact an attorney.</p>
                <p>This website uses Google Analytics and Google Ads to track your journey for marketing purposes. If you wish to opt-out of user-tracking, <span className="underline underline-offset-2 hover:cursor-pointer">click here</span>.</p>
            </div>

        </div>
    )
}