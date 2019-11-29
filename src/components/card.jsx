import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const Kartu = (props) => {
  console.log(props.data)
    return (
        <div className='mx-auto'>
            <Card body style={{padding: '50px', width: '300px'}}>
                <CardTitle>{props.contoh}</CardTitle>
                <CardText>{props.contoh2}</CardText>
                <CardText>{props.contoh3}</CardText>
            </Card>
        </div>
  );
};

export default Kartu;