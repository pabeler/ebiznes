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
                <div class="col-8">
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
            </div>
      </div>
    );
  }
  
  export default Settings;
  