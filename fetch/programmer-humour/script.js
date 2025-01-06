const fetchUrl="https://xkcd.now.sh/?comic=latest"
fetch(fetchUrl).then(response=>response.json)
.then(data=>console.log(data))