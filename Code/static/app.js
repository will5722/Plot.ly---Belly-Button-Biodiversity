//Function to create initial graphs and populate the dropdown menu.
function init() {
    d3.json("../Data/samples.json").then((sampleData => {
        //Select the dropdown menu.
        var menu = d3.select("#selDataset");
        
        sampleData.names.forEach((name) => {
            menu.append("option").text(name);
        });

        //TO DO: create/add function to create initial plots 
    }
    ))
};


init();