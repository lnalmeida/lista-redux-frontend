import React, { Component } from 'react'
import Grid from '../template/grid'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { add, changeDescription, search, clear } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(event) {
        const { add, search, description } = this.props
        if(event.key === 'Enter') {
            event.shiftKey ? search() : add(description)
        } else if(event.key === 'Escape') {
            this.props.clear()
        }
    }

    render() {
        const { add, search, description, clear } = this.props
        return (
            <div role="form" className="todoForm">
               <Grid cols='12 9 10'>
                   <input 
                        id="description" 
                        className="form-control" 
                        placeholder="Adicione uma tarefa"
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description}
                   />
               </Grid>
               <Grid cols='12 3 2'>
                   <IconButton 
                        type='primary' 
                        icon='plus'
                        onClick={() => add(description)}>
                   </IconButton>
                   <IconButton 
                        type='info'
                        icon='search'
                        onClick={() => search()}>
                    </IconButton>
                    <IconButton
                        type='default'
                        icon='close'
                        onClick={() => clear()}>
                    </IconButton>
               </Grid>
            </div>
        )
    }        
}


const mapStateToProps = state => ({description: state.todos.description})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ add, changeDescription, search, clear }, dispatch)
    
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
