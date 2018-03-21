fetch(`https://api.github.com/repos/${getParameterByName("user") || "CEbbinghaus"}/${getParameterByName("repo") || "WallPear.stellar"}/commits`).then(async v => {
    let k = await v.json()
    if(!k.length)return;
    k.forEach(v => {
        let i = document.createElement("li");
        let m = v.commit.message.split("\n");
        i.innerHTML = `<h3>${m[0]}<br><small>${m[2] ? m[2] : ""}</small></h6>`;
        document.getElementById("list").appendChild(i)
    })
}).catch(e => {
    console.log(e);
    alert("Wrong Username or Repo")
})
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}