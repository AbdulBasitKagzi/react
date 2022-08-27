import React, { Fragment } from "react";

import Users from "./Users";
import styles from "./UserFinder.module.css";
import ErrorBoundary from "./ErrorBoundary";

// creating class based component
class UserFinder extends React.Component {
  DUMMY_USERS = [
    { id: "u1", name: "Max" },
    { id: "u2", name: "Manuel" },
    { id: "u3", name: "Julie" },
    { id: "u4", name: "AbdulBasit" },
  ];
  constructor() {
    super();
    this.state = { filteredUsers: [], searchTerm: "" };
  }

  componentDidMount() {
    this.setState({ filteredUsers: this.DUMMY_USERS });
  }
  // componentdidUpdate() lifecycle method  will work as useEffect with value in dependecy array([])
  componentDidUpdate(prevProp, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler = (event) => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <Fragment>
        <input
          className={styles.finder}
          type="search"
          onChange={this.searchChangeHandler.bind(this)}
        />
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}
// functional based component
// const UserFinder = () => {
//   const DUMMY_USERS = [
//     { id: "u1", name: "Max" },
//     { id: "u2", name: "Manuel" },
//     { id: "u3", name: "Julie" },
//   ];

//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <input
//         className={styles.finder}
//         type="search"
//         onChange={searchChangeHandler}
//       />
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
