import SaySomething from "../saySomething"; //インスタンス

const root: HTMLElement | null = document.getElementById("root");

// インスタンス化
const saySomething = new SaySomething("Hello Typescript")
saySomething.sayText(root)
