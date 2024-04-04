import { getData } from "./context.service";

const project="http://localhost:4000/add-restarent/"

const resturl ="http://localhost:4000/restarents"

//get data
export function getUserData(){
    return getData();
}

export function getRestarentData(){
    return getData(resturl);
}