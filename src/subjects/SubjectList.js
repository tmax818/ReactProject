import React from 'react';
import { Link } from 'react-router-dom';

const SubjectList = props => {
  const { subjects } = props.props.location.state.topic;
  const { topic } = props.props.location.state;
  const { match } = props.props;
  console.log(subjects, topic, match);
  console.log(props);
  return (
    <div>
      <h2>{topic.title}</h2>
      <ul>
        {subjects.map(subject => {
          return (
            <div>
              <Link
                key={subject.id}
                to={{
                  pathname: `${match.url}/subjects/${subject.id}`,
                  state: { cards: subject.cards, subject: subject }
                }}
                className="btn btn-primary"
              >
                {subject.title}
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default SubjectList;
