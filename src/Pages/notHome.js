import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add, minus, ganti } from '../redux/action'
import { Button, Input } from 'reactstrap'

class NotHome extends Component{
    
    edit = () => {
        let input = this.text.value;
        console.log(input)
    }

    render(){
        console.log(this.props.count)
        return(
            <div className='d-flex justify-content-center row'>
                <div>
                    <Button onClick={this.props.minus}>
                        -
                    </Button>
                    {this.props.count}
                    <Button onClick={this.props.add}>
                        +
                    </Button>
                </div>
                <div>
                    <Input type='text' innerRef={(text) => this.text = text}/>
                    <Button  onClick={this.edit}>
                        Click Me !
                    </Button>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        count : state.count.count
    }
}

export default connect(mapStatetoProps, { add, minus, ganti })(NotHome)