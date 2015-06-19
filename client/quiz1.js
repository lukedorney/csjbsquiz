Template.fillin.events({
	"submit #create": function(event){
		event.preventDefault();

		var first = event.target.first.value;
		var last = event.target.last.value;
		var proj = event.target.proj.value;
		var meteor = event.target.meteor.value;
		var git = event.target.git.value;

		Profiles.insert({first:first, last:last, proj:proj, meteor:meteor, git:git});

		Router.go('quiz1');
		
	}
});

Template.disp.helpers({
	pros: function(){return Profiles.find({},{sort:{proj: 1, first: 1, last: 1}});}
});

Template.individual.events({
	"click .profile-delete-icon": function(){Profiles.remove(this._id);}
})