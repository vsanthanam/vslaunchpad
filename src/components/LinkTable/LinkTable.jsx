// @flow

import * as React from 'react';

import { urlForLink, openLink, imageUrlForLink } from '../../LinkController.js';

import './LinkTable.less';

type Link = {

  name:string,
  key:string,
  url:string,
  desc:string,
  display_url:string,
  exclude: boolean

}

type LinkRowProps = {
  link: Link
}

class LinkRow extends React.Component<LinkRowProps> {

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

type LinkIconCellProps = {
  link: Link
}

class LinkIconCell extends React.Component<LinkIconCellProps> {

  render() {

    var url = imageUrlForLink(this.props.link);

    return(

      <td className="link-cell link-icon-cell">
        <img className="link-icon-image" src={url} alt={this.props.link.name} />
      </td>

    );

  }

}

type LinkDetailCellProps = {
  link: Link
}

class LinkDetailCell extends React.Component<LinkDetailCellProps> {

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

class EmptyRow extends React.Component<{}> {

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

class LoadingRow extends React.Component<{}> {

  render() {

    return(

      <tr>
        <td className="empty-row-content">
        Loading
        </td>
      </tr>

    );

  }

}

type LinkTableProps = {

  dataSource:Array<Link>,
  loading: boolean

};

class LinkTable extends React.Component<LinkTableProps> {

  render() {

    var rows = [];

    if (this.props.dataSource.length > 0) {

      for (var i = 0; i < this.props.dataSource.length; i++) {

        rows.push(<LinkRow key={this.props.dataSource[i].name} link={this.props.dataSource[i]} />);

      }

    } else if (this.props.loading) {

      rows.push(<LoadingRow key="loading" />);

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

export default LinkTable;
