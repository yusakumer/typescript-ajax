import {getElementById} from "../utils/dom";
import {appendUserList, fetchUser} from "../utils/user";

document.addEventListener('DOMContentLoaded', () => {
    const userButton = getElementById("fetch-user");
    userButton.addEventListener('click', async  () => {
        //APIからユーザー一覧を取得
        const userList = await fetchUser();
        //バリデーション

        //ユーザー一覧をDOMに出力
        appendUserList(userList);
    })
})