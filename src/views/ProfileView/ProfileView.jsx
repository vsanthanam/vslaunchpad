// @flow

import * as React from 'react';

import LinkView from '../LinkView/LinkView';
import LinkController from '../../LinkController';
import { getProfiles } from '../../parts/Firebase/Firebase';

type Link = {

  name: string,
  key: string,
  url: string,
  desc: string,
  display_url: string,
  exclude: boolean

}

type ProfileViewProps = {};
type ProfileViewState = {

  profiles: Array<Array<Link>>

};

class ProfileView extends React.Component<ProfileViewProps, ProfileViewState> {

  constructor(props: ProfileViewProps) {

    super(props);
    this.state = {profiles: []};

  }

  render() {

    var controller = new LinkController("profiles", this.state.profiles, false);

    var loading = this.state.profiles.length === 0 ? true : false;

    return(

      <LinkView title="profiles" subtitle="https://{profile}.vsanthanam.com" controller={controller} loading={loading}/>

    );

  }

  componentDidMount() {

    getProfiles((data) => {

      this.setState({profiles: this.state.profiles.concat(data)});
      // console.log(data);

    });

  }

}

export default ProfileView;
