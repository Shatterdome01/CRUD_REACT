import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Add from "./Add";
import Edit from "./Edit";
import ListItem from "./ListItem";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        await axiosItems();
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
    fetchItems().catch(error => console.error('Error in useEffect:', error));
  }, []);

  const axiosItems = async () => {
    const response = await axios.get('http://localhost:3001/posts');
    setItems(response.data);
  };
  const add = async (item) => {
    const response = await axios.post('http://localhost:3001/posts', item);
    setItems([...items, response.data]);
  };

  const update = async (item) => {
    const response = await axios.put(`http://localhost:3001/posts/${item.id}`, item);
    setItems(items.map(i => (i.id === item.id ? response.data : i)));
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/posts/${id}`);
      setItems(items.filter(i => i.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
      <div className="container mt-5">
        <h1 className="text-center mb-4">Resgistro de usuarios</h1>
        {editingItem ? (
            <Edit editingItem={editingItem} update={update} setEditingItem={setEditingItem} />
        ) : (
            <Add add={add} />
        )}
        <ListItem items={items} deleteItem={deleteItem} setEditingItem={setEditingItem} />
      </div>
  );
};

export default App;
