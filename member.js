function skillsMember() {
  return {
    skills: ['JavaScript', 'React', 'Redux', 'Node.js'],
    displaySkills: function() {
      this.skills.forEach(skill => console.log(skill));
    }
  };
}