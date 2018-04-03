import * as React from 'react';

import LinkView from '../LinkView/LinkView';
import LinkController from '../../LinkController';
import ProfileList from '../../dataSources/ProfileList.json';

type ProfileViewProps = {};

class ProfileView extends React.Component<ProfileViewProps> {

  render() {

    var controller = new LinkController("profiles", ProfileList);

    return(

      <LinkView title="profiles" subtitle="https://{profile}.vsanthanam.com" controller={controller} />

    );

  }

}

export default ProfileView;
