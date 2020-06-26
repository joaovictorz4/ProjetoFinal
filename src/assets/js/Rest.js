import axios from 'axios'

var url = "http://192.168.1.104:9090";
alouu = (mob) => {
    console.log(mob)
    axios.post(url + "/mob", mob).then(res => {
        console.log(res)
    })
}

function post(){
    return alouu;
}

export { post };