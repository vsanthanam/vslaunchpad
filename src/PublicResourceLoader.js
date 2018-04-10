// @flow

function loadPublicResource(resource: string) {

  const publicUrl = process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "";

  // eslint-disable-next-line
  (publicUrl: string);

  return publicUrl + "/" + resource;

}

export default loadPublicResource;
