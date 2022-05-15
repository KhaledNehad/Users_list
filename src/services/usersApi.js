// const getUsers = async () => { 
//     const response = await fetch('https://randomuser.me/api/?results=50');
//     const data = await response.json();
//     return data.results;
// }

const getUsers = async (numberOfUsers, currentPage) => {
  const response = await fetch(
    `https://randomuser.me/api/?results=${numberOfUsers}&page=${currentPage}`
  );
  const data = await response.json();
  return data.results;
};

export default getUsers;