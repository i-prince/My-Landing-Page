// Fetching the player stats data on page load
// Top scorer data
fetch('http://localhost:3000/top_scorer')
.then((topScorerResource) => topScorerResource.json())
.then((topScorerData) => console.log(topScorerData))
.catch((topScorerError) => alert('invalid request'))

// Top assister data
fetch('http://localhost:3000/top_assister')
.then((topAssisterResource) => topAssisterResource.json())
.then((topAssisterData) => console.log(topAssisterData))
.catch((topAssisterError) => alert('invalid request'))

// Top goalkeeper data
fetch('http://localhost:3000/top_goalkeeper')
.then((topGoalkeeperResource) => topGoalkeeperResource.json())
.then((topGoalkeeperData) => console.log(topGoalkeeperData))
.catch((topGoalkeeperError) => alert('invalid request'))

// Promising talent data
fetch('http://localhost:3000/promising_talent')
.then((promisingTalentResource) => promisingTalentResource.json())
.then((promisingTalentData) => console.log(promisingTalentData))
.catch((promisingTalentError) => alert('invalid request'))