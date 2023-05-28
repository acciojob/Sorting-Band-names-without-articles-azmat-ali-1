//your code here

 let bandNames = ["The Beatles", "Aerosmith", "The Who", "Led Zeppelin", "Queen"];

      // Remove articles from band names and sort them
      let sortedBandNames = bandNames
        .map((name) => name.replace(/^(a|an|the)\s+/i, ""))
        .sort((a,b){
			a-b;
		});

      // Print sorted band names in an unordered list
      let bandList = document.getElementById("band");
      sortedBandNames.forEach((name) => {
        let li = document.createElement("li");
        li.innerText = name;
        bandList.appendChild(li);
      });