var app = new function(){
  this.el = document.getElementById('countries');
  this.countries = ['France', 'Germany', 'England', 'Spain', 'Belgium', 'Italy'];
  this.Count = function(data){
    var el = document.getElementById('counter');
    var name = 'country';
    if(data){
      if(data > 1){
        name = 'countries';
      }
      el.innerHTML = data + ' ' + name;
    } else{
      el.innerHTML = 'No ' + name;
    }
  };
  this.FetchAll = function(){
    var data = '';
    if(this.countries.length > 0){
      for(i = 0; this.countries.length; i++){
        data += '<tr>';
        data += '<td>' + this.countries[i] + '<td>';
        data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
        data += '</tr>';
      }
    }
    this.Count(this.countries.length);
    return this.el.innerHTML = data;
  };

  this.Add = function(){
    el = document.getElementById('add-name');
    var country = el.value; // Get the value
    if(country){
      this.countries.push(country.trim()); // Add the new value
      el.value = ''; // Reset input value
      this.FetchAll(); // Display the new list
    }
  };

  this.Edit = function(item){
    var el = document.getElementById('edit-name');
    el.value = this.countries[item]; // Display the value in the field
    document.getElementById('spoiler').style.display = 'block'; // Display fields
    self = this;
    document.getElementById('saveEdit').onsubmit = function(){
      var country = el.value; // Get the value
      if(country){
        self.countries.splice(item, 1, country.trim()); // Edit value
        self.FetchAll(); // Display the new list
        CloseInput(); // Hide fields
      }
    }
  };

  this.Delete = function(item){
    this.countries.splice(item, 1); // Delete the current row
    this.FetchAll(); // Display the new list
  };

  app.FetchAll();
  function CloseInput(){
    document.getElementById('spoiler').style.display = 'none';
  }
};