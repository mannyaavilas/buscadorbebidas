import { Button, Form, Row, Col} from "react-bootstrap"

function Formulario() {
  return (
    <Form>
      <Row>
        <Col md={6}>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="nombre">Nombre Bebida</Form.Label>

                <Form.Control 
                    id="nombre"
                    type="text"
                    placeholder="Ej: Tekila, Vodka, Café, etc"
                    name="nombre"
                />
            </Form.Group>
        </Col>
        <Col md={6}>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="categoria">Categoría Bebida</Form.Label>

                <Form.Select
                    id="categoria"
                    name="categoria"
                >
                    <option value="">- Selecciona Categoria -</option>
                </Form.Select>
            </Form.Group>
        </Col>
      </Row>
    </Form>
  )
}

export default Formulario
