import bgImage from "../assets/images/istockphoto-1309717274-612x612.jpg"

const MobileRedirect = () => {
    return (
        <div className="size-full h-screen w-screen flex items-center justify-center text-center text-[#000]">
            <div className="mobile-redirect-content">
                <img src={bgImage} alt="Not mobile view image" />
                <h1>Mobile Version Coming Soon</h1>
                <p>This application is currently optimized for desktop view.</p>
                <div className="mobile-redirect-options">
                </div>
            </div>
        </div>
    );
};

export default MobileRedirect;