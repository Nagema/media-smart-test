import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Loading from './Loading';
class MemberList extends React.Component {
  render() {
    const { members, handleLoadMore, isLoading } = this.props;
    return (
      <React.Fragment>
        <Header/>
        <main>
          <ul className='member-list'>
            {members.map((member, index) => 
                <li className='list-container' key={index}>
                  <Link to={`/memberDetail/${member.id}`} style={{textDecoration: 'none'}}>
                  <div className=' list-info' >
                    <div className=' list-info-wrapper'>
                      <img src={member.image} alt={`${member.name} pic`} className='member-list-photo'></img>
                      <h2 className=' member-list-name'>{member.name}</h2>
                    </div>
                    <h3 className=' member-list-age'>Age: {member.age} years old</h3>
                  </div>
                </Link>
              </li> 
            )}
          </ul>
          <div className='load-btn-wrapper'>
            {isLoading ? <Loading/> : <button className='load-more-btn' onClick={handleLoadMore}>Load more</button>}
          </div>
        </main>
      </React.Fragment>
    )
  }
}
export default MemberList;