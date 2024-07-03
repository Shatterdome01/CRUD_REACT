import React from 'react';
import { Button, Table } from 'reactstrap';

const ListItem = ({ items, deleteItem, setEditingItem }) => {
    return (
        <div>
            <h2>Lista de usuarios registrados</h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Dirección</th>
                    <th>Email</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.email}</td>
                        <td>
                            <Button color="warning" className="mr-2"
                                    onClick={() => setEditingItem(item)}>Editar</Button>
                            <Button color="danger" onClick={() => deleteItem(item.id)}>Eliminar</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ListItem;
