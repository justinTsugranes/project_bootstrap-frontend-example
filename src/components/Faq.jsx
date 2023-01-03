import { Container, Accordion } from 'react-bootstrap'

const Faq = () => (
  <Container id="questions" className="p-5">
    <h2 className="text-center mb-4">Frequently Asked Questions</h2>
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Where exactly are you located?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et fuga
          dicta deserunt rerum sapiente, quibusdam accusamus illo repellendus
          excepturi hic nisi corporis natus laudantium, tempore eligendi nemo
          quis quae quaerat vitae officiis! Assumenda repudiandae odit et optio
          mollitia molestiae repellendus eos libero. Magni provident est commodi
          praesentium explicabo distinctio nemo?
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How much does it cost to attend?</Accordion.Header>
        <Accordion.Body>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta,
          laudantium inventore. Modi dolorem vitae corrupti libero, culpa
          facilis doloribus, pariatur voluptatem beatae assumenda natus repellat
          magni dolorum dolores odio doloremque illum distinctio saepe. Cumque
          numquam delectus ullam a, dolores perferendis consequatur ipsa iste
          sit facere molestiae deserunt est quae pariatur.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What do I need to know</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio,
          odit totam nostrum quam assumenda blanditiis dolores deserunt vitae
          voluptates quas inventore ut recusandae libero. Beatae delectus
          expedita quo ex voluptatum tempora! Dicta sit deserunt harum vero
          accusamus aspernatur nostrum itaque aliquid omnis magnam voluptatibus
          eligendi consectetur, et dolorem velit.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>How do I sign up?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio,
          odit totam nostrum quam assumenda blanditiis dolores deserunt vitae
          voluptates quas inventore ut recusandae libero. Beatae delectus
          expedita quo ex voluptatum tempora! Dicta sit deserunt harum vero
          accusamus aspernatur nostrum itaque aliquid omnis magnam voluptatibus
          eligendi consectetur, et dolorem velit.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Will you help me find a job?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio,
          odit totam nostrum quam assumenda blanditiis dolores deserunt vitae
          voluptates quas inventore ut recusandae libero. Beatae delectus
          expedita quo ex voluptatum tempora! Dicta sit deserunt harum vero
          accusamus aspernatur nostrum itaque aliquid omnis magnam voluptatibus
          eligendi consectetur, et dolorem velit.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </Container>
)

export default Faq
