import { RouteComponentProps } from 'react-router-dom';

import './Title.scss';

const Title = ({ location }: RouteComponentProps) => (
  <h2 className="screen__title">
    {/* {locationToTitle(toTitle(location))} */}
  </h2>
);

export default Title;
