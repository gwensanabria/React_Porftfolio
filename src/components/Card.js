import React from 'react'
import CardInfo from '../components/CardInfo'


function Card(props) {

    return(
        <div className='d-inline-block g-card' onClick={(e) => props.click(props.item)}>
            <img className='g-card-image' src='https://cdn.business2community.com/wp-content/uploads/2013/09/best-press-release-example.jpg' alt='https://cdn.business2community.com/wp-content/uploads/2013/09/best-press-release-example.jpg' />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
        </div>
    )

}

export default Card;