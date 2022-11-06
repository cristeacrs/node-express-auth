import React from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import "./List.scss";

export interface IReteta {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
}

export type ListProps = {
  items: IReteta[];
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
};

const List = ({ items, onDelete, onEdit }: ListProps) => {
  const generateList = items.map((item: IReteta) => {
    return (
      <Card key={item.id} className={"inColoana_item"} style={{ width: "18rem", }}>
        <Card.Body className="cardBody">
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            { item.description } 
          </Card.Text>
          <Card.Text> <strong>{ item.id }</strong> </Card.Text>
          <Stack className="itemStack" direction="horizontal" gap={2}>
            <Button className="itemButton" onClick={() => onEdit(item.id)} variant="primary">Edit</Button>
            <Button className="itemButton" onClick={() => onDelete(item.id)} variant="danger">Delete</Button>
          </Stack>
        </Card.Body>
      </Card>
    );
  });

  return (
    <div className="containerList">
      <h1>Retete list</h1>
      <div className="inColoana">
       { generateList }
      </div>
    </div>
  );
};

export default List;
