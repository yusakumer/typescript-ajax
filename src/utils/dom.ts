/**
 * id属性からhtml要素を取得する
 * @param id
 * @return HTMLelement
 **/

export const getElementById = (id:string):HTMLElement =>{
    const element = document.getElementById(id);
    if(element === null){
        throw new Error(`Element with id ${id} not found`);
    }
    return element;
}

export const getInputElementById = (id:string):HTMLInputElement => {
    const element = document.getElementById(id);
    if(element === null){
        throw new Error(`Element with id ${id} not found`);
    }
    return element as HTMLInputElement;
}


/**
 * 引数に受け取った名前のDOM,textを生成する
 * @param elementName 要素名
 * @param textContent　要素のtextcontent
 * @returns HTMLElement
 */

export  const createElement = (elementName: string,textContent?: string): HTMLElement => {
    const element = document.createElement(elementName);
    if (typeof textContent !== "undefined"){
        element.textContent = textContent;
    }
    return element;

}