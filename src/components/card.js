import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import placeholder from './../assets/placeholder.jpeg'

const CardBlog = () => {
    return (
      <Card style={{ width: "300px", margin: "2%"}}>
        <Card.Img variant="top" src={placeholder} />
        <Card.Body>
          <Card.Title>Article Title</Card.Title>
          <Card.Text>
            Insert description of article here, where users gain a better understanding of what the article is about.
          </Card.Text>
          <Button variant="primary">Read</Button>
        </Card.Body>
      </Card>
    );
  }
  
  export default CardBlog;

