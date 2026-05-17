import {getElementById} from "../utils/dom";
import {fetchUser} from "../utils/user";

document.addEventListener('DOMContentLoaded', () => {
    const userButton = getElementById("fetch-user");
    userButton.addEventListener('click', async  () => {
        //APIからユーザー一覧を取得
        const userList = await fetchUser();
        console.log(userList);
        //ユーザー一覧をDOMに出力

    })
})