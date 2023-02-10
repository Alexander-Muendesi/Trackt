import Navbar from "../homepage/Navbar";
import Footer from "../homepage/Footer";
import "./FeaturesPage.css";

function FeaturesPage() : JSX.Element{
    return (
        <>
            <Navbar/>
            <div className="feature-container">
                <p>
                    Achieving your goals can be a challenge, but with Trackt, you'll have a comprehensive set of features 
                    that can help make the process easier. From setting goals and breaking them down into smaller tasks, to 
                    tracking progress and staying on schedule, Trackt can help you reach your objectives with greater ease.
                </p>
                <h1>Goal Management</h1>
                <p>
                    This feature allows you to create, edit, and delete your goals with ease. 
                    You can assign a priority, set a deadline, add a description, and more, to help you stay focused and motivated.
                </p>
                <h1>Task Management</h1>
                <p>
                    With Trackt's task management feature, you can break down your goals into smaller, 
                    more manageable tasks, and track the progress of each one. As you complete each task, 
                    you'll be one step closer to achieving your end goal.
                </p>
                <h1>Reminders</h1>
                <p>
                    To help you stay on track, Trackt allows you to set up reminders for tasks and deadlines. 
                    This way, you'll never forget what needs to be done, and you can stay focused on reaching your goals.
                </p>
                <h1>Calendar</h1>
                <p>
                    Get a bird's eye view of your goals with Trackt's calendar feature. 
                    You can visualize and plan out your progress over time, see deadlines, schedule reminders, 
                    and map out the steps you need to take to reach your goals.
                </p>
                <h1>Progress Reports</h1>
                <p>
                    With Trackt, you can generate progress reports that give you a detailed view of your past goals. 
                    You'll see completion rates, time spent, and other key metrics that can help you reflect on your 
                    progress and make informed decisions about your goals moving forward.
                </p>
            </div>
            <Footer/>
        </>
    )
};

export default FeaturesPage;