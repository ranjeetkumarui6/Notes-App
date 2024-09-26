
import { useState } from 'react'
import styles from './App.module.css'
import Card from './Components/Card'
import FormField from './Widgets/FormField/Index'

function App() {

  // let person=[
  //   {
  //     id:1,
  //     title:"Ranjeet",
  //     desc:"i am ranjeet",
  //   },
  //   {
  //     id:2,
  //     title:"Vijay",
  //     desc:"i am Vijay",
  //   },
  //   {
  //     id:3,
  //     title:"kaif",
  //     desc:"i am kaif",
  //   }
  // ]

  let [alldata,setalldata]=useState([])
  const [title,settitle]=useState("")
  const [desc,setdesc]=useState("")

  const titledata=(e)=>{
    settitle(e.target.value)
  }
  const descdata=(e)=>{
    setdesc(e.target.value)
  }
  let ids;
 const savedata=()=>{
   ids=Math.floor((Math.random())*100000);
  if(title===""){
    alert("Please Enter The Title")
  }else if(desc===""){
    alert("Please Enter The Description")
  }else{
    setalldata(()=>[...alldata,{ids,title,desc}])
   

  }
  settitle("")
  setdesc("")
 }
// console.log(alldata)
const deletefun=(e)=>{
 
 let filterdata= alldata.filter((item)=>{
     return (item.ids!==e)

  })
  setalldata(filterdata)
 
  }
  const editfun=(e)=>{
    alldata.map((item)=>{
        if(item.ids==e){
          setdesc(item.desc)
           settitle(item.title)
        }
    })
    let filterdata= alldata.filter((item)=>{
      return (item.ids!==e)
 
   })
   setalldata(filterdata)
  }
  return (
    <>
    <div className={styles.formContainer}>
      <FormField type="text" placeholder="Enter The Title" getvalue={title} getChange={titledata} />
      <textarea className={styles.textArea} value={desc} onChange={(e)=>descdata(e)} placeholder='Enter The Description'></textarea>
     <div className={styles.btnContainer}>
      <button className={styles.formSave} onClick={savedata}>Save Note</button>
        </div>
     <div className={styles.cards}></div>
     {
      alldata.map((item)=>{
      return <Card title={item.title} desc={item.desc}  ids={item.ids} deletefun={deletefun} editfun={editfun}/>
      })
     }
      {alldata.length>0 ?"" :<p className={styles.para}>Not Result !</p>}
      
    </div>
    </>
  )
}

export default App
