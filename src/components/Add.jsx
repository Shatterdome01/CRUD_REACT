import React, {useState} from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const Add = ({ add }) => {
    const [item, setItem] = useState({ name: '', address: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem({ ...item, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        add(item);
        setItem({ name: '', address: '' });
    };

    return (
        <div className="mb-4">
            <h2>Agregar Usuario</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="name">Nombre</Label>
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        value={item.name}
                        onChange={handleChange}
                        placeholder="Nombre"
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="address">Dirección</Label>
                    <Input
                        type="text"
                        name="address"
                        id="address"
                        value={item.address}
                        onChange={handleChange}
                        placeholder="Dirección"
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Correo electrónico</Label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        value={item.email}
                        onChange={handleChange}
                        placeholder="Correo electrónico"
                        required
                    />
                </FormGroup>
                <Button color="primary" type="submit">Agregar</Button>
            </Form>
        </div>
    );
};

export default Add;
