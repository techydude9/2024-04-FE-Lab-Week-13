


function WelcomeSection () {
    let date = new Date()
    
    let singleUser = {
        name: 'John',
        time: date.toDateString(),
        }

    return (<div className="welcomeSection">
        <h1>Welcome, {singleUser.name}</h1>
        <p>Today's date is: {singleUser.time}</p>
    </div>

    )
}

export default WelcomeSection;