import React ,{Component} from "react";
import './todoList.css'
class TodoItems extends Component{
    constructor(props){
        super(props);
        this.createTasks=this.createTasks.bind(this)
        // this.tick=this.tick.bind(this)
    }
    createTasks(item){
    return <li key={item.key} >
        <button onClick={()=>this.delete(item.key)}  className="buttonnnnn">X </button>
        <button onClick={()=>this.tick(item.key)} className="button2">T </button>
        {/* <button onClick={()=>this.untick(item.key)} className="button3">UT </button>
         */}
    {item.done ? <span style={{textDecoration:'line-through',color:'red'}}>{item.text}</span>:<span>{item.text}</span>

       } </li>
    }
    delete(key)
    {
        this.props.delete(key);
    }
    tick(key)
    {
        this.props.tick(key);
    }
    untick(key)
    {
        this.props.untick(key);
    }
  
    render(){

        var todoEntries=this.props.entries;
        var listItems=todoEntries.map(this.createTasks);

        return(
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
}
export  default TodoItems;