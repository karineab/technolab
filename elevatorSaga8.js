{
    init: function(elevators, floors) {

        for (let i = 0; i < elevators.length; i++) { 
            this.initElevator(elevators[i], i); 
        };
        for (let i = 0; i < floors.length; i++) {
            this.initFloor(floors[i],elevators, i);
        };
    
    }, 
        initFloor: function(floor, elevators, index) {
            floor.on("up_button_pressed", function () {
                elevators[0].goToFloor(index); 
            }); 
            floor.on("down_button_pressed", function () { 
                elevators[0].goToFloor(index); 
            });
        }, 
        initElevator: function(elevator, index) {
             elevator.on("idle",function () {
                console.log("idle fired" + elevator.loadFactor() + elevator.destinationQueue[0]); 
                  if (elevator.loadFactor() > 0.3) {
                   elevator.goToFloor(elevator.getPressedFloors()[index]);
                  };
        });
        elevator.on("floor_button_pressed", function (floorNum) {

              let self = elevator;
              self.goToFloor(floorNum);


        });

      } ,


      update: function(dt, elevators, floors) {
          // We normally don't need to do anything here
      }
}
