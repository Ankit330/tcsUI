function navigate(action) {
  const area = document.getElementById("actionArea");
   area.style.display = "block"; 

  if (action === "register") {
    //  area.style.display = "block"; 
    area.innerHTML = `
      <h3>Register Underwriter</h3>
      <form>
        <label>Underwriter ID</label>
        <input type="text" value="UW${Math.floor(Math.random()*1000)}" disabled>
        
        <label>Name</label>
        <input type="text" placeholder="Enter name" required>
        
        <label>DOB</label>
        <input type="date" required>
        
        <label>Joining Date</label>
        <input type="date" required>
        
        <label>Password</label>
        <input type="password" placeholder="Enter password" required>
        
        <button type="submit">Create</button>
      </form>
    `;
  }
  else if (action === "search") {
    area.innerHTML = `
      <h3>Search Underwriter</h3>
      <input type="text" placeholder="Enter Underwriter ID">
      <button>Search</button>
    `;
  }
  else if (action === "update") {
    area.innerHTML = `
      <h3>Update Password</h3>
      <input type="text" placeholder="Enter Underwriter ID">
      <input type="password" placeholder="Enter New Password">
      <button>Update</button>
    `;
  }
  else if (action === "delete") {
    area.innerHTML = `
      <h3>Delete Underwriter</h3>
      <input type="text" placeholder="Enter Underwriter ID">
      <button>Delete</button>
    `;
  }
  else if (action === "viewAll") {
    area.innerHTML = `
      <h3>All Underwriters</h3>
      <table>
        <tr>
          <th>Underwriter ID</th>
          <th>Name</th>
          <th>DOB</th>
          <th>Joining Date</th>
        </tr>
        <tr>
          <td>1</td><td>Ankit Kumar Gupta</td><td>2003-09-22</td><td>2025-08-28</td>
        </tr>
        <tr>
          <td>2</td><td>Anuj Mishra</td><td>2003-11-02</td><td>2025-08-28</td>
        </tr>
      </table>
    `;
  }
}
