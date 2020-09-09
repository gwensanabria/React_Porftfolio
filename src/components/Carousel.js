import React from 'react'
// import kass from '../assets/images/example.png'
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
                    title: 'Campsite Finder',
                    subTitle: 'Group project made using two APIs. Uses state selection to find National Park campgrounds, while also returning relevant park info and the weather forecast for the day.',
                    imgSrc: 'https://live.staticflickr.com/65535/50322243867_0e8b66220c_m.jpg',
                    link: 'https://github.com/gwensanabria/GitConnected-Project',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Workday Scheduler',
                    subTitle: 'Nine to five daily scheduler that saves input into local storage and highlight the current hour.',
                    imgSrc: 'https://live.staticflickr.com/65535/50322062946_97f9b5c36e_m.jpg',
                    link: 'https://github.com/gwensanabria/Work_Day_Scheduler',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Employee Tracker',
                    subTitle: 'A comand line aplication that allows the user to add/view departments, employee roles, and employees as well as update employee roles. Information then gets saved to a MySql database.',
                    imgSrc: 'https://live.staticflickr.com/65535/50321394138_371134e25c_m.jpg',
                    link: 'https://github.com/gwensanabria/Employee_Tracker',
                    selected: false
                },
                {
                    id: 3,
                    title: 'POD | E-Learning',
                    subTitle: 'Group project made using MySql, Express, Sequelize. Online learning platform for teachers to upload content so that their student can learn from home. Live site to come.',
                    imgSrc: 'https://live.staticflickr.com/65535/50322243832_9a8d05ddfa_m.jpg',
                    Link: 'https://github.com/gwensanabria/POD_APP',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Note Taker',
                    subTitle: 'Site were user can create, update, delete notes. Notes saved to local machine.',
                    imgSrc: 'https://live.staticflickr.com/65535/50321394168_edc3aa3d9c_m.jpg',
                    Link: 'https://github.com/gwensanabria/NoteTaker',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Employee Summery Creator',
                    subTitle: 'A team generator command line application that prompts users for information about the team manager and then information about the team members. Then uses that information to create stylized cards.',
                    imgSrc: 'https://live.staticflickr.com/65535/50321394188_38b96e6b53_m.jpg',
                    Link: 'https://github.com/gwensanabria/Employee_Summary',
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