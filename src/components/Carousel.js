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
                    imgSrc: 'https://live.staticflickr.com/65535/50321733863_6ed19dbb60_b.jpg',
                    link: 'https://github.com/gwensanabria/GitConnected-Project',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Workday Scheduler',
                    subTitle: 'Nine to five daily scheduler that saves input into local storage and highlight the current hour.',
                    imgSrc: 'https://live.staticflickr.com/65535/50321721338_55bfb62f92_b.jpg',
                    link: 'https://github.com/gwensanabria/Work_Day_Scheduler',
                    selected: false
                },
                {
                    id: 2,
                    title: 'POD | E-Learning',
                    subTitle: 'Group project made using MySql, Express, Sequelize. Online learning platform for teachers to upload content so that their student can learn from home. Live site to come.',
                    imgSrc: 'https://live.staticflickr.com/65535/50321733798_8af41daf28_b.jpg',
                    link: 'https://github.com/gwensanabria/POD_APP',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Employee Tracker',
                    subTitle: 'A command line aplication that allows the user to add/view departments, employee roles, and employees as well as update employee roles. Information then gets saved to a MySql database.',
                    imgSrc: 'https://live.staticflickr.com/65535/50322402026_f4f23a7cb2_b.jpg',
                    link: 'https://github.com/gwensanabria/Employee_Tracker',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Note Taker',
                    subTitle: 'Site were user can create, update, delete notes. Notes saved to local machine.',
                    imgSrc: 'https://live.staticflickr.com/65535/50322579617_20ba80b224_b.jpg',
                    link: 'https://github.com/gwensanabria/NoteTaker',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Employee Summery Creator',
                    subTitle: 'A command line application that prompts users for infor about team members and then uses that info to create stylized cards.',
                    imgSrc: 'https://live.staticflickr.com/65535/50321733838_3438980464_b.jpg',
                    link: 'https://github.com/gwensanabria/Employee_Summary',
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