import React from 'react';
import { withRouter } from 'react-router-dom';
import './EmojiCard.css';

class EmojiCard extends React.Component {
    renderEmojis = () => {
        const { emojis } = this.props;
        return emojis.map(each =>
            <div key={each.id} className="emojiCard">
    		<img className='emoji' src={each.image} alt=''/>
    		{each.name}
    		</div>
        );
    }

    render() {
        return (<div className='emoji-card-container'>{ this.renderEmojis() }</div>);
    }
}



export default withRouter(EmojiCard);