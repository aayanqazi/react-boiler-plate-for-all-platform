import React from "react";
import Test from "./test";

import { Match, Miss, MemoryRouter as Router } from 'react-router';
const routerConfig = () => {
    return (
        <Router>
            <Test />
        </Router>)
}

export default routerConfig;