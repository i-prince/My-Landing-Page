// Fetching the player stats data on page load
// Top scorer data
fetch('http://localhost:3000/top_scorer')
.then((topScorerResource) => topScorerResource.json())
.then((topScorerData) => {
    const topScorerImage = document.getElementById('topScorerImage');
    const topScorerText = document.getElementById('topScorerText');

    topScorerImage.src = topScorerData.image; // Rendering the image to the webpage
})
.catch((topScorerError) => alert('invalid request'))

// Top assister data
fetch('http://localhost:3000/top_assister')
.then((topAssisterResource) => topAssisterResource.json())
.then((topAssisterData) => {
    const topAssisterImage = document.getElementById('topAssisterImage');
    const topAssisterText = document.getElementById('topAssisterText');

    topAssisterImage.src = topAssisterData.image;
})
.catch((topAssisterError) => alert('invalid request'))

// Top goalkeeper data
fetch('http://localhost:3000/top_goalkeeper')
.then((topGoalkeeperResource) => topGoalkeeperResource.json())
.then((topGoalkeeperData) => {
    const topGoalkeeperImage = document.getElementById('topGoalkeeperImage');
    const topGoalkeeperText = document.getElementById('topGoalkeeperText');

    topGoalkeeperImage.src = topGoalkeeperData.image;
})
.catch((topGoalkeeperError) => alert('invalid request'))

// Promising talent data
fetch('http://localhost:3000/promising_talent')
.then((promisingTalentResource) => promisingTalentResource.json())
.then((promisingTalentData) => {
    const promisingTalentImage = document.getElementById('promisingTalentImage');
    const promisingTalentText = document.getElementById('promisingTalentText');

    promisingTalentImage.src = promisingTalentData.image;
})
.catch((promisingTalentError) => alert('invalid request'))
