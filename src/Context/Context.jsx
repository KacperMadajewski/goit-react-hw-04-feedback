import { createContext } from 'react';

// const countContext = createContext({good: 0, bad: 0, neutrl: 0});


const CountGoodContext = createContext(0);
const CountBadContext = createContext(0);
const CountNeutralContext = createContext(0);


export {CountGoodContext, CountBadContext, CountNeutralContext};
