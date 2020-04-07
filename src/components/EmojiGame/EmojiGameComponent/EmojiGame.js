import React from 'react';
import { withRouter } from 'react-router-dom';

import EmojiCard from '../../EmojiGame/EmojiCard/EmojiCard.js';
class EmojiGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emojis: [{ id: null, isClicked: false, name: null, image: null }],
            score: null,
            topScore: null,
            gameState: 'PLAYING'
        };
    }
    componentDidMount() {
        this.getEmojis();
    }

    getEmojis = () => {
        const emojisData = [{ id: 1, isClicked: false, name: 'Exploding Head', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-1.png' },
            { id: 2, isClicked: false, name: 'Grinnig Face with Sweat', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-2.png' },
            { id: 3, isClicked: false, name: 'Smiling Face with Heart-Eyes', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-3.png' },
            { id: 4, isClicked: false, name: 'Smirking Face', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-4.png' },
            { id: 5, isClicked: false, name: 'Thinking Face', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-5.png' },
            { id: 6, isClicked: false, name: 'Winking Face', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-6.png' },
            { id: 7, isClicked: false, name: 'Grinning Face', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-7.png' },
            { id: 8, isClicked: false, name: 'Crying Face', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-8.png' },
            { id: 9, isClicked: false, name: 'Astonished Face', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-9.png' },
            { id: 10, isClicked: false, name: 'Face with Tears of Joy', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-10.png' },
            { id: 11, isClicked: false, name: 'Star-Struck', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-11.png' },
            { id: 12, isClicked: false, name: 'Winking Face with Tongue', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-12.png' }
        ];
        this.setState({ emojis: emojisData });
    }



    render() {
        const { emojis } = this.state;
        if (emojis.length !== 0) {
            return (
                <div>
                <EmojiCard emojis={emojis}/>
        	</div>
            )
        } else {
            return null;
        }
    }


}


export default withRouter(EmojiGame);