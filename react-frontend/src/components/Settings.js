import "./Settings.css"
function Settings() {
    return (
        
      <div class = "row">
        <div class="container col-3 btn-group-vertical gap-3">
                    <button type="button" class="btn btn-light btn-lg">Profile</button>
                    <button type="button" class="btn btn-light btn-lg">Account</button>
                    <button type="button" class="btn btn-light btn-lg">Appearance</button>
                </div>
          <div class="col-8 container settings-block">
                
                <div class="row">
                    <div class="col-4 container">
                        <form action="/action_page.php">
                            <div class="mb-3 mt-3">
                                <label for="email" class="form-label">Name:</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
                            </div>
                            <div class="mb-3 mt-3">
                                <label for="email" class="form-label">Email:</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
                            </div>
                            <div class="mb-3">
                                <label for="pwd" class="form-label">Password:</label>
                                <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
                            </div>
                            <button type="submit" class="btn btn-primary">Update Profile</button>
                        </form>
                    </div>
                    <div class="col-4 container">
                        <div class="dropdown">
                            <div class="dropdown-toggle" data-bs-toggle="dropdown">
                                <img class="img-thumbnail avatar-settings " src="images\avatar.png" alt="avatar"/>
                            </div>
                            
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Upload a photo</a></li>
                                <li><a class="dropdown-item" href="#">Remove photo</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
      </div>
    );
  }
  
  export default Settings;
  