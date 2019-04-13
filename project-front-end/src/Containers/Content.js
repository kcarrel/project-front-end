import React, { Component } from 'react'
import { Container, Heading, Tabs } from 'react-bulma-components'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import ContentCard from '../Components/ContentCard'

class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            youtube: [
                {
                    title: "Pop your eyes with the City Light Pallete!",
                    creator: "Bob Ross",
                    url: "Go here yo!",
                    thumbnail: null
                },
                {
                    title: "Gloss be Gone",
                    creator: "Bob Ross",
                    url: "Go here yo!",
                    thumbnail: null
                },
                {
                    title: "Smokey Eye Tutorial",
                    creator: "Bob Ross",
                    url: "Go here yo!",
                    thumbnail: null
                }
            ],
            reddit: [
                {
                    title: "Top Ten Vintage Palletes",
                    creator: "Bob Ross",
                    url: "Go here yo!",
                    thumbnail: null
                },
                {
                    title: "How To Start A Makeup Channel",
                    creator: "Bob Ross",
                    url: "Go here yo!",
                    thumbnail: null
                },
                {
                    title: "Yet Another Smokey Eye Tutorial",
                    creator: "Bob Ross",
                    url: "Go here yo!",
                    thumbnail: null
                }
            ],
            pinterest: [
                {
                    title: "Do People Use This Anymore?",
                    creator: "Bob Ross",
                    url: "Go here yo!",
                    thumbnail: null
                },
                {
                    title: "Does The API Even Work?",
                    creator: "Bob Ross",
                    url: "Go here yo!",
                    thumbnail: null
                },
                {
                    title: "Should We Support This?",
                    creator: "Bob Ross",
                    url: "Go here yo!",
                    thumbnail: null
                }
            ]
        }
    }

    loadYoutube = () => {
        return this.state.youtube.map((content, index) => (
            <ContentCard content={content} key={index} />
        ))
    }

    loadReddit = () => {
        return this.state.reddit.map((content, index) => (
            <ContentCard content={content} key={index} />
        ))
    }

    loadPinterest = () => {
        return this.state.pinterest.map((content, index) => (
            <ContentCard content={content} key={index} />
        ))
    }

    render() {
        return(
            <Container fluid className={"has-background-info"}>
                <Heading className={"has-text-centered has-text-white"}>Inspiration</Heading>

                <Tabs type="toggle" fullwidth={true} align="centered">
                    
                    <Tabs.Tab active>
                        <Heading size={4}>Youtube</Heading>
                        <Container fluid>
                            {this.loadYoutube()}
                        </Container>
                    </Tabs.Tab>

                    <Tabs.Tab>
                        <Heading size={4}>Reddit</Heading>
                        <Container fluid>
                            {this.loadReddit()}
                        </Container>
                    </Tabs.Tab>

                    <Tabs.Tab>
                        <Heading size={4}>Pinterest</Heading>
                        <Container fluid>
                            {this.loadPinterest()}
                        </Container>
                    </Tabs.Tab>

                </Tabs>

            </Container>
        )
    }
}

export default Content;