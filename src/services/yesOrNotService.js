export const BASE_URL = "https://yesno.wtf/api"

// fetch

export async function getAnswerAsync(){
    try{
        const response = await fetch(BASE_URL)
        const data =  await response.json();
        return data;

    }catch(error){
        console.log(error)
    } 
}

export function getAnswer(){
    let dataDevuelta = {}
    fetch(BASE_URL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            return data
        })
        .catch(error => {console.log(error)})
    console.log(dataDevuelta)

}