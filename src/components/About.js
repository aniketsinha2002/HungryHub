import User from "./User";
import UserClass from "./UserClass";

const About = () => {


    return (
        <div>
            <h1 className="font-bold text-2xl">About</h1>
            {/* <div className="user-cards">
                <User name={"Aniket Sinha"} />
            </div> */}
            
            <div className="user-cards">
                <UserClass name={"User Class -> class based comp"} />
            </div>
        </div>
    );
};

export default About;