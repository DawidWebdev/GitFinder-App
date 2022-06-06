//Dark & Light Mode
const toggleButton = document.querySelector('.switch-button');
toggleButton.addEventListener('click', ()=>{
    document.body.classList.toggle('lightmode');
})

//Api
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
const username = document.querySelector('.username-data');
const userid = document.querySelector('.id-data');
const joindata = document.querySelector('.join-data');
const bio = document.querySelector('.bio-data');
const locationdata = document.querySelector('.location-text');
const repos = document.querySelector('.repos-data-subtitle');
const followers = document.querySelector('.followers-data-subtitle');
const following = document.querySelector('.following-data-subtitle');

const avatar = document.querySelector('.avatar').lastChild;
let img = document.createElement("img");

searchButton.addEventListener('click', ()=>{
    const url = `https://api.github.com/users/${searchInput.value}`;

    async function getUrl(){
        let response = await fetch(url);
        let data = await response.json();
        
        console.log(data);
        gitSetup(data);
    }
    getUrl();
})

function gitSetup(data){
    avatar.src = data.avatar_url;
    if(data.name != null) {username.innerHTML = data.name}
    else {username.innerHTML = data.login};
    userid.innerHTML = `@${data.login}`;
    joindata.innerHTML = `Joined ${data.created_at.slice(0, data.created_at.length = 10)}`;
    if(data.location != null) {locationdata.innerHTML = data.location;}
    else {locationdata.innerHTML = undefined}
    if(data.bio != null) {bio.innerHTML = data.bio;}
    else {bio.innerHTML = "This profile doesn't have bio";}
    repos.innerHTML = data.public_repos;
    followers.innerHTML = data.followers;
    following.innerHTML = data.following;   
}

window.addEventListener('load', ()=>{
    let myurl = `https://api.github.com/users/dawidwebdev`;

    async function myUrl(){
        let response = await fetch(myurl);
        let data = await response.json();
        
        gitSetup(data);
        console.log(data);
    }
    myUrl();
})



