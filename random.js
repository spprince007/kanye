const loadProfile = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => profiles(data.results))
}
const profiles = users => {
    const profile = document.getElementById('profile');
    for (const user of users) {
        const createADiv = document.createElement('div');
        createADiv.innerHTML = `
        <h3>Title: ${user.gender}</h3>
        `
        profile.appendChild(createADiv);
    }


}