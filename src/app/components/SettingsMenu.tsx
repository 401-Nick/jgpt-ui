import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SettingsMenu = () => {
    return (
        <div className='settingsMenu'>
            OpenAI API Key <input type='string' placeholder='OpenAI API Key' id='OPENAI_API_KEY'/>
        </div>
    );
};

export default SettingsMenu;
