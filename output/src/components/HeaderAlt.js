import React from 'react';

import safePrefix from '../utils/safePrefix';

export default class HeaderAlt extends React.Component {
    render() {
        return (
            <header id="header-alt" className="site-header-alt">
              <nav id="single-navigation" className="site-navigation-alt" arialabel="Main Navigation">
                <a className="home-link" href={safePrefix('/')}><span className="icon-arrow-left"
                    ariahidden="true" /> All Articles</a>
              </nav>
            </header>
        );
    }
}
