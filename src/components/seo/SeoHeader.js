import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class SeoHeader extends Component {
  render(){
    return(
      <Helmet>
        <title>Home | Neo React</title>
        <meta name="title" content="Home | Neo React"></meta>
        <meta name="description" content="Home of The Matrix"></meta>
        <meta name="keywords" content="Neo, Matrix"></meta>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
        <script>{`window.SERVER_DATA = {serverData: '__SERVER_DATA__'};`}</script>
      </Helmet>
    );
  }
}

export default SeoHeader;
