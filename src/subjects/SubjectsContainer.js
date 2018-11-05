import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SubjectsContainer extends Component {
  render() {
    const { subjects } = this.props.location.state.topic;
    const { topic } = this.props.location.state;
    const { match } = this.props;
    console.log(subjects, topic, match);
    return (
      <div>
        <p>Subjects Container</p>
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
                >
                  {subject.title}
                </Link>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default SubjectsContainer;
