setTimeout(function () {
    //  Do something
    //oApp.hideMaster()
    console.log("This message will be logged after 1000ms");
}, 1000);

sap.ui.getCore().attachInit(function (data) {
    setTimeout(function () {
        HighchartEmployee.update({  
            series: [
                {
                    name: "Employees",
                    colorByPoint: true,
                    data: [
                        {
                            name: "Male",
                            y: 70,
                            sliced: true,
                            selected: true,
                        },
                        {
                            name: "Female",
                            y: 30,
                        },
                    ],
                },
            ],
        });
        HighchartProjects.update({
            series: [
                {
                    name: "Employees",
                    colorByPoint: true,
                    data: [
                        {
                            name: "Upcoming",
                            y: 60,
                            sliced: true,
                            selected: true,
                        },
                        {
                            name: "In Progress",
                            y: 40,
                        },
                        {
                            name: "Completed",
                            y: 30,
                        },
                    ],
                },
            ],
        });
    }, 1000);
});
