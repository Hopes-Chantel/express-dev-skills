const skills = [
    {id: 125223, skill: 'JavaScript', learned: true},
    {id: 127904, skill: 'HTML', learned: true},
    {id: 139608, skill: 'Python', learned: false}
  ];
  
  module.exports = {
    getAll,
    getOne, 
    create, 
    deleteOne
  };
  
  function getOne(id) {
    // Use the Array.prototype.find iterator method
    return skills.find(skill => skill.id === parseInt(id));
  }

  function getAll() {
    return skills;
  }

  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    skill.learned = false;
    skills.push(skill);
    }

    function deleteOne(id) {
      // Find the index based on the id of the todo object
      const idx = skills.findIndex(skill => skill.id === parseInt(id));
      skills.splice(idx, 1);
    }