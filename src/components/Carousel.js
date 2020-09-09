import React from 'react'
import kass from '../assets/images/example.png'
import Card from '../components/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


class Carousel extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Project Name',
                    subTitle: 'Project Subtitle',
                    imgSrc: kass,
                    link: 'https://google.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Project Name',
                    subTitle: 'Project Subtitle',
                    imgSrc: kass,
                    link: 'https://youtube.com',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Project Name',
                    subTitle: 'Project Subtitle',
                    imgSrc: kass,
                    link: 'https://github.com',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Project Name',
                    subTitle: 'Project Subtitle',
                    imgSrc: kass,
                    Link: 'https://google.com',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Project Name',
                    subTitle: 'Project Subtitle',
                    imgSrc: kass,
                    Link: 'https://youtube.com',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Project Name',
                    subTitle: 'Project Subtitle',
                    imgSrc: kass,
                    Link: 'https://github.com',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        console.log(id)

        let items = [...this.state.items]

        items[id].selected = items[id].selected ? false : true

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false
            }
        })

        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className='justify-content-around'>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }

}

export default Carousel