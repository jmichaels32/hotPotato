import {createContext} from 'react';

export const ImagesContext = createContext({});

export const Images = [
    require('./images/profilePics/jack.jpeg'),
    require('./images/profilePics/daphne.jpeg'),
    require('./images/profilePics/asha.jpeg'),
    require('./images/profilePics/michael.jpeg')
];