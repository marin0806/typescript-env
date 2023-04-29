import SaySomething from "../saySomething"; //インスタンス
import genericsBasicSample from "./generics/basic";
import genericsAdvancedSample from "./generics/advanced";

const root: HTMLElement | null = document.getElementById("root");

// インスタンス化
const saySomething = new SaySomething("Hello Typescript")
saySomething.sayText(root)

genericsBasicSample()

genericsAdvancedSample()
