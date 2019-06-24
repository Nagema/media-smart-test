import React from 'react';
import { fetchMembersData } from './services/FetchDataBase';
import MemberList from './components/MemberList';
import MemberDetail from './components/MemberDetail';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      isLoading: true,
      page: 1,
    };
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }
  componentDidMount() {
    this.FetchAllData();
  }
  FetchAllData() {
    this.setState({
      isLoading: true,
    })
    fetchMembersData({ page: this.state.page, pageSize: 20 })
      .then(members => {
        this.setState({
          members: [...this.state.members, ...members],
          isLoading: false,

        })
      });
  }
  handleLoadMore() {
    this.setState({
      page: this.state.page + 1
    })
    this.FetchAllData()
  }

  render() {
    const { members, isLoading } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() =>
            <MemberList
              members={members}
              handleLoadMore={this.handleLoadMore}
              isLoading={isLoading}
            />
          } />
          <Route path="/:memberDetail/:id"
            render={(memberData) =>
              <MemberDetail
                memberId={memberData.match.params.id}
                members={members}
                isLoading={isLoading}
              />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;

