import { Card, Button } from "react-bootstrap";
import { toTitleCase, toSentenceCase } from "../../utils";
const BlogCard = ({ blogPost }) => {
  const { userId, title, body } = blogPost;
  return (
    <Card className="blog-card">
      <Card.Body>
        <Card.Title>{toTitleCase(title)}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          User Number {userId}
        </Card.Subtitle>
        <Card.Text>{toSentenceCase(body)}</Card.Text>
        <Button variant="primary">"Add to Favs"</Button>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
