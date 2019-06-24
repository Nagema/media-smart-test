import React from 'react';
import Header from './Header';
import Loading from './Loading';
import { Link } from 'react-router-dom';
class MemberDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     showMore: false
    };
    this.handleShowMore = this.handleShowMore.bind(this);
  }
  handleShowMore() {
    this.setState({
      showMore: true
    })
  }
  render() {
    const { members, memberId, isLoading } = this.props;
     if (isLoading) {
      return (
        <div className='loading-member-detail'>
        <Loading/> 
        </div>
        )
    }
    const selectMember = members.find(eachMember => eachMember.id === memberId);
    const memberBio = selectMember.bio.length > 200 && this.state.showMore === false ?
      <>
        <p>{selectMember.bio.slice(0, 200) + '...' }</p> 
        <button className="show-more-btn" onClick={this.handleShowMore}>Show more</button>
      </>
      : selectMember.bio;
    return selectMember ? (
      <React.Fragment>
        <Header />
        <main className="member-detail-container">
          <div className="member-detail-wrapper">
            <div className='member-detail-info' key={selectMember.id}>
              <div className='member-detail-main-info '>
                <img src={selectMember.image} alt='img' className='member-detail-photo'></img>
                <div className='member-detail-data'>
                  <h2 className='member-detail-name'>Name: {selectMember.name}</h2>
                  <h3 className='member-detail-age'>Age: {selectMember.age}</h3>
                </div>
              </div>
              <div>
                <div className='member-bio'>Bio:
                <div>{memberBio}</div>  
                </div>
              </div>
              <div className='btn-wrapper'>
                <Link to='/' style={{ textDecoration: 'none' }} >
                  <button className='go-back-btn'>Back</button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    ) :
      <Loading />
  }
}
export default MemberDetail;


