import React, {Component} from 'react'
import {Segment, Input} from 'semantic-ui-react'

class SearchBar extends Component {
    render() {
        return (
            <div className='search-bar'>
                <Segment stacked>
                    <Input icon='search' size='large' placeholder='Search ...' />
                </Segment>
            </div>
        )
    }
}

export default SearchBar