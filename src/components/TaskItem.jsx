import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const TaskItem = ({ id, title, done }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Tarea {id}</Card.Title>
        <Card.Text>{title}</Card.Text>
        <Button variant={done ? "success" : "danger"}>
          {done ? "Completado" : "Pendiente"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default TaskItem;
