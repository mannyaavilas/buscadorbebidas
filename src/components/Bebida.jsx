import { Button, Card, Col } from 'react-bootstrap'

function Bebida({bebida}) {
  return (
    <Col md={6} lg={3}>
        <Card className='mb-4'>
            <Card.Img 
                variant='top'
                src={bebida.strDrinkThumb}
                alt={`Imagen de bebida ${bebida.strDrink}`}
            />

            <Card.Body>
                <Card.Title>{bebida.strDrink}</Card.Title>
                <Button 
                    variant='danger'
                    className='w-100 text-uppercase mt-2'
                >
                    Ver Receta
                </Button>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default Bebida
