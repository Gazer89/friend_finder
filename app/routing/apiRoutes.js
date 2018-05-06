var friends = require('../data/friends');

module.exports = (app) => {
	app.get('/api/friends', (req, res) => {
		res.json(friends);
	})

	app.post('/api/friends', (req, res) => {
		friends.push(req.body);
    })

    app.get("/api/userList", function(req, res) {
        return res.json(friends);
      });
      
    app.post("/api/userList", function(req, res) {
        var newfreind = req.body;
        newfreind.routeName = newfreind.name.replace(/\s+/g, "").toLowerCase();
        console.log(newfreind);
        friends.push(newfreind);
        res.json(newfreind);
      });
      
};



