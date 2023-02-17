import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from "./data.json"
import TestComponent from './TestComponent';

type USERS =typeof Data;


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

// Generics 
interface GEN<T>{
  item: T;
}
// データ型を後で指定できる
const gen0: GEN<string> ={item:"hello"};
const gen1: GEN<number> ={item:12};

// デフォルト
interface GEN1<T =string>{
  item: T;
}
// 既に型をデフォルトで指定してるので、＜＞がなくてもエラーにならない
const gen3: GEN1 ={item:"hello"}

// 型を選択して指定 extends
interface GEN2<T extends string | number> {
  item:T;
}
const gen4:GEN2<string> ={item:"hello"};
const gen5:GEN2<number>={item:5}
// const gen6:GEN2<boolean>={item:true}


// 型の互換性
const comp1 ="test";
let comp2: string = comp1;

// 関数の型の互換性
let funcComp1 =(x:number) =>{}
let funcComp2 =(x:string)=>{}

// 関数のジェネリックス
function funcGEN<T>(props: T){
  return {item:props}
}
const gen6 = funcGEN("test");
const gen7 = funcGEN<string | null>(null);

// 関数 extends
function funcGEN1<T extends string | null>(props:T){
  return {value:props}
}
const gen8 =funcGEN1("hello");

// propsの使い方
interface Props {
  price:number;
}
function funcGen3<T extends Props>(props:T){
  return {value:props.price};
}
const gen10 = funcGen3({price:3});

const funcGen4 =<T extends Props>(props:T)=>{
  return {value:props.price};
}



const  App:React.FC =()=> {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="hello from App"/>
      </header>
    </div>
  );
}

export default App;
