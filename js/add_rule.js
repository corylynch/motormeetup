$(document).ready(function(){

	var add = $('#add-rule');
    var container = $("#rules-container");
    var bigContainer = $("#rules-input");
    var ruleButtons = $("#rule-buttons");
    var number = 1;
    var submit = $("#submit");

    var yes  = $("#yes");

    yes.click(function(){
    	ruleButtons.hide();
    	bigContainer.show();
    	submit.show();
    })

	add.click(function(){
		number++;
		var rule = '<div class = "rule"><input type = "text" name = "rule' + number + '" placeholder = "Rule ' + number + '"></div>';
		container.append(rule);
		console.log(number);
	});

})