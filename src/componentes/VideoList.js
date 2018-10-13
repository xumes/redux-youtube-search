import React from 'react'

import { List, Image } from 'semantic-ui-react'

const VideoList = props => {
    return (
        <div className='video-list'>
            <List animated verticalAlign='middle'>
                <List.Item>
                    <Image avatar src='' />
                    <List.Content>
                        <List.Header>Titulo do Video</List.Header>
                    </List.Content>
                </List.Item>
            </List>

            <List animated verticalAlign='middle'>
                <List.Item>
                    <Image avatar src='' />
                    <List.Content>
                        <List.Header>Titulo do Video</List.Header>
                    </List.Content>
                </List.Item>
            </List>

            <List animated verticalAlign='middle'>
                <List.Item>
                    <Image avatar src='' />
                    <List.Content>
                        <List.Header>Titulo do Video</List.Header>
                    </List.Content>
                </List.Item>
            </List>

            <List animated verticalAlign='middle'>
                <List.Item>
                    <Image avatar src='' />
                    <List.Content>
                        <List.Header>Titulo do Video</List.Header>
                    </List.Content>
                </List.Item>
            </List>
        </div>
    )
}

export default VideoList