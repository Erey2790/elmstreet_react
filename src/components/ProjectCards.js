import React, { Component } from 'react';
import { CardGroup } from 'react-bootstrap';
import { Card } from 'react-bootstrap';


class ProjectCards extends Component {
    render() {
        return(
           
               <CardGroup>
                   <Card>
                       <Card.Img variant='top' src='holder.js/100px160' />
                       <Card.Body>
                           <Card.Title>Card title</Card.Title>
                           <Card.Text>
                               This is a wider card with supporting text bellow as a natural lead in to additional content.This content is a little bit longer.
                           </Card.Text>
                       </Card.Body>
                   </Card>
                   <Card>
                       <Card.Img variant='top' src='holder.js/100px160' />
                       <Card.Body>
                           <Card.Title>Card title</Card.Title>
                           <Card.Text>
                               This is a wider card with supporting text bellow as a natural lead in to additional content.This content is a little bit longer.
                           </Card.Text>
                       </Card.Body>
                   </Card>
                   <Card>
                       <Card.Img variant='top' src='holder.js/100px160' />
                       <Card.Body>
                           <Card.Title>Card title</Card.Title>
                           <Card.Text>
                               This is a wider card with supporting text bellow as a natural lead in to additional content.This content is a little bit longer.
                           </Card.Text>
                       </Card.Body>
                   </Card>
               </CardGroup>
            
        )
    }
}

export default ProjectCards