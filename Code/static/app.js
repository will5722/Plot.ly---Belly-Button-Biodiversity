//Function to create initial graphs and populate the dropdown menu.
function init() {
    d3.json("../Data/samples.json").then((sampleData) => {
        //Select the dropdown menu.
        var menu = d3.select("#selDataset");
        var names = sampleData.names;
        names.forEach((name) => {
            menu.append("option").text(name).property("value", name);
        });

        //Create/add function to create initial plots 
        var initSample = sampleData.names[0]
        createGraphs(initSample);
    })
};


function createGraphs(names) {
    d3.json("../Data/samples.json").then((sampleData) => {
        //Variable for metadata, select demographic table
        var metadata = sampleData.metadata;
        var demoTable = d3.select("#sample-metadata");

        //Clear data in the table
        demoTable.html("");

        //Variable for each samples metadata
        var singleMetadata = metadata.filter(sample => sample.id == names)[0];

        //Add the data to the table
        Object.entries(singleMetadata).forEach(([key, value]) => {
            demoTable.append("h5").text(`${key}: ${value}`);
        });
    })
};


function optionChanged(differentSample) {
    createGraphs(differentSample);
};



init();