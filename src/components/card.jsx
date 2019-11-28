import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const Kartu = (props) => {
  console.log(props)
    return (
        <div className='col-2'>
            <Card body style={{padding: '50px'}}>
                <CardTitle>{props.contoh}</CardTitle>
                <CardText>{props.contoh2}</CardText>
                <CardText>{props.contoh3}</CardText>
            </Card>
        </div>
  );
};

export default Kartu;