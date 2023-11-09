import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
            </div>

            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>LikedIn News
            <InfoIcon />
            </h2>
            
            
            {newsArticle("New Cure for Common Cold", "Scientists discover a breakthrough remedy, offering hope for faster recovery from the common cold.")}

            {newsArticle("Tiny Drones Revolutionize Delivery", "Micro drones redefine delivery efficiency, navigating tight spaces for swift and precise package transport.")}

            {newsArticle("Pocket-Sized Solar Chargers", "Compact solar chargers hit markets, enabling on-the-go device users to harness renewable energy effortlessly.")}

            {newsArticle("Instant Language Translation", "Language barriers crumble as instant translation devices make communication seamless, fostering global understanding.")}

            {newsArticle("Mindful Tech: Stress-Relief Apps", "New wave of stress-relief apps prioritize mental wellness, offering quick mindfulness exercises for busy individuals.")}

            {newsArticle("Game-Changing Plant-Based Meat", "Next-gen plant-based meats impress with taste and texture, redefining sustainable and delicious dining options.")}

        </div>
    </div>
  )
}

export default Widgets