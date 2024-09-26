import React from 'react'
import styles from './index.module.css'
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

const Card = ({title,desc,ids,deletefun,editfun}) => {


  return (
    <>
      <div className={styles.card}>
        <div className={styles.content}>
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.para}>{desc}</p>
        <div className={styles.cardicons}>
        <div className={styles.delete} onClick={()=>deletefun(ids)}>
        <FaTrash  className={styles.trash}/>
        </div>
        <div className={styles.edit} onClick={()=>editfun(ids)}>
        <FaEdit className={styles.editicon} />
        </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Card
