import React from 'react';

import Card from 'react-bootstrap/Card';

function SkillComponent(props) {

    const styles = {
        card: {
            width: "200px",
            height: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px"
        },

        card_img: {
            paddingTop:"15px",
            width: "150px",
            height: "auto",
            alignSelf: "center"

        },
        card_body: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: 'center'
        },
        card_title: {

        },
        card_text: {
        }
    }

    

    return (
        <div>
            <Card style={ styles.card }>
                <Card.Img style={ styles.card_img } src={ props.img } />
                <Card.Body style={ styles.card_body }>
                    <Card.Title style={ styles.card_title }>{ props.skillName }</Card.Title>
                    {props.description && 
                    <Card.Text style={ styles.card_text }>
                        { props.description }
                    </Card.Text>
                    }
                    
                </Card.Body>
            </Card>
        </div>
    );
}

export default SkillComponent;