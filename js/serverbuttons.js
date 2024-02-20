$(document).ready(function(){
	$(".server_button").click(function(event){
		console.log("TEST", event.target.dataset.serveruri)

		fetch(event.target.dataset.serveruri + "/info").then(r=> r.json().then(
			j => console.log('\nREQUEST 2',j)
		));

		$("p").slideToggle();
	});
});