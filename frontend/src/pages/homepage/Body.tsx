import crosshair from './goal.png';

function Body(){
    return(
        <>
            <main className="main-item">
                <p className='welcome-text'>Unlock your potential and turn your dreams into realities with Trackt!</p>

                <p>
                Our advanced goal tracking system helps you overcome obstacles and 
                reach your full potential. Tired of setting goals and never following 
                through? With our easy-to-use interface, you can quickly add and update your 
                goals, and track your progress along the way.
                </p>

                <img src={crosshair} alt="Cross Hair" className='crosshair-img'/>
                <p>
                Take control of your future and start achieving your 
                goals today with our app. Our app reminds you of your goals daily, 
                provides inspiration with motivational quotes, and allows you to share 
                your progress with friends for accountability. 
                </p>
                <p>Join the thousands of users who have transformed their lives with Trackt. 
                    Don't let your goals be just wishes, make them a reality. 
                    Sign up now and start taking control of your future today!
                </p>
                <a href="#" className='call-to-action'>SIGN UP</a>
            </main>
        </>
    );
};

export default Body;