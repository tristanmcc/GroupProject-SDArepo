import React from "react";
import Videos from './Videos';


export default function VideosPage({course, currentUser}) {
 // const [currentUser, setCurrentUser] = useState([]);

 /*  const getUserRole = () => {
    UserApi.getCurrentUser().then((response) => {
      setCurrentUser(response.data);
    });
  };

  useEffect(() => {
    getUserRole();
  }, []); */

  return (
    <>
      <h1>Lectures Page</h1>

      <Videos course={course} currentUser={currentUser} />
    </>
  );
}
