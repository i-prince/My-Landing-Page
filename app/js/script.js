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
