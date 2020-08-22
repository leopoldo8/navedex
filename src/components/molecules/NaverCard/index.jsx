import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import {
  Card,
  CardImage,
  NaverName,
  NaverJob,
  Actions,
  Wrapper
} from './style';

/**
 * The NaverCard molecule displays navers in the home page
 */
const NaverCard = ({ info, onClick }) => {
  const history = useHistory();

  const goTo = (e, path) => {
    e.stopPropagation();
    history.push(path);
  }

  return (
    <Card onClick={onClick}>
      <Wrapper>
        <CardImage src={info.url} />
        <NaverName>{ info.name }</NaverName>
        <NaverJob>{ info.job_role }</NaverJob>
        <Actions>
          <i className="icon-delete" onClick={(e) => goTo(e, `/navers/${info.id}/delete`)} />
          <i className="icon-edit" onClick={(e) => goTo(e, `/navers/${info.id}/edit`)} />
        </Actions>
      </Wrapper>
    </Card>
  );
}

NaverCard.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    admission_date: PropTypes.string,
    job_role: PropTypes.string,
    user_id: PropTypes.string,
    project: PropTypes.string,
    birthdate: PropTypes.string,
    url: PropTypes.string
  }).isRequired,
  onClick: PropTypes.func.isRequired
}

export default NaverCard;
