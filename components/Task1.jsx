import React, { useState } from 'react'
import uuid from 'react-uuid';

export default function UserData() {
        const [obj, setObj] = useState({
            'prop1':'value1',
            'prop2':'value2',
            'prop3':'value3'
        });
        const initProds = [
            {id:uuid(),name:'prod1',catg:'catg1',cost:100},
            {id:uuid(),name:'prod2',catg:'catg2',cost:200},
            {id:uuid(),name:'prod3',catg:'catg3',cost:300},
        ]
        const [notes, setNotes] = useState(initProds)
        const [inputName,setInputName] = useState('')
        const [inputCatg,setInputCatg] = useState('')
        const [inputCost,setInputCost] = useState('')
        const [editId,setEditId] = useState(null)
        function remItem(id){
            setNotes(notes.filter(note => note.id !== id))
        }
        function addItem(){
            let arr = {id:uuid(),name:inputName,catg:inputCatg,cost:inputCost};
            setNotes([...notes,arr])
        }
        const result = notes.map(note => {
		return <>
        <tr key={note.id}>
            <td>
            {note.id}
            </td>
            <td>
            {note.name}
            </td>
            <td>
            {note.catg}
            </td>
            <td>
            {note.cost}
            </td>
            <td>
            <button onClick={()=>{remItem(note.id)}}>Удалить</button>
            </td>
            <td>
            {/* <button onClick={()=>{editProduct(note.id)}}>Редактировать</button> */}
            </td>
        </tr>
        </>
	});
        return <div>
            <h2>Task1</h2>
            <h3>Сделайте 3 кнопки. Пусть первая кнопка изменяет значение свойства prop1, вторая - prop2, а третья - prop3.</h3>
            <p>{obj.prop1}</p>
            <button onClick={()=>setObj({...obj,...{prop1:'!'}})}>Изменить prop1</button>
            <p>{obj.prop2}</p>
            <button onClick={()=>setObj({...obj,...{prop2:'!'}})}>Изменить prop2</button>
            <p>{obj.prop3}</p>
            <button onClick={()=>setObj({...obj,...{prop3:'!'}})}>Изменить prop3</button>
            <h3>Возьмите массив с продуктами initProds и выведите его в виде HTML таблицы.</h3>
            <h3>Возьмите таблицу с продуктами initProds. В конце каждого ряда сделайте ячейку, в которой будет кнопка для удаления продукта.</h3>
            <h3>Сделайте под таблицей инпуты для добавления нового продукта.</h3>
            <h3>Сделайте под таблицей форму для редактирования продукта. Добавьте в таблицу еще одну колонку, в которой будут кнопки для редактирования продуктов.</h3>
            <table>
                {result}
            </table>
            <h4>Добавить элемент</h4>
            <label>Название:</label>
            <input value = {inputName} onChange={(event)=>setInputName(event.target.value)} />
            <label>категория</label>
            <input value = {inputCatg} onChange={(event)=>setInputCatg(event.target.value)} />
            <label>Стоимость </label>
            <input type = 'number' value = {inputCost} onChange={(event)=>setInputCost(event.target.value)} />
            <button onClick={()=>{addItem()}}>Save</button>
            <hr />
            <h4>Изменить элемент</h4>
            <label>Название:</label>
            <input value = {inputName} onChange={(event)=>setInputName(event.target.value)} />
            <label>категория</label>
            <input value = {inputCatg} onChange={(event)=>setInputCatg(event.target.value)} />
            <label>Стоимость</label>
            <input type = 'number' value = {inputCost} onChange={(event)=>setInputCost(event.target.value)} />
            <button onClick={()=>{addItem()}}>Save</button>


        </div>;
    }

    