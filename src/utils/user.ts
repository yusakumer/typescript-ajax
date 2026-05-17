import {createElement, getElementById} from "./dom";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address:Address;
    phone: string;
    website: string;
    company: Company;
}

type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo:Geo;
}

type Geo = {
    lat:string;
    lng:string;
}

type Company = {
    name: string;
    catchPhrase: string;
    bs:string;
}


/**
 * APIからユーザー一覧を取得する
 * @returns userList
 */

export const fetchUser = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
        throw Error("Could not fetch user");
    }
    const userList:User[]= await res.json();
    return userList;
}

/**
 * DOMにユーザー一覧を出力する
 */

export const appendUserList = (userList:User[]) => {
    userList.forEach(user => {
        const li = createElement("li",user.name);
        const ul = getElementById("user-list");
        ul.appendChild(li);
    })
}
