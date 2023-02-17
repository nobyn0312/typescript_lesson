import React from 'react';
import logo from './logo.svg';
import './App.css';

const name ="hello";
let nameChange ="hello"
nameChange ='hello2';

let username = "Hello";

let dummNum =2;

let bool =true;

let array =[true , false ,true]

// 配列
let array2 = [0,1,"hello"];

// オブジェクト
interface NAME {
  first:string,
  last:string | null,
}

let nameobj :NAME ={first:"Yamada",last:"Taro"}

const func1 =(x : number, y:number):number =>{
  return x + y;
}

// inetersection Type 複数のタイプを結合
type PROFILE ={
  age:number,
  city:string;
};

type LOGIN ={
  username:string;
  password:string;
}


type USER =PROFILE & LOGIN;

const userA:USER ={
  age:30,
  city:"tokyo",
  username:"xxx",
  password:"yyy",
}
// Union Types
let value : boolean | number;
value = 10;

let arrayUni : (number | string)[];
arrayUni =[0,1,2,"うんこ"]

let company :"facebook" | "Google" | "Amazon"
company = "Amazon"

let memory :256 | 512 
memory = 256;

// type of
let msg : string ="Hi";
let msg2 : typeof msg;
msg2 ="ちんこ";

let animal ={cat : "small cat"}
let newAnimal :typeof animal ={cat : "big cat"}

// keyof
type KEYS ={
  primary :string,
  secondary : string,
}

let key :keyof KEYS 

key ="primary"

// keyof + typeof
const SPORTS ={
  soccer : "soccer",
  basebaall : 'baseball',
}
let keySports : keyof typeof SPORTS;
keySports ="soccer"

// enum
enum OS{
  windows,
  mac,
  linux,
}
interface PC {
  id:number,
  OSType:OS,
}
const PC1 :PC={
  id:1,OSType:OS.windows,
};
const PC2 :PC={
  id:1,OSType:OS.mac,
};



function App() {
  return (
    <div className="App">
      <header className="App-header">


      </header>
    </div>
  );
}

export default App;
