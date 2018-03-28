import React, { Component } from 'react';
import { urlForLink, openLink, imageUrlForLink } from '../../LinkController.js';

import './LinkTable.less';

class LinkTable extends Component {

  render() {

    var rows = [];

    if (this.props.dataSource.length > 0) {

      for (var i = 0; i < this.props.dataSource.length; i++) {

        rows.push(<LinkRow key={this.props.dataSource[i].name} link={this.props.dataSource[i]} />);

      }

    } else {

      rows.push(<EmptyRow key="empty"/>);

    }

    return(

      <div className="link-table-container">
        <table className="link-table">
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>

    )

  }

}

class LinkRow extends Component {

  launch() {

    openLink(this.props.link);

  }

  render() {

    return(

      <tr className="link-row" onClick={() => this.launch()}>
        <LinkIconCell link={this.props.link} />
        <LinkDetailCell link={this.props.link} />
      </tr>

    );

  }

}

class LinkIconCell extends Component {

  render() {

    var url = imageUrlForLink(this.props.link);

    return(

      <td className="link-cell link-icon-cell">
        <img className="link-icon-image" src={url} alt={this.props.link.name} />
      </td>

    );

  }

}

class LinkDetailCell extends Component {

  descriptionForLink(link) {

    var displayUrl = link.display_url !== undefined ? link.display_url : urlForLink(link);

    if (link.desc === undefined) {

      return displayUrl;

    }

    return link.desc + " | " + displayUrl;

  }


  render() {

    return(

      <td className="link-cell link-detail-cell">
        <b>{this.props.link.name}</b>
        <br />
        {this.descriptionForLink(this.props.link)}
      </td>

    );

  }

}

class EmptyRow extends Component {

  render() {

    return(

      <tr>
        <td className="empty-row-content">
        No Results
        </td>
      </tr>

    );

  }

}

export default LinkTable;
