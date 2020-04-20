var data = [
	{
		title: "ITEM 1",
		desc: 'The nodal officer was posted at a Deen Dayal Rasoi in Shahjahanabad area of Bhopal which fed more than 1,000 people every day. Food packets for the poor and those in need were also prepared in this kitchen, officials said.				The Bhopal civic body official also used to go to the corporation’s office at Mata Mandir area daily' 
	},
	{
		title: 'Item 2',
		desc: 'The officer reportedly did not show symptoms, but got himself tested on April 16.While the kitchen has been shut, a shelter home close to the Deen Dayal Kitchen is also being sanitised, additional director of the corporation said.'
	},
	{
		title: 'Another item',
		desc: 'A single ExpressVPN subscription comes with easy-to-use apps for every device you own. Mac, Windows, Android, iOS, Linux, routers, and so much more.'
	},
	{
		title: 'PRasad',
		desc: 'alsdfkja;sl a;lskjf;laskf ja;slfk jas;dlfkajs;fldkaj;'
	}

];

function createCollapse() {
	for (var i = 0 ; i < data.length; i++) {
		addItemToAccordian(data[i], i);
	}
}

function addItemToAccordian(item, index) {
	/*  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div> */
  	var headingId = "heading_" + index;
  	var collapseId = "collapse_" + index
  	var cardDiv = document.createElement('div');
  	cardDiv.setAttribute("class", "card");
  	var headerDiv = document.createElement("div");
  	headerDiv.setAttribute("class", "card-header");
  	headerDiv.setAttribute("id", headingId);

  	var h2 = document.createElement("h2");
  	h2.setAttribute("class", "mb-0");

  	var button = document.createElement("button");
  	button.setAttribute("class", "btn btn-link collapsed");
  	button.setAttribute("type", "button");
  	button.setAttribute("data-toggle", "collapse");
  	button.setAttribute("data-target", "#" + collapseId);
  	if (index == 0 ) {
  		button.setAttribute("aria-expanded", "true");
  	} else {
  		button.setAttribute("aria-expanded", "false");
  	}
  	button.setAttribute("aria-controls", collapseId);
  	button.innerHTML = item.title;
  	h2.append(button);
  	headerDiv.append(h2);
  	cardDiv.append(headerDiv);
  	console.log(cardDiv);

  	var collapseDiv  = document.createElement("div");
  	collapseDiv.setAttribute("id", collapseId);
  	collapseDiv.setAttribute("class", "collapse");
  	collapseDiv.setAttribute("aria-labelledby", headingId);
  	collapseDiv.setAttribute("data-parent", "#accordionExample");
  	var cardBodyDiv = document.createElement("div");
  	cardBodyDiv.setAttribute("class", "card-body");
  	cardBodyDiv.innerHTML = item.desc;
  	collapseDiv.append(cardBodyDiv);
  	cardDiv.append(collapseDiv);

  	document.querySelector("#accordionExample").append(cardDiv);
}

createCollapse();