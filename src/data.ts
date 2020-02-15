import { faHome, faProjectDiagram, faAddressBook, faInfo, faList } from '@fortawesome/free-solid-svg-icons';
import CardMatchGame from './images/card-match-game.png';
import OnlineShop from './images/online-shop.png';

export const links = [
    { name: 'Home', href: '/', icon: faHome },
    { name: 'Skills', href: '/skills', icon: faList },
    { name: 'Projects', href: '/projects', icon: faProjectDiagram },
    { name: 'Other', href: '/other', icon: faInfo },
    { name: 'Contact', href: '/contact', icon: faAddressBook }
];

export const projects = [
    {
        name: 'Card matching game',
        description: 'Simple card matching game with 4 different ' +
            'difficulty levels and a scoreboard. Made with React & Redux.',
        img: CardMatchGame,
        githubLinks: [
            'https://github.com/micdra7/card-match-game'
        ],
        siteLink: 'https://micdra7.github.io/card-match-game/#/'
    },
    {
        name: 'Online shop',
        description: 'Current project of mine. Not a full-fledged online shop, but most of ' +
            'standard functionality is available. Uses ASP.NET Core REST API on backend and ' +
            'React with Typescript on the frontend. Data is stored in PostgreSQL database.',
        img: OnlineShop,
        githubLinks: [
            'https://github.com/micdra7/online-shop-frontend',
            'https://github.com/micdra7/online-shop-backend'
        ],
        siteLink: ''
    }
];
