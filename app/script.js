// Fetching the player stats data on page load
// Top scorer data
fetch('http://localhost:3000/top_scorer')
.then((topScorerResource) => topScorerResource.json())
.then((topScorerData) => {
    const topScorerImage = document.getElementById('topScorerImage');
    const topScorerText = document.getElementById('topScorerText');

    topScorerImage.src = topScorerData.image; // Rendering the image to the webpage
    topScorerText.textContent = `${topScorerData.name} has scored ${topScorerData.goals} goals and provided ${topScorerData.assists} assists.`; // rendering the text content to the webpage 
})
.catch((topScorerError) => alert('invalid request'))

// Top assister data
fetch('http://localhost:3000/top_assister')
.then((topAssisterResource) => topAssisterResource.json())
.then((topAssisterData) => {
    const topAssisterImage = document.getElementById('topAssisterImage');
    const topAssisterText = document.getElementById('topAssisterText');

    topAssisterImage.src = topAssisterData.image;
    topAssisterText.textContent = `${topAssisterData.name} has scored ${topAssisterData.goals} and provided ${topAssisterData.assists} assists`
})
.catch((topAssisterError) => alert('invalid request'))

// Top goalkeeper data
fetch('http://localhost:3000/top_goalkeeper')
.then((topGoalkeeperResource) => topGoalkeeperResource.json())
.then((topGoalkeeperData) => {
    const topGoalkeeperImage = document.getElementById('topGoalkeeperImage');
    const topGoalkeeperText = document.getElementById('topGoalkeeperText');

    topGoalkeeperImage.src = topGoalkeeperData.image;
    topGoalkeeperText.textContent = `${topGoalkeeperData.name} has produced ${topGoalkeeperData.clean_sheets} clean sheets and conceded ${topGoalkeeperData.goals_conceded} goals only`
})
.catch((topGoalkeeperError) => alert('invalid request'))

// Promising talent data
fetch('http://localhost:3000/promising_talent')
.then((promisingTalentResource) => promisingTalentResource.json())
.then((promisingTalentData) => {
    const promisingTalentImage = document.getElementById('promisingTalentImage');
    const promisingTalentText = document.getElementById('promisingTalentText');

    promisingTalentImage.src = promisingTalentData.image;
    promisingTalentText.textContent = `${promisingTalentData.name} is a ${promisingTalentData.position} and is ${promisingTalentData.age} years old`
})
.catch((promisingTalentError) => alert('invalid request'))

// Signing up for an account
    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const name = document.getElementById("name").value;
        const password = document.getElementById("password").value;

        const userData = {
            email: email,
            name: name,
            password: password
        };

        // Sending the retrieved data to my JSON using POST
        const signUpForm = document.getElementById("signUpForm");

        fetch('http://localhost:3000/new_user', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then((newUserResource) => newUserResource.json())
        .then((newUserData) => {
            // Display success alert
            document.getElementById("successAlert").style.display = "block";

            // Hide the alert after a delay (e.g., 5 seconds)
            setTimeout(() => {
                document.getElementById("successAlert").style.display = "none";
            }, 5000); // Adjust the time delay as needed

            signUpForm.reset();
        })

        .catch((newUserError) => console.log("Invalid Request"));
    });






