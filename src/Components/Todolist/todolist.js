import React, { useState } from 'react';
import classes from "./todolist.module.css";
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const Todolist = () => {

    const [items, setitems] = useState([]);

    let handleNewTask = () => {
        let newArray = items.concat(document.getElementById("newItem").value);
        document.getElementById("newItem").value="";
        setitems(newArray);
    }

    let handleDelete = (toDel) => {
        let newArray=items.filter(item=>{
            return item!=toDel;
        })
        setitems(newArray);
    }

    let handleEdit = (toEdit) => {
        let newArray=items.filter(item=>{
            return item!=toEdit;
        })
        setitems(newArray);
        document.getElementById("newItem").value=toEdit;
        document.getElementById("newItem").focus();
    }

    let renderItems = null;
    if (items) {
        renderItems = items.map(item => {
            return (
                <div className={classes.item} key={Math.random()}>
                    <div className={classes.itemTextCont}>
                        <input className={classes.itemText} value={item} disabled />
                    </div>
                    <div className={classes.actionsCont}>
                        <IconButton onClick={() => handleDelete(item)} aria-label="delete">
                            <DeleteIcon style={{ color: "grey" }} />
                        </IconButton>
                        <IconButton onClick={() => handleEdit(item)} aria-label="delete">
                            <EditIcon style={{ color: "grey" }} />
                        </IconButton>
                    </div>
                </div>
            )
        })
    }


    return (
        <div className={classes.rootCont}>

            <div className={classes.content}>


                <div className={classes.item}>
                    <div className={classes.itemTextCont}>
                        <input className={classes.mainInput} id="newItem" placeholder="What needs to be done today?" />
                    </div>
                    <div className={classes.actionCont}>
                        <IconButton onClick={handleNewTask}>
                            <AddCircleOutlineIcon style={{ color: "grey" }} />
                        </IconButton>
                    </div>
                </div>

                <hr />

                <div className={classes.links}>
                    <p className={classes.link} style={{ color: "white" }}>View All</p>
                    <p className={classes.slash}> / </p>
                    <p className={classes.link}>Active</p>
                    <p className={classes.slash}> / </p>
                    <p className={classes.link}>Completed</p>
                    <p className={classes.slash}> / </p>
                </div>

                <hr />

                <div className={classes.items}>
                    {renderItems}
                </div>
            </div>
        </div>
    );
}

export default Todolist;