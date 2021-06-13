var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,r=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&s(e,a,t[a]);if(n)for(var a of n(t))o.call(t,a)&&s(e,a,t[a]);return e},c=(e,n)=>t(e,a(n));import{f as m,R as i,r as p,a as d}from"./vendor.dc432d34.js";m.initializeApp({apiKey:"AIzaSyDrcgJR5crCdwxZIrLKSfD7SR544t_ebpo",authDomain:"task-app-5bd50.firebaseapp.com",projectId:"task-app-5bd50",storageBucket:"task-app-5bd50.appspot.com",messagingSenderId:"701089778766",appId:"1:701089778766:web:f134bd570fa7f80b4a871f"});const u=m.firestore(),b=({task:e})=>{const{taskName:t,description:a,responsible:n,importance:l,id:o}=e;return i.createElement("div",{className:"flex flex-col bg-gray-100 w-full p-2 rounded my-2"},i.createElement("section",{className:"text-xl font-bold"},t),i.createElement("section",{className:"font-normal text-md text-gray-700"},a),i.createElement("section",{className:"font-bold text-md text-blue-900"},"Responsible: ",n),i.createElement("section",{className:`font-bold text-sm ${{High:"text-red-800",Medium:"text-yellow-600",Low:"text-black"}[l]}`},"Importance: ",l),i.createElement("section",{className:"flex justify-end text-white"},i.createElement("button",{className:"bg-red-600 m-1 px-3 py-1 rounded focus:outline-none hover:bg-red-800",onClick:()=>(async e=>u.collection("tasks").doc(e).delete())(o)},"Delete")))},f=()=>{const e={taskName:"",responsible:"",description:"",importance:"Low"},[t,a]=p.exports.useState(e),n=e=>{a(c(r({},t),{[e.target.name]:e.target.value}))};return i.createElement("form",{className:"w-2/5 px-2",onSubmit:n=>{n.preventDefault(),(e=>{const t=m.firestore.FieldValue.serverTimestamp();u.collection("tasks").add(c(r({},e),{createdAt:t}))})(t),a(e)}},i.createElement("div",{className:"my-1 text-base"},i.createElement("label",{className:"block text-white"},"Task"),i.createElement("input",{className:"rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full",type:"text",name:"taskName",placeholder:"Insert a task",autoComplete:"off",value:t.taskName||"",onChange:n,autoFocus:!0})),i.createElement("div",{className:"my-1 text-base"},i.createElement("label",{className:"block text-white"},"Responsible"),i.createElement("input",{className:"rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full",type:"text",name:"responsible",placeholder:"Insert a responsible",autoComplete:"off",value:t.responsible||"",onChange:n})),i.createElement("div",{className:"my-1 text-base"},i.createElement("label",{className:"block text-white"},"Description"),i.createElement("textarea",{className:"rounded-sm p-2 mt-3 focus:outline-none bg-gray-100 w-full",cols:"20",rows:"5",name:"description",placeholder:"Description...",value:t.description||"",onChange:n})),i.createElement("div",{className:"my-1 text-base"},i.createElement("label",{className:"block text-white"},"Importance"),i.createElement("select",{className:"rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full appearance-none",name:"importance",value:t.importance,onChange:n},i.createElement("option",{value:"Low"},"Low"),i.createElement("option",{value:"Medium"},"Medium"),i.createElement("option",{value:"High"},"High"))),i.createElement("button",{className:"block text-center text-white bg-green-600 my-4 p-3 rounded hover:bg-green-800 w-full focus:outline-none"},"Submit"))},x=()=>{const[e,t]=p.exports.useState([]);return p.exports.useEffect((async()=>{var e;e=t,u.collection("tasks").orderBy("createdAt","desc").onSnapshot((t=>{const a=[];t.forEach((e=>{a.push(c(r({},e.data()),{id:e.id}))})),e(a)}))}),[]),i.createElement("div",{className:"App pb-5"},i.createElement("h1",{className:"text-white text-4xl text-center mb-3"},"To Do App"),i.createElement("div",{className:"flex justify-center gap-4"},i.createElement(f,null),i.createElement("div",{className:"w-1/2"},e.map((e=>i.createElement(b,{key:e.id,task:e}))))))};function E(){return i.createElement(x,null)}d.render(i.createElement(i.StrictMode,null,i.createElement(E,null)),document.getElementById("root"));