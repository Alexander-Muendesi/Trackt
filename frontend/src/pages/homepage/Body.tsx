import crosshair from './goal.png';

function Body(){
    return(
        <>
            <main className="main-item">
                <p className='welcome-text'>Welcome to Trackt!</p>

                <p>
                Are you tired of setting goals and never following through?
                Are you looking for a way to stay motivated and on track?
                Look no further.
                </p>

                <p><img src={crosshair} alt="Cross Hair" className='crosshair-img'/></p>
                <p>
                Our goal tracking app is here to help you set, track, and achieve your goals. 
                </p>
                <p>
                With our easy to use interface, you can quickly add and update your goals, and track your progress
                along the way. 
                </p>

                <p>Our app also includes features such as reminders, motivation quotes and the 
                ability to share your goals with friends and accountability partners.
                </p>
                <p>Don't let your goals be just wishes - make them a reality with our goal tracking app.
                        
                Start taking control of your future today and click signup now!
                </p>
                <a href="#" className='call-to-action'>SIGN UP</a>
            </main>
        </>
    );
};

export default Body;