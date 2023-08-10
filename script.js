// Fetching the player stats data on page load
// Top scorer data
const baseUrl = 'https://spectacular-lebkuchen-7b3879.netlify.app'; 

fetch(`${baseUrl}/.netlify/functions/fetch-top-scorer`)
.then((topScorerResource) => topScorerResource.json())
.then((topScorerData) => {
    const topScorerImage = document.getElementById('topScorerImage');
    const topScorerText = document.getElementById('topScorerText');

    topScorerImage.src = topScorerData.image;
    topScorerText.textContent = `${topScorerData.name} has scored ${topScorerData.goals} goals and provided ${topScorerData.assists} assists.`;
})
.catch((topScorerError) => console.error('Error fetching top scorer data:', topScorerError));

// Top assister data
fetch(`${baseUrl}/.netlify/functions/fetch-top-assister`)
.then((topAssisterResource) => topAssisterResource.json())
.then((topAssisterData) => {
    const topAssisterImage = document.getElementById('topAssisterImage');
    const topAssisterText = document.getElementById('topAssisterText');

    topAssisterImage.src = topAssisterData.image;
    topAssisterText.textContent = `${topAssisterData.name} has scored ${topAssisterData.goals} and provided ${topAssisterData.assists} assists.`;
})
.catch((topAssisterError) => console.error('Error fetching top assister data:', topAssisterError));

// Top goalkeeper data
fetch(`${baseUrl}/.netlify/functions/fetch-top-goalkeeper`)
.then((topGoalkeeperResource) => topGoalkeeperResource.json())
.then((topGoalkeeperData) => {
    const topGoalkeeperImage = document.getElementById('topGoalkeeperImage');
    const topGoalkeeperText = document.getElementById('topGoalkeeperText');

    topGoalkeeperImage.src = topGoalkeeperData.image;
    topGoalkeeperText.textContent = `${topGoalkeeperData.name} has produced ${topGoalkeeperData.clean_sheets} clean sheets and conceded ${topGoalkeeperData.goals_conceded} goals only.`;
})
.catch((topGoalkeeperError) => console.error('Error fetching top goalkeeper data:', topGoalkeeperError));

// Promising talent data
fetch(`${baseUrl}/.netlify/functions/fetch-top-promising-talent`)
.then((promisingTalentResource) => promisingTalentResource.json())
.then((promisingTalentData) => {
    const promisingTalentImage = document.getElementById('promisingTalentImage');
    const promisingTalentText = document.getElementById('promisingTalentText');

    promisingTalentImage.src = promisingTalentData.image;
    promisingTalentText.textContent = `${promisingTalentData.name} is a ${promisingTalentData.position} and is ${promisingTalentData.age} years old.`;
})
.catch((promisingTalentError) => console.error('Error fetching promising talent data:', promisingTalentError));

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

    // Sending the retrieved data to your JSON using POST
    const signUpForm = document.getElementById("signUpForm");

    fetch(`${baseUrl}/new_user`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then((response) => response.json())
    .then((newUserData) => {
        // Display success alert
        document.getElementById("successAlert").style.display = "block";

        // Hide the alert after a delay (e.g., 5 seconds)
        setTimeout(() => {
            document.getElementById("successAlert").style.display = "none";
        }, 5000);

        signUpForm.reset();
    })
    .catch((newUserError) => console.error('Error signing up:', newUserError));
});
